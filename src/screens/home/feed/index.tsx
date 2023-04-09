import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {useCallback} from 'react';
import {HomeNavParamList, Routes} from '../';
import Feed from '../../../components/organisms/feed/feed';
import {gql} from '../../../__generated__';
import {useMutation, useQuery} from '@apollo/client';
import Post from '../../../components/molecules/post/post';
import {Post as PostType} from '../../../__generated__/graphql';

type Props = NativeStackScreenProps<HomeNavParamList, 'Feed'>;

const GET_POSTS = gql(`
  query GetPosts {
    posts {
        ...PostFields
    }
  }
`);

const LIKE_POST = gql(`
  mutation LikePost($postId: ID!) {
    likePost(postId: $postId) {
      post {
        ...PostFields
      }
    }
  }
`);

const UNLIKE_POST = gql(`
  mutation UnlikePost($postId: ID!) {
    unlikePost(postId: $postId) {
      post {
        ...PostFields
      }
    }
  }
`);

export default (props: Props) => {
  const {navigation} = props;

  const {data: postsData, loading, refetch} = useQuery(GET_POSTS);

  const [likePost] = useMutation(LIKE_POST);
  const [unlikePost] = useMutation(UNLIKE_POST);

  const handleLikePress = useCallback(
    (postId: PostType['id'], liked: PostType['liked']) => {
      const likeOperation = liked ? unlikePost : likePost;
      likeOperation({
        variables: {
          postId,
        },
      });
    },
    [],
  );

  return (
    <>
      <Feed
        isLoading={loading}
        onRefresh={refetch}
        data={postsData?.posts || []}
        renderItem={item => (
          <Post
            post={item}
            onCommentsPress={() => {
              navigation.navigate(Routes.Post, {
                postId: item.id,
              });
            }}
            onLikePress={() => handleLikePress(item.id, item.liked)}
            onDomainPress={() => {
              const domain = item.webAddress?.domain?.domain;
              if (domain !== undefined) {
                navigation.navigate(Routes.Domain, {
                  domain,
                });
              }
            }}
          />
        )}
      />
    </>
  );
};
