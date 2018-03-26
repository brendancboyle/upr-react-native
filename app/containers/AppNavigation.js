import React from 'react';
import { StackNavigator } from 'react-navigation';
import LoginPage from './LoginPage';

export default StackNavigator(
  {
    Login: {
      screen: LoginPage
    }
  },
  {
    initialRouteName: 'Login',
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#330033'
      },
      headerTintColor: '#fff'
    }
  }
);
