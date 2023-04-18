import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {useCallback} from 'react';
import {HomeNavParamList, Routes} from '../';
import Feed from '../../../components/organisms/feed/feed';
import {gql} from '../../../__generated__';
import {useMutation, useQuery} from '@apollo/client';
import Post from '../../../components/molecules/post/post';
import {Domain, Post as PostType} from '../../../__generated__/graphql';
import Actions from '../../../components/molecules/post/actions/actions';

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
    (post: PostType) => {
      const optimisticPostResponse = {
        post: {
          ...post,
          liked: !post.liked,
        },
      };

      if (!post.liked) {
        likePost({
          variables: {
            postId: post.id,
          },
          optimisticResponse: {
            likePost: {
              ...optimisticPostResponse,
            },
          },
        });
      } else {
        unlikePost({
          variables: {
            postId: post.id,
          },
          optimisticResponse: {
            unlikePost: {
              ...optimisticPostResponse,
            },
          },
        });
      }
    },
    [likePost, unlikePost],
  );

  const handleCommentsPress = useCallback(
    (postId: PostType['id']) => {
      navigation.navigate(Routes.Post, {
        postId,
      });
    },
    [navigation],
  );

  const handleDomainPress = useCallback(
    (domain: Domain['domain']) => {
      navigation.navigate(Routes.Domain, {
        domain,
      });
    },
    [navigation],
  );

  return (
    <Feed
      isLoading={loading}
      onRefresh={refetch}
      data={postsData?.posts || []}
      renderItem={post => (
        <Post
          post={post}
          onDomainPress={() => {
            const domain = post.webAddress?.domain?.domain;
            if (domain) handleDomainPress(domain);
          }}
          renderActions={() => (
            <Actions
              liked={post.liked}
              likeCount={post._count?.likes || 0}
              commentCount={post._count?.comments || 0}
              onCommentsPress={() => handleCommentsPress(post.id)}
              onLikePress={() => handleLikePress(post)}
            />
          )}
        />
      )}
    />
  );
};
