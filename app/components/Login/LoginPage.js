import React from 'react';
import { StyleSheet, Text, Button, View } from 'react-native';
import Header from './Header';
import Controls from './Controls';

export default class LoginPage extends React.Component {
  static navigationOptions = {
    title: 'UPR: Remote',
    headerStyle: {
      backgroundColor: '#330033',
    },
    headerTintColor: '#fff',
  };

  addOne() {
    const { TokenActions, Token } = this.props;
    TokenActions.SetToken(Token + 1);
  }

  render() {
    return (
      <View style={styles.container}>
        <Header />
        <Controls />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  }
});
