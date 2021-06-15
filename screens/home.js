import React, { useState } from 'react';
import { Text, View, StyleSheet, FlatList, TouchableHighlight, Modal } from 'react-native';
import * as firebase from 'firebase';
import 'firebase/firestore';

import Card from '../shared/card';
import { useEffect } from 'react/cjs/react.development';


export default function Home({ navigation }) {

    const [prodList, setProdList] = useState([]);
    const db = firebase.firestore();

    useEffect(() => {
        db.collection("Products").get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                // doc.data() is never undefined for query doc snapshots
                // console.log(doc.id, " => ", doc.data());
                setProdList(prevList => [{
                    id: doc.id,
                    title: doc.data().Title,
                    minQty: doc.data().MinQty,
                    price: doc.data().Price,
                    status: true,
                    key: '' + prevList.length + 1,
                    unit: doc.data().Unit,
                }, ...prevList]);
            });
        });
    }, []);

    return (
        < View style={styles.container} >
            <FlatList
                data={prodList}
                renderItem={({ item }) => (
                    <TouchableHighlight
                        activeOpacity={0.6}
                        underlayColor="#DDDDDD"
                        onPress={() => navigation.navigate('Details', id)}>
                        <Card>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <Text style={styles.title}>{item.title}</Text>
                                {item.status ?
                                    <Text style={styles.verified}>
                                        Verified
                                    </Text>
                                    : null}
                            </View>
                            <Text>Min Qty: {item.minQty}/{item.unit}</Text>
                            <Text>Price: Rs. {item.price}</Text>
                        </Card>
                    </TouchableHighlight>
                )}
            />
        </View >
    );
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 10,
        flex: 1,
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    modalContent: {
        flex: 1,
    },
    verified: {
        backgroundColor: 'green',
        paddingHorizontal: 15,
        paddingVertical: 3,
        color: '#FFFFFF',
        marginRight: -16,
    },
})
