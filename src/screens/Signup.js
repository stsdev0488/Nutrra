import React, { Fragment } from 'react';
import { StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'react-native-elements';
import { Formik } from 'formik';
import * as Yup from 'yup';
import FormInput from '../components/FormInput';
import FormButton from '../components/FormButton';
import ErrorMessage from '../components/ErrorMessage';
import { register } from '../redux/actions/auth';

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .label('Email')
    .email('Enter a valid email')
    .required('Please enter a registered email'),
  password: Yup.string()
    .label('Password')
    .required()
    .min(6, 'Password must have more than 4 characters '),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password')], 'Confirm Password must matched Password')
    .required('Confirm Password is required'),
});

const Signup = (props) => {
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.auth);
  const goToLogin = () => props.navigation.navigate('Login');

  const handleRegister = (values) => {
    dispatch(register(values));
  };

  return (
    <SafeAreaView style={styles.container}>
      <Formik
        initialValues={{
          email: '',
          password: '',
          confirmPassword: '',
        }}
        onSubmit={(values) => {
          handleRegister(values);
        }}
        validationSchema={validationSchema}>
        {({
          handleChange,
          values,
          handleSubmit,
          errors,
          isValid,
          touched,
          handleBlur,
        }) => (
          <Fragment>
            <FormInput
              name="email"
              value={values.email}
              onChangeText={handleChange('email')}
              placeholder="Enter email"
              autoCapitalize="none"
              iconName="ios-mail"
              iconColor="#2C384A"
              onBlur={handleBlur('email')}
            />
            <ErrorMessage errorValue={touched.email && errors.email} />
            <FormInput
              name="password"
              value={values.password}
              onChangeText={handleChange('password')}
              placeholder="Enter password"
              secureTextEntry
              iconName="ios-lock"
              iconColor="#2C384A"
              onBlur={handleBlur('password')}
            />
            <ErrorMessage errorValue={touched.password && errors.password} />
            <FormInput
              name="password"
              value={values.confirmPassword}
              onChangeText={handleChange('confirmPassword')}
              placeholder="Confirm password"
              secureTextEntry
              iconName="ios-lock"
              iconColor="#2C384A"
              onBlur={handleBlur('confirmPassword')}
            />
            <ErrorMessage
              errorValue={touched.confirmPassword && errors.confirmPassword}
            />
            <View style={styles.buttonContainer}>
              <FormButton
                buttonType="outline"
                onPress={handleSubmit}
                title="SIGNUP"
                buttonColor="#F57C00"
                disabled={!isValid || loading}
                loading={loading}
              />
            </View>
          </Fragment>
        )}
      </Formik>
      <Button
        title="Have an account? Login"
        onPress={goToLogin}
        titleStyle={{
          color: '#039BE5',
        }}
        type="clear"
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  buttonContainer: {
    margin: 25,
  },
});

export default Signup;
