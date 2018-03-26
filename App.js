import React from "react";
import { Provider, connect } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import { composeWithDevTools } from 'remote-redux-devtools';
import AppNavigation from "./app/containers/AppNavigation";
import RootReducer from "./app/reducers/Index";

const middleware = [];
let store;

if (__DEV__) {
  console.log('Debug mode!');
  const composeEnhancers = composeWithDevTools({ realtime: true, hostname: '192.168.1.112', port: 8000 });
  store = createStore(RootReducer, composeEnhancers(applyMiddleware(...middleware)));
} else {
  store = createStore(RootReducer, applyMiddleware(...middleware));
}

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <AppNavigation />
      </Provider>
    );
  }
}
