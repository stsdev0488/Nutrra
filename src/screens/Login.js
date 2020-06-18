import React, { Fragment, useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'react-native-elements';
import { Formik } from 'formik';
import { showMessage } from 'react-native-flash-message';
import * as Yup from 'yup';
import FormInput from '../components/FormInput';
import FormButton from '../components/FormButton';
import ErrorMessage from '../components/ErrorMessage';
import { login } from '../redux/actions/auth';

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .label('Email')
    .email('Enter a valid email')
    .required('Please enter a registered email'),
  password: Yup.string()
    .label('Password')
    .required()
    .min(6, 'Password must have more than 6 characters '),
});

const Login = ({ navigation }) => {
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.auth);

  const goToSignup = () => navigation.navigate('SignUp');

  const handleLogin = (values) => {
    dispatch(login(values));
  };

  useEffect(() => {
    if (!loading && error) {
      showMessage({
        message: error,
        type: 'danger',
      });
    }
  }, [loading, error]);

  return (
    <SafeAreaView style={styles.container}>
      <Formik
        initialValues={{ email: '', password: '' }}
        onSubmit={(values) => {
          handleLogin(values);
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
              autoFocus
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
            <View style={styles.buttonContainer}>
              <FormButton
                buttonType="outline"
                onPress={handleSubmit}
                title="LOGIN"
                buttonColor="#039BE5"
                disabled={!isValid || loading}
                loading={loading}
              />
            </View>
          </Fragment>
        )}
      </Formik>
      <Button
        title="Don't have an account? Sign Up"
        onPress={goToSignup}
        titleStyle={{
          color: '#F57C00',
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

export default Login;
