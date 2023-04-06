import React, {useState} from 'react';
import {TextInput} from 'react-native-paper';

interface Props {
  url: string;
  onSubmitUrl: (url: string) => void;
}

const AddressInput = (props: Props) => {
  const {url, onSubmitUrl} = props;

  const [currentUrl, setCurrentUrl] = useState(url);

  return (
    <>
      <TextInput
        dense
        mode="outlined"
        value={currentUrl}
        autoComplete="off"
        autoCorrect={false}
        spellCheck={false}
        keyboardType="web-search"
        onChangeText={text => {
          setCurrentUrl(text);
        }}
        onSubmitEditing={event => {
          onSubmitUrl(event.nativeEvent.text);
        }}
      />
    </>
  );
};

export default AddressInput;
