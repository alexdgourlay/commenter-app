import React, {ReactElement} from 'react';
import {FlatList, Pressable, StyleSheet} from 'react-native';
import {type Post as PostType} from '../../../__generated__/graphql';
import {Surface} from '../../atoms';
import {SurfaceProps} from 'react-native-paper';

interface FeedItem {
  id: string;
}

interface Props<T> {
  style?: SurfaceProps['style'];
  data: T[];
  renderItem: (item: T) => ReactElement;
  isLoading?: boolean;
  onRefresh?: () => void;
  onItemPress?: (postId: PostType['id']) => void;
}

const Feed = <T extends FeedItem>(props: Props<T>) => {
  const {style, data, renderItem, isLoading, onRefresh, onItemPress} = props;

  const handleRefresh = () => {
    onRefresh?.();
  };

  return (
    <Surface elevation={1} style={[styles.container, style]}>
      <FlatList
        data={data}
        keyExtractor={item => item.id}
        refreshing={isLoading}
        onRefresh={handleRefresh}
        renderItem={({item}) => (
          <>
            <Pressable
              style={styles.pressable}
              key={item.id}
              onPress={() => {
                onItemPress?.(item.id);
              }}>
              {renderItem(item)}
            </Pressable>
          </>
        )}
      />
    </Surface>
  );
};

const styles = StyleSheet.create({
  container: {},
  pressable: {
    marginHorizontal: 8,
    marginVertical: 12,
  },
});

export default Feed;
