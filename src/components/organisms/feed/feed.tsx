import React, {ReactElement, useCallback} from 'react';
import {FlatList, ListRenderItem, Pressable, StyleSheet} from 'react-native';
import {type Post as PostType} from '../../../__generated__/graphql';
import {Surface} from '../../atoms';
import {SurfaceProps} from 'react-native-paper';

interface FeedItem {
  id: string;
}

interface Props<Item> {
  style?: SurfaceProps['style'];
  data: Item[];
  renderItem: (item: Item) => ReactElement;
  isLoading?: boolean;
  onRefresh?: () => void;
  onItemPress?: (postId: PostType['id']) => void;
}

const Feed = <Item extends FeedItem>(props: Props<Item>) => {
  const {style, data, renderItem, isLoading, onRefresh, onItemPress} = props;

  const handleRefresh = () => {
    onRefresh?.();
  };

  const renderFlatListItem: ListRenderItem<Item> = useCallback(
    ({item}) => (
      <Pressable
        style={styles.pressable}
        key={item.id}
        onPress={() => {
          onItemPress?.(item.id);
        }}>
        {renderItem(item)}
      </Pressable>
    ),
    [onItemPress, renderItem],
  );

  return (
    <Surface elevation={1} style={[styles.container, style]}>
      <FlatList
        data={data}
        keyExtractor={item => item.id}
        refreshing={isLoading}
        onRefresh={handleRefresh}
        renderItem={renderFlatListItem}
        snapToAlignment="start"
      />
    </Surface>
  );
};

const styles = StyleSheet.create({
  container: {},
  pressable: {
    marginHorizontal: 8,
    marginVertical: 8,
  },
});

export default Feed;
