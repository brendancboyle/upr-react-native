import React from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet,
  Text,
  TouchableNativeFeedback,
  TouchableOpacity,
  Platform,
  View
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

export default class Button extends React.Component {
  static propTypes = {
    title: PropTypes.string,
    icon: PropTypes.string,
    onPress: PropTypes.func.isRequired,
    disabled: PropTypes.bool,
    style: PropTypes.any,
    isHeader: PropTypes.bool
  };

  getIcon = () => {
    const { icon } = this.props;
    if (icon) {
      return <Icon name={icon} size={28} color="#FFF" />;
    }
  };

  getTitle = () => {
    const { title, icon } = this.props;
    if (title) {
      return (
        <View style={styles.container}>
          {this.getIcon()}
          <Text
            style={[
              styles.buttonText
            ]}
          >
            {title}
          </Text>
        </View>
      );
    } else if (icon) {
      return (
        <View style={styles.container}>
          {this.getIcon()}
        </View>
      );
    }
  };

  render() {
    const { title, onPress, style, isHeader } = this.props;

    return (
      <TouchableOpacity onPress={onPress}>
        <View style={[styles.button, isHeader ? styles.header : undefined, style]}>{this.getTitle()}</View>
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
    minWidth: 40,
    minHeight: 40
  },
  buttonText: {
    paddingLeft: 4,
    color: 'white',
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  header: {
    backgroundColor: 'transparent',
    marginRight: 7,
    marginLeft: 7,
  }
});
