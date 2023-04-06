import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {HomeNavParamList, Routes} from '../';
import Feed from '../../../components/organisms/feed/feed';
import {gql} from '../../../__generated__';
import {useQuery} from '@apollo/client';
import Post from '../../../components/molecules/post/post';
import {StyleSheet} from 'react-native';

type Props = NativeStackScreenProps<HomeNavParamList, 'Feed'>;

const GET_POSTS = gql(`
  query GetPosts {
    posts {
        ...PostFields
    }
  }
`);

export default (props: Props) => {
  const {navigation} = props;

  const {data, loading, refetch} = useQuery(GET_POSTS);

  return (
    <>
      <Feed
        style={styles.feed}
        data={data?.posts || []}
        renderItem={item => (
          <Post
            post={item}
            onCommentsPress={() => {
              navigation.navigate(Routes.Post, {
                postId: item.id,
              });
            }}
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
        isLoading={loading}
        onRefresh={() => {
          refetch();
        }}
      />
    </>
  );
};

const styles = StyleSheet.create({
  feed: {},
});
