import React, {ReactElement} from 'react';
import {FlatList, TouchableHighlight} from 'react-native';
import {Surface} from '../../atoms';

interface ThreadItem {
  id: string;
}

interface Props<T> {
  data: T[];
  renderItem: (item: T) => ReactElement;
}

const Thread = <T extends ThreadItem>(props: Props<T>) => {
  const {data, renderItem} = props;

  return (
    <Surface elevation={0}>
      <FlatList
        data={data}
        keyExtractor={item => item.id}
        renderItem={({item, separators}) => (
          <TouchableHighlight
            key={item.id}
            onShowUnderlay={separators.highlight}
            onHideUnderlay={separators.unhighlight}>
            {renderItem(item)}
          </TouchableHighlight>
        )}
      />
    </Surface>
  );
};

export default Thread;
