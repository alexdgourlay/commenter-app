import React from 'react';
import {StyleSheet} from 'react-native';
import {TextInput} from 'react-native-paper';
import {Surface} from '../../atoms';

interface Props {
  placeholder: string;
  onSubmitComment?: (text: string) => void;
}

const AddComment = (props: Props) => {
  const {placeholder, onSubmitComment} = props;

  const [text, onChangeText] = React.useState('');

  return (
    <Surface elevation={0} style={styles.container}>
      <TextInput
        dense
        placeholder={placeholder}
        right={
          <TextInput.Icon
            icon="send"
            onPress={() => {
              onSubmitComment?.(text);
            }}
          />
        }
        mode="outlined"
        onChangeText={onChangeText}
        value={text}
      />
    </Surface>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
  },
});

export default AddComment;
