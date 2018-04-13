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
    isHeader: PropTypes.bool,
    isHeaderBack: PropTypes.bool
  };

  getIcon = () => {
    const { icon, isHeaderBack } = this.props;
    let size = 28;
    if (isHeaderBack) size = 32;
    if (icon) {
      return <Icon name={icon} size={size} color="#FFF" />;
    }
  };

  getTitle = () => {
    const { title, icon, isHeaderBack } = this.props;
    if (title) {
      return (
        <View style={styles.container}>
          {this.getIcon()}
          <Text
            style={[
              styles.buttonText,
              isHeaderBack ? styles.headerBackText : undefined
            ]}
          >
            {title}
          </Text>
        </View>
      );
    } else if (icon) {
      return <View style={styles.container}>{this.getIcon()}</View>;
    }
  };

  render() {
    const { title, onPress, style, isHeader, isHeaderBack } = this.props;

    return (
      <TouchableOpacity onPress={onPress}>
        <View
          style={[
            styles.button,
            isHeader ? styles.header : undefined,
            isHeaderBack ? styles.headerBack : undefined,
            style
          ]}
        >
          {this.getTitle()}
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#B30298',
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    /*
    minWidth: 40,
    minHeight: 40
    */
  },
  buttonText: {
    paddingLeft: 4,
    color: 'white'
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  header: {
    backgroundColor: 'transparent',
    marginRight: 10,
    marginLeft: 10,
    flex: 1
  },
  headerBack: {
    backgroundColor: 'transparent',
    flex: 1,
    marginLeft: 2
  },
  headerBackText: {
    paddingLeft: 0,
    fontSize: 18,
    position: 'relative',
    right: 5
  }
});
