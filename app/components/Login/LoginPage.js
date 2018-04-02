import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, StatusBar } from 'react-native';
import Header from './Header';
import Controls from './Controls';
import Button from '../General/Button';
import InfoIcon from './Info.png'

export default class LoginPage extends React.Component {
  static navigationOptions = {
    title: 'UPR: Remote',
    headerRight: (
      <Button
        onPress={() => alert('This is a button!')}
        image={InfoIcon}
      />
    ),
  };

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
