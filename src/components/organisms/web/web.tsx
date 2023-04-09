import React, {useContext} from 'react';
import WebView from 'react-native-webview';
import AddressInput from './navigation/addressInput';
import {WebContext, defaultValue} from '../../../context/web/webContext';

const Web = () => {
  const {navigate} = useContext(WebContext);

  return (
    <>
      <AddressInput />
      <WebView
        onNavigationStateChange={event => {
          navigate(event.url);
        }}
        source={{uri: defaultValue.url}}
      />
    </>
  );
};

export default Web;
