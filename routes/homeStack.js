import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { MaterialIcons } from '@expo/vector-icons';

import Home from '../screens/home';
import ProdDetails from '../screens/prodDetails';
import Payment from '../screens/payment';
import Header from '../shared/header';

const Stack = createStackNavigator();

const HomeStackScreen = (props) => (
    <Stack.Navigator
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
        <Stack.Screen
            name="Home"
            component={Home}
            options={({ navigation }) => {
                return {
                    headerTitle: () =>
                        <Header
                            navigation={navigation}
                            title='Cratel'
                        />,
                    headerRight: () =>
                        <MaterialIcons
                            name='add'
                            size={28}
                            color='#FAFAFA'
                        />,
                    headerRightContainerStyle: {
                        marginRight: 13,
                    }

                }
            }}
        />
        <Stack.Screen
            name="Details"
            component={ProdDetails}
            options={({ navigation }) => {
                return {
                    headerRight: () =>
                        <MaterialIcons
                            name='share'
                            size={28}
                            color='#FAFAFA'
                        />,
                    headerRightContainerStyle: {
                        marginRight: 13,
                    }

                }
            }} />
        <Stack.Screen
            name="Payment"
            component={Payment}
            options={{
                title: 'Payment',
            }} />
    </Stack.Navigator>
);

export default HomeStackScreen;