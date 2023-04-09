import React, {useContext, useEffect, useState} from 'react';
import {TextInput as PaperTextInput} from 'react-native-paper';
import {FocusArea, WebContext} from '../../../../context/web/webContext';
import {condense} from '../../../../lib/url/url';

const AddressInput = () => {
  const {url, navigate, focusedArea, focus} = useContext(WebContext);

  // The value to show inside the input component i.e. the url.
  const [inputValue, setInputValue] = useState(url);

  const isFocused = focusedArea === FocusArea.Utility;

  useEffect(() => {
    setInputValue(url);
  }, [url]);

  return (
    <>
      <PaperTextInput
        dense
        mode="outlined"
        value={isFocused ? inputValue : condense(inputValue)}
        autoComplete="off"
        autoCorrect={false}
        spellCheck={false}
        keyboardType="web-search"
        onChangeText={text => {
          setInputValue(text);
        }}
        onSubmitEditing={event => {
          navigate(event.nativeEvent.text);
        }}
        onFocus={() => {
          focus(FocusArea.Utility);
        }}
        onBlur={() => {
          focus(FocusArea.WebView);
        }}
      />
    </>
  );
};

export default AddressInput;
