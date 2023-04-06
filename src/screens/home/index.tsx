import React from 'react';
import {
  NativeStackScreenProps,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';

import {MainNavParamList} from '../../main';
import {Routes as MainRoutes} from '../index';
import {
  Domain as DomainType,
  Post as PostType,
} from '../../__generated__/graphql';

import PostScreen from './post';
import FeedScreen from './feed';
import DomainScreen from '../shared/domain';

export enum Routes {
  Feed = 'Feed',
  Post = 'Post',
  Domain = 'Domain',
}

export type HomeNavParamList = {
  Feed: undefined;
  Post: {postId: PostType['id']};
  Domain: {domain: DomainType['domain']};
};

const Stack = createNativeStackNavigator<HomeNavParamList>();

type Props = NativeStackScreenProps<MainNavParamList, MainRoutes.Home>;

const Home = (props: Props) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={Routes.Feed}
        component={FeedScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen name={Routes.Post} component={PostScreen} />
      <Stack.Screen name={Routes.Domain} component={DomainScreen} />
    </Stack.Navigator>
  );
};

export default Home;
