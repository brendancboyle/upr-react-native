import React from 'react';
import { StyleSheet, Text, ScrollView, SafeAreaView, StatusBar } from 'react-native';
import Button from '../General/Button';

export default class ControlPage extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Control',
      headerLeft: (
        <Button
          onPress={() => navigation.goBack(null)}
          icon="chevron-left"
          isHeaderBack={true}
        />
      )
    }
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle="light-content" />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff'
  },
});