import React from 'react';
import { StyleSheet, Text, Button, View } from 'react-native';
import { StackNavigator } from 'react-navigation';

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
      <View style={styles.container}>
        <Text>LoginPage: {this.props.Token}</Text>
        <Button
          title="Add 1"
          onPress={() => {
            this.addOne();
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
