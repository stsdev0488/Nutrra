import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

const ErrorMessage = ({ errorValue }) => (
  <View style={styles.container}>
    <Text style={styles.errorText}>{errorValue}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    marginLeft: 25,
  },
  errorText: {
    color: 'red',
  },
});

ErrorMessage.defaultProps = {
  errorValue: '',
};

ErrorMessage.propTypes = {
  errorValue: PropTypes.string,
};

export default ErrorMessage;
