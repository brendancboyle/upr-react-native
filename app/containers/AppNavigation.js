import React from 'react';
import { StackNavigator } from 'react-navigation';
import LoginPage from './LoginPage';
import Instruction1 from '../components/Instructions/Instruction1';

const LoginNavigator = StackNavigator(
  {
    Login: {
      screen: LoginPage
    }
  },
  {
    initialRouteName: 'Login',
    headerMode: 'none'
  }
);

const InstructionNavigator = StackNavigator(
  {
    Instruction1: {
      screen: Instruction1
    }
  },
  {
    initialRouteName: 'Instruction1',
    headerMode: 'none'
  }
);

export default StackNavigator(
  {
    Login: {
      screen: LoginNavigator,
    },
    Instructions: {
      screen: InstructionNavigator
    }
  },
  {
    initialRouteName: 'Login',
    mode: 'modal',
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#330033'
      },
      headerTintColor: '#fff'
    }
  }
);