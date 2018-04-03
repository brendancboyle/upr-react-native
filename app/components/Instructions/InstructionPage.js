import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, ScrollView, SafeAreaView, StatusBar } from 'react-native';
import Button from '../General/Button';
import ImagePanel from './ImagePanel';

export default class InstructionPage extends React.Component {
  static propTypes = {
    image: PropTypes.any.isRequired,
    text: PropTypes.string.isRequired,
    next: PropTypes.string.isRequired,
    navigation: PropTypes.any.isRequired
  };

  render() {
    const {image, text, next, navigation} = this.props;

    return (
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle="light-content" />
        <ImagePanel image={image} />
        <ScrollView style={styles.text}>
        <Text>
          {text}
        </Text>
        </ScrollView>
        <Button title="Next" style={styles.button} onPress={() => {navigation.navigate(next)}} />
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
  text: {
    flex: 1,
    padding: 15
  },
  button: {
    margin: 15,
    width: 280
  }
});
