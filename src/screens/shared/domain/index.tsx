import React from 'react';
import Feed from '../../../components/organisms/feed/feed';
import {gql} from '../../../__generated__';
import {useQuery} from '@apollo/client';
import Post from '../../../components/molecules/post/post';
import {StyleSheet} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {HomeNavParamList, Routes} from '../../home';
import { Text } from '../../../components/atoms';

const GET_POSTS = gql(`
  query PostsOnDomain($domain: String!) {
    postsOnDomain(domain: $domain) {
      ...PostFields
    }
  }
`);

type Props = NativeStackScreenProps<HomeNavParamList, Routes.Domain>;

export default (props: Props) => {
  const {route} = props;
  const {domain} = route.params;

  const {data, loading, refetch} = useQuery(GET_POSTS, {
    variables: {
      domain,
    },
  });

  return (
    <>
      <Text variant='headlineLarge'>
        {domain}
      </Text>
      <Feed
        style={styles.feed}
        data={data?.postsOnDomain || []}
        renderItem={item => (
          <Post
            post={item}
            // onCommentsPress={() => {
            //   navigation.navigate(Routes.Post, {
            //     postId: item.id,
            //   });
            // }}
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
