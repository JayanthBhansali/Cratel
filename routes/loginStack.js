import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Login from '../screens/login';
import OTP from '../screens/otp';
import Header from '../shared/header';

const LoginStack = createStackNavigator();

const LoginStackScreen = () => (
    <LoginStack.Navigator
        initialRouteName="Login"
        headerMode="screen"
        screenOptions={{
            headerTintColor: 'white',
            headerStyle: { backgroundColor: 'tomato' },
        }}
    >
        <LoginStack.Screen
            name="Login"
            component={Login}
            options={({ navigation }) => {
                return {
                    headerTitle: () => <Header navigation={navigation} title='Login' />,
                }
            }}
        />
        <LoginStack.Screen
            name="OTPPage"
            component={OTP}
            options={({ navigation }) => {
                return {
                    headerTitle: () => <Header navigation={navigation} title='Login' />,
                }
            }}
        />
    </LoginStack.Navigator>
)

export default LoginStackScreen;