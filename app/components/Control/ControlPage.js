import React from 'react';
import { StyleSheet, Text, ScrollView, SafeAreaView, View, StatusBar } from 'react-native';
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
        <View style={styles.buttonContainer}>
          <Button title="M" style={styles.button} />
        </View>
        <View style={styles.buttonContainer}>
          
        </View>
        <View style={styles.buttonContainer}>
          
        </View>
        
        
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  buttonContainer: {
    alignSelf: 'stretch',
    flex: 1,
    backgroundColor: '#AAA'
  },
  button: {
    alignSelf: 'stretch',
  }
});