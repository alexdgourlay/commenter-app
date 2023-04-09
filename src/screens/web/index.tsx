import React from 'react';
import Web from '../../components/organisms/web/web';
import {WebContextProvider} from '../../context/web/webContext';
import Commentary from '../../components/organisms/web/commentary/commentary';

export default () => {
  return (
    <WebContextProvider>
      <Web />
      <Commentary />
    </WebContextProvider>
  );
};
