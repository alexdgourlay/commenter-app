import React, {ReactNode, createContext, useRef, useState} from 'react';

export enum FocusArea {
  Utility = 'utility',
  WebView = 'webView',
  Commentary = 'commentary',
}

// The shape of the value passed into the context.
type Value = {
  url: string;
  navigate: (url: string) => void;
  focusedArea: FocusArea;
  focus: (focusArea: FocusArea) => void;
};

// The default values for the context.
export const defaultValue: Value = {
  url: 'https://google.com',
  navigate() {},
  focusedArea: FocusArea.WebView,
  focus() {},
};

export const WebContext = createContext(defaultValue);

export const WebContextProvider = (props: {children: ReactNode}) => {
  const {children} = props;

  const [url, setUrl] = useState(defaultValue.url);
  const [focusedArea, setFocusedArea] = useState(defaultValue.focusedArea);

  const navigate: Value['navigate'] = newUrl => {
    setUrl(newUrl);
  };

  const focus: Value['focus'] = focusArea => {
    setFocusedArea(focusArea);
  };

  return (
    <WebContext.Provider
      value={{
        url,
        navigate,
        focusedArea,
        focus,
      }}>
      {children}
    </WebContext.Provider>
  );
};
