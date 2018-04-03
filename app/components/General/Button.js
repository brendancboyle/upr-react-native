import React from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet,
  Text,
  Image,
  TouchableNativeFeedback,
  TouchableOpacity,
  Platform,
  View
} from 'react-native';

export default class Button extends React.Component {
  static propTypes = {
    title: PropTypes.string,
    image: PropTypes.any,
    onPress: PropTypes.func.isRequired,
    disabled: PropTypes.bool,
    style: PropTypes.any
  };

  getImage = () => {
    const { image } = this.props;
    if (image) {
      return <Image source={image} style={styles.image} resizeMode="contain" />
    }
  }

  getTitle = () => {
    const { title } = this.props;
    if (title) {
      return <Text style={styles.buttonText}>{title}</Text>
    }
  }

  render() {
    const { title, onPress, style } = this.props;

    return (
      <TouchableOpacity onPress={onPress}>
        <View style={[styles.button, style]}>
          {this.getImage()}
          {this.getTitle()}
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#330033',
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    minWidth: 56,
    minHeight: 40
  },
  buttonText: {
    flex: 1,
    padding: 18,
    color: 'white',
    textAlign: 'center'
  },
  image: {
    position: 'absolute',
    width: 40,
    height: 40,
    marginLeft: 8,
    marginRight: 8
  }
});
