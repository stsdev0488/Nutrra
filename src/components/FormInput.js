import React from 'react';
import { Input } from 'react-native-elements';
import { StyleSheet, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import PropTypes from 'prop-types';

const FormInput = ({
  iconName,
  iconColor,
  returnKeyType,
  keyboardType,
  name,
  placeholder,
  ...rest
}) => (
  <View style={styles.inputContainer}>
    <Input
      {...rest}
      leftIcon={<Ionicons name={iconName} size={28} color={iconColor} />}
      leftIconContainerStyle={styles.iconStyle}
      placeholderTextColor="grey"
      name={name}
      placeholder={placeholder}
      style={styles.input}
    />
  </View>
);

const styles = StyleSheet.create({
  inputContainer: {
    margin: 15,
  },
  iconStyle: {
    marginRight: 10,
  },
});

FormInput.defaultProps = {
  returnKeyType: null,
  keyboardType: null,
};

FormInput.propTypes = {
  iconName: PropTypes.string.isRequired,
  iconColor: PropTypes.string.isRequired,
  returnKeyType: PropTypes.any,
  keyboardType: PropTypes.any,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
};

export default FormInput;
