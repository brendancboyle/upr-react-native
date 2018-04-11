import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, StatusBar } from 'react-native';
import Header from './Header';
import Controls from './Controls';
import Button from '../General/Button';

export default class LoginPage extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: 'UPR: Remote',
      headerRight: (
        <Button
          onPress={() => navigation.navigate({routeName: 'InstructionStack', key: 'LoginPage'})}
          isHeader={true}
          icon="info"
        />
      )
    }
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
