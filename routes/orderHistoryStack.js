import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import OrderHistory from '../screens/orderHistory';
import Header from '../shared/header';


const OrderHistoryStack = createStackNavigator();

const OrderHistoryStackScreen = () => (
    <OrderHistoryStack.Navigator
        initialRouteName="OrderHistory"
        headerMode="screen"
        screenOptions={{
            headerTintColor: 'white',
            headerStyle: { backgroundColor: 'tomato' },
        }}
    >
        <OrderHistoryStack.Screen
            name="OrderHistory"
            component={OrderHistory}
            options={({ navigation }) => {
                return {
                    headerTitle: () => <Header navigation={navigation} title='Order History' />,
                }
            }}
        />
    </OrderHistoryStack.Navigator>
)

export default OrderHistoryStackScreen;