import React from 'react';
import {gql} from '../../../__generated__';
import {StyleSheet} from 'react-native';
import {Surface, Text} from '../../atoms';
import {CommentFieldsFragment} from '../../../__generated__/graphql';

interface Props {
  comment: CommentFieldsFragment;
}

const Comment = (props: Props) => {
  const {comment} = props;

  return (
    <Surface elevation={1} style={styles.container}>
      <Text variant="labelMedium">{comment.profile?.name}</Text>
      <Text variant="bodyMedium">{comment.content?.text}</Text>
    </Surface>
  );
};

Comment.fragments = {
  entry: gql(`
    fragment CommentFields on Comment {
        id
        content {
            text    
        }
        profile {
            name
      }
    }
`),
};

const styles = StyleSheet.create({
  container: {
    padding: 8,
  },
});

export default Comment;
