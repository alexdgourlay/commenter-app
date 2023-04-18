import React from 'react';
import Thread from '../../../components/organisms/thread/thread';
import {gql} from '../../../__generated__';
import {useMutation, useQuery} from '@apollo/client';
import {HomeNavParamList, Routes} from '../index';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import AddComment from '../../../components/molecules/comment/addComment';
import {ScrollView, StyleSheet} from 'react-native';
import {Surface, Text} from '../../../components/atoms';
import Comment from '../../../components/molecules/comment/comment';
import Chip from '../../../components/atoms/chip/chip';

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
      <Text>{data?.post?.webAddress?.hash}</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <Chip icon="people">#labour</Chip>
        <Chip icon="people">#conservatives</Chip>
        <Chip icon="people">#BLM</Chip>
        <Chip icon="people">#UKIP</Chip>
      </ScrollView>
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
            });
          }}
        />
      </Surface>
    </Surface>
  );
};

const styles = StyleSheet.create({
  container: {},
  chip: {
    paddingRight: 6,
  },
  thread: {},
  addComment: {
    paddingBottom: 4,
    width: '100%',
  },
});

export default Post;
