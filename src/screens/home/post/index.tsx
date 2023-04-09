import React from 'react';
import Thread from '../../../components/organisms/thread/thread';
import {gql} from '../../../__generated__';
import {useMutation, useQuery} from '@apollo/client';
import {HomeNavParamList, Routes} from '../index';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import AddComment from '../../../components/molecules/comment/addComment';
import {StyleSheet} from 'react-native';
import {Surface} from '../../../components/atoms';
import Comment from '../../../components/molecules/comment/comment';
import PostItem from '../../../components/molecules/post/post';

const GET_POST_SCREEN_DATA = gql(`
 query GetPostScreenData($postId: ID!) {
    post(id: $postId) {
      ...PostFields
    } 
    comments(postId: $postId) {
      ...CommentFields
    }
}
`);

const CREATE_COMMENT = gql(`
  mutation CreateComment($postId: ID!, $contentText: String!) {
      createComment(postId: $postId, contentText: $contentText) {
      ...CommentFields
    }
}
`);

type Props = NativeStackScreenProps<HomeNavParamList, Routes.Post>;

const Post = (props: Props) => {
  const {route} = props;
  const {postId} = route.params;

  const {data} = useQuery(GET_POST_SCREEN_DATA, {
    variables: {
      postId,
    },
  });

  const [createComment] = useMutation(CREATE_COMMENT, {
    update(cache, {data}) {
      const newComment = data?.createComment;

      const existingPostScreenData = cache.readQuery({
        query: GET_POST_SCREEN_DATA,
      });

      if (existingPostScreenData?.comments && newComment) {
        // Add newly made comment to existing comments.
        cache.writeQuery({
          query: GET_POST_SCREEN_DATA,
          data: {
            ...existingPostScreenData,
            comments: [...existingPostScreenData.comments, newComment],
          },
        });
      }
    },
  });

  return (
    <Surface elevation={0}>
      {data?.post && <PostItem post={data.post} card={false} />}
      <Surface elevation={0}>
        {data?.comments && (
          <Thread
            data={data.comments}
            renderItem={item => <Comment comment={item} />}
          />
        )}
      </Surface>
      <Surface elevation={0} style={styles.addComment}>
        <AddComment
          placeholder="Add comment"
          onSubmitComment={text => {
            createComment({
              variables: {
                contentText: text,
                postId,
              },
              refetchQueries: [GET_POST_SCREEN_DATA],
            });
          }}
        />
      </Surface>
    </Surface>
  );
};

const styles = StyleSheet.create({
  container: {},
  thread: {},
  addComment: {
    paddingBottom: 4,
    width: '100%',
    position: 'absolute',
    bottom: 0,
  },
});

export default Post;
