import React from 'react';
import { StyleSheet, Text, Button, View, SafeAreaView, StatusBar } from 'react-native';
import Header from './Header';
import Controls from './Controls';

export default class LoginPage extends React.Component {
  static navigationOptions = {
    title: 'UPR: Remote'
  };

  addOne() {
    const { TokenActions, Token } = this.props;
    TokenActions.SetToken(Token + 1);
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle="light-content" />
        <Header />
        <Controls />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  }
});
