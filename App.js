import React from 'react';
import { Provider, connect } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import { composeWithDevTools } from 'remote-redux-devtools';
import Orientation from 'react-native-orientation';
import AppNavigation from './app/containers/AppNavigation';
import RootReducer from './app/reducers/Index';
import UPRKit from './UPRKit';

const middleware = [];
export let store;

if (__DEV__) {
  console.log('Debug mode!');
  const composeEnhancers = composeWithDevTools({
    realtime: true,
    hostname: '35.196.12.149',
    port: 8000
  });
  store = createStore(
    RootReducer,
    composeEnhancers(applyMiddleware(...middleware))
  );
} else {
  store = createStore(RootReducer, applyMiddleware(...middleware));
}

// Fixes dependency depreciating warning
import { YellowBox } from 'react-native';
YellowBox.ignoreWarnings([
  'Warning: isMounted(...) is deprecated',
  'Module RCTImageLoader'
]);

export default class App extends React.Component {
  componentDidMount() {
    UPRKit.App.AppDidStart();
    Orientation.lockToPortrait();
  }

  render() {
    return (
      <Provider store={store}>
        <AppNavigation />
      </Provider>
    );
  }
}
