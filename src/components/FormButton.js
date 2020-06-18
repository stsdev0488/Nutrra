import React from 'react';
import { Button } from 'react-native-elements';
import PropTypes from 'prop-types';

const FormButton = ({ title, buttonType, buttonColor, ...rest }) => (
  <Button
    {...rest}
    type={buttonType}
    title={title}
    buttonStyle={{ borderColor: buttonColor, borderRadius: 20 }}
    titleStyle={{ color: buttonColor }}
  />
);

FormButton.propTypes = {
  title: PropTypes.string.isRequired,
  buttonType: PropTypes.string.isRequired,
  buttonColor: PropTypes.string.isRequired,
};

export default FormButton;
