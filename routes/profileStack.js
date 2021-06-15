import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Profile from '../screens/profile';
import Header from '../shared/header';

const ProfileStack = createStackNavigator();

const ProfileStackScreen = () => (
    <ProfileStack.Navigator
        initialRouteName="Profile"
        headerMode="screen"
        screenOptions={{
            headerTintColor: 'white',
            headerStyle: { backgroundColor: 'tomato' },
        }}
    >
        <ProfileStack.Screen
            name="Profile"
            component={Profile}
            options={({ navigation }) => {
                return {
                    headerTitle: () => <Header navigation={navigation} title='Profile' />,
                }
            }}
        />
    </ProfileStack.Navigator>
)

export default ProfileStackScreen;