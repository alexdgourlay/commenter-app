import React from 'react';
import {FlatList, Image, StyleSheet} from 'react-native';
import {Text} from 'react-native-paper';

type ItemData = {
  id: string;
  type: 'Image' | 'Text';
  string: string;
};

const data: ItemData[] = [
  {
    id: '1',
    type: 'Image',
    string:
      'https://ichef.bbci.co.uk/news/976/cpsprodpb/9C16/production/_129185993_gettyimages-1249830037.jpg.webp',
  },
  {
    id: '2',
    type: 'Text',
    string: 'What were they thinking??',
  },
];

interface Props {}

const HeroScroll = (props: Props) => {
  const renderItem = ({item}: {item: ItemData}) => {
    switch (item.type) {
      case 'Image':
        return (
          <Image
            style={styles.image}
            source={{
              uri: item.string,
            }}
          />
        );
      default:
        return <Text variant="titleLarge">{item.string}</Text>;
    }
  };

  return (
    <>
      <FlatList
        style={styles.list}
        horizontal
        show
        data={data}
        keyExtractor={item => item.id}
        renderItem={renderItem}
      />
    </>
  );
};

const styles = StyleSheet.create({
  list: {
    height: 250,
  },
  image: {
    height: 250,
    width: 400,
  },
});

export default HeroScroll;
