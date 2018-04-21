import React from 'react';
import {
  StyleSheet,
  Text,
  ScrollView,
  SafeAreaView,
  View,
  StatusBar,
  TouchableOpacity
} from 'react-native';
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
    };
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle="light-content" />
        <Button title="Media" style={styles.button} />
        <Button title="Previous" style={styles.button} />
        <Button title="Next" style={styles.button} />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#fff'
  },
  button: {
    alignSelf: 'stretch',
    flex: 1,
    margin: 15,
  }
});
