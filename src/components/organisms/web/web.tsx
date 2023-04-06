import React, {useEffect, useState} from 'react';
import WebView from 'react-native-webview';
import AddressInput from './navigation/addressInput';

const initialUrl = 'https://google.com';

interface Props {
  onUrlUpdate?: (url: string) => void;
}

const Web = (props: Props) => {
  const {onUrlUpdate} = props;

  const [currentUrl, setCurrentUrl] = useState(initialUrl);

  const updateUrl = (url: string) => {
    setCurrentUrl(url);
    onUrlUpdate?.(url);
  };

  return (
    <>
      <AddressInput
        url={currentUrl}
        onSubmitUrl={url => {
          updateUrl(url);
        }}
      />
      <WebView
        onNavigationStateChange={event => {
          updateUrl(event.url);
        }}
        source={{uri: currentUrl}}
      />
    </>
  );
};

export default Web;
