import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { useSelector } from 'react-redux';
import Login from '../screens/Login';
import SignUp from '../screens/Signup';
import Home from '../screens/Home';

const Stack = createStackNavigator();

const AppNavigator = () => {
  const { user } = useSelector((state) => state.auth);
  return (
    <Stack.Navigator>
      {!user ? (
        <>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="SignUp" component={SignUp} />
        </>
      ) : (
        <Stack.Screen name="Home" component={Home} />
      )}
    </Stack.Navigator>
  );
};

export default AppNavigator;
