import React from 'react';
import { StyleSheet, Text, Image, Button, View } from 'react-native';

export default class LoginPage extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.token}>123456</Text>
        <Text style={styles.prompt}>Enter token on presenting device</Text>
        <View style={styles.button}>
          <Button
            title="Waiting..."
            onPress={() => {
              console.log('Pressed!');
            }}
            color="#CCCCCC"
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: 15
  },
  prompt: {
    fontSize: 18,
    height: 30,
    textAlign: 'center'
  },
  token: {
    fontWeight: 'bold',
    fontSize: 38,
    height: 50,
    textAlign: 'center'
  },
  button: {
    margin: 15,
    width: 200
  }
});
