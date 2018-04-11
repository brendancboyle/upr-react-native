import React from 'react';
import { StyleSheet, Text, ScrollView, SafeAreaView, StatusBar } from 'react-native';
import InstructionPage from './InstructionPage';
import Button from '../General/Button';
import InfoIcon from '../Login/Info.png';

export default class Instruction1 extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Instructions',
      headerLeft: (
        <Button
          onPress={() => navigation.goBack()}
          icon="chevron-left"
          title="Back"
          isHeader={true}
        />
      )
    }
  };

  render() {
    return (
      <InstructionPage 
      text="Hello World 2"
      image={InfoIcon}
      next="Instruction3"
      navigation={this.props.navigation}
      />
    );
  }
}
