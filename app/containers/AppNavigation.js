import React from 'react';
import { StackNavigator } from 'react-navigation';
import LoginPage from './LoginPage';
import Instruction1 from '../components/Instructions/Instruction1';
import Instruction2 from '../components/Instructions/Instruction2';
import Instruction3 from '../components/Instructions/Instruction3';

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
    },
    Instruction2: {
      screen: Instruction2
    },
    Instruction3: {
      screen: Instruction3
    }
  },
  {
    initialRouteName: 'Instruction1',
    headerMode: 'none'
  }
);

export default StackNavigator(
  {
    LoginStack: {
      screen: LoginNavigator,
    },
    InstructionStack: {
      screen: InstructionNavigator
    }
  },
  {
    initialRouteName: 'LoginStack',
    mode: 'modal',
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#4b2c4f'
      },
      headerTintColor: '#fff'
    }
  }
);