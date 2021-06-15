import React, { useState } from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { MaterialIcons } from '@expo/vector-icons';

import HomeStackScreen from './homeStack'
import ProfileStackScreen from './profileStack';
import AboutStackScreen from './aboutStack';
import OrderHistoryStackScreen from './orderHistoryStack';
import LoginStackScreen from './loginStack';

const Drawer = createDrawerNavigator();

export default function MyDrawer() {
    const [isLoggedIn, setIsLoggedIn] = useState(true);

    const logInOut = () => {
        setIsLoggedIn(!isLoggedIn);
        console.log(isLoggedIn);
    }

    return (
        <Drawer.Navigator
            initialRouteName="Home"
            headerMode="screen"
            screenOptions={{
                headerTintColor: 'white',
                headerStyle: { backgroundColor: 'tomato' },
                headerTitleStyle: {
                    fontWeight: 'bold',
                },
            }}

        >
            <Drawer.Screen
                name="Home"
                component={HomeStackScreen}
                options={{
                    drawerLabel: 'Home',
                    drawerIcon: () => (
                        <MaterialIcons
                            name='home'
                            size={20}
                            color={'#3f3f3f'}
                        />),
                }}
            />
            <Drawer.Screen
                name="Profile"
                component={ProfileStackScreen}
                options={{
                    drawerLabel: 'Profile',
                    drawerIcon: () => (
                        <MaterialIcons
                            name='person'
                            size={20}
                            color={'#3f3f3f'}
                        />),
                }}
            />
            <Drawer.Screen
                name="OrderHistory"
                component={OrderHistoryStackScreen}
                options={{
                    drawerLabel: 'Order History',
                    drawerIcon: () => (
                        <MaterialIcons
                            name='history'
                            size={20}
                            color={'#3f3f3f'}
                        />),
                }}
            />
            <Drawer.Screen
                name="About"
                component={AboutStackScreen}
                options={{
                    drawerLabel: 'About Us',
                    drawerIcon: () => (
                        <MaterialIcons
                            name='info'
                            size={20}
                            color={'#3f3f3f'}
                        />),
                }}
            />
            {isLoggedIn ?
                <Drawer.Screen
                    name="Logout"
                    component={LoginStackScreen}
                    options={{
                        drawerLabel: 'Logout',
                        drawerIcon: () => (
                            <MaterialIcons
                                name='logout'
                                size={20}
                                color={'#3f3f3f'}
                            />),
                        onPress: { logInOut }
                    }}
                /> :
                <Drawer.Screen
                    name="LogIn"
                    component={LoginStackScreen}
                    options={{
                        drawerLabel: 'Login',
                        drawerIcon: () =>
                            <MaterialIcons
                                name='login'
                                size={20}
                            />,
                        onPress: { logInOut }
                    }}
                />}
        </Drawer.Navigator>
    );
}