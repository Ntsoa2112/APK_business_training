
import React from 'react';
import Navigation from './src/navigation/navigation'
import { Provider } from 'react-redux'
import {StyleSheet} from 'react-native'
import store from './src/store/configureStore'

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store} style={styles.container}>
        <Navigation/>
      </Provider>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
//https://expo.dev/artifacts/33a9d592-38eb-4218-ba0f-057a527341f5