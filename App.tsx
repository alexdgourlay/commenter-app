/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import React from 'react';
import {ApolloClient, ApolloProvider, InMemoryCache} from '@apollo/client';
import IonIcon from 'react-native-vector-icons/Ionicons';
import {useColorScheme} from 'react-native';
import {
  MD3DarkTheme,
  MD3LightTheme,
  Provider as PaperProvider,
  adaptNavigationTheme,
  configureFonts,
} from 'react-native-paper';

import {
  DefaultTheme as NavigationLightTheme,
  DarkTheme as NavigationDarkTheme,
  NavigationContainer,
} from '@react-navigation/native';
import Main from './src/main';

const client = new ApolloClient({
  uri: 'http://localhost:4000',
  cache: new InMemoryCache(),
});

const fontConfig = configureFonts({
  config: {
    fontFamily: 'Outfit-Regular',
  },
});
const {LightTheme, DarkTheme} = adaptNavigationTheme({
  reactNavigationLight: NavigationLightTheme,
  reactNavigationDark: NavigationDarkTheme,
});

const CombinedDefaultTheme = {
  ...MD3LightTheme,
  ...LightTheme,
  colors: {
    ...MD3LightTheme.colors,
    ...LightTheme.colors,
  },
  fonts: fontConfig,
};
const CombinedDarkTheme = {
  ...MD3DarkTheme,
  ...DarkTheme,
  colors: {
    ...MD3DarkTheme.colors,
    ...DarkTheme.colors,
  },
  fonts: fontConfig,
};

function App(): JSX.Element {
  const isDarkTheme = useColorScheme() === 'dark';
  const theme = isDarkTheme ? CombinedDarkTheme : CombinedDefaultTheme;

  return (
    <ApolloProvider client={client}>
      <PaperProvider
        theme={theme}
        settings={{
          icon: props => <IonIcon {...props} />,
        }}>
        <NavigationContainer theme={{...theme, dark: isDarkTheme}}>
          <Main />
        </NavigationContainer>
      </PaperProvider>
    </ApolloProvider>
  );
}

export default App;
