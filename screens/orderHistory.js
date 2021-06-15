import React, { useState } from 'react';
import { Text, View, StyleSheet, FlatList, TouchableHighlight } from 'react-native';

import Card from '../shared/card';

export default function OrderHistory({ navigation }) {

    const [orderList, setOrderList] = useState([
        { schedule: "9 AM - 11 AM, 04 Jun", price: "800", status: "Packing", key: "1" },
        { schedule: "11 AM - 1 PM, 02 Jun", price: "800", status: "Dispatched", key: "2" },
        { schedule: "9 AM - 11 AM, 28 May", price: "800", status: "Delivered", key: "3" },
        { schedule: "8 AM - 10 AM, 27 May", price: "100", status: "Cancelled", key: "4" },
        { schedule: "5 PM - 7 PM, 21 May", price: "800", status: "Delivered", key: "5" },
    ]);


    const styles = StyleSheet.create({
        container: {
            marginVertical: 10,
            flex: 1,
        },
        modalContent: {
            flex: 1,
        },
        fontBold: {
            fontWeight: 'bold',
        },
        dispRow: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 4,
        },
    })

    return (
        < View style={styles.container} >
            <FlatList
                data={orderList}
                renderItem={({ item }) => (
                    <TouchableHighlight
                        activeOpacity={0.6}
                        underlayColor="#DDDDDD"
                    >
                        <Card>
                            <View>
                                <Text>Scheduled for <Text style={styles.fontBold}>{item.schedule}</Text>
                                </Text>
                                <View style={styles.dispRow}>
                                    <Text>Oder value: <Text style={styles.fontBold}>Rs. {item.price}</Text>
                                    </Text>
                                    <Text style={{
                                        backgroundColor: item.status == "Delivered" ? 'green' : item.status == "Cancelled" ? 'red' : 'orange',
                                        paddingHorizontal: 7, paddingTop: 2, paddingBottom: 3, color: '#FFFFFF'
                                    }}>
                                        {item.status}
                                    </Text>
                                </View>
                            </View>
                        </Card>
                    </TouchableHighlight>
                )}
            />
        </View >
    );
}
