import React from 'react';
import View from '../../../atoms/view/view';
import {StyleSheet} from 'react-native';
import {Text, IconButton} from '../../../atoms';
import {gql} from '../../../../__generated__';
import {useTheme} from 'react-native-paper';

interface Props {
  liked: boolean;
  likeCount: number;
  commentCount: number;
  onCommentsPress: () => void;
  onLikePress: () => void;
}

const Actions = (props: Props) => {
  const {liked, likeCount, commentCount, onCommentsPress, onLikePress} = props;

  const theme = useTheme();

  return (
    <View style={styles.container}>
      <View style={styles.action}>
        <IconButton
          style={styles.icon}
          icon="chatbubbles"
          size="S"
          onPress={onCommentsPress}
        />
        <Text variant="labelMedium">{commentCount}</Text>
      </View>
      <View style={styles.action}>
        <IconButton
          style={styles.icon}
          iconColor={liked ? theme.colors.primary : undefined}
          icon="heart"
          size="S"
          onPress={onLikePress}
        />
        <Text variant="labelMedium">{likeCount}</Text>
      </View>
    </View>
  );
};

Actions.fragments = {
  entry: gql(`
  fragment ActionsFields on Post {
    liked
    _count {
      comments
      likes
    }
}
`),
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  action: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 2,
  },
  icon: {
    margin: 0,
  },
});

export default Actions;
