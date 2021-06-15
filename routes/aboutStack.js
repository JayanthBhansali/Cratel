import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import About from '../screens/about';
import Header from '../shared/header';
import { View } from 'react-native';

const AboutStack = createStackNavigator();

const AboutStackScreen = () => (
    <AboutStack.Navigator
        initialRouteName="About"
        headerMode="screen"
        screenOptions={{
            headerTintColor: 'white',
            headerStyle: { backgroundColor: 'tomato' },
        }}
    >
        <AboutStack.Screen
            name="About"
            component={About}
            options={({ navigation }) => {
                return {
                    headerTitle: () => <Header navigation={navigation} title='About' />,
                }
            }}
        />
    </AboutStack.Navigator>
)

export default AboutStackScreen;