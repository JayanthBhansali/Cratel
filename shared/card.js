import React from 'react';
import { View, StyleSheet } from 'react-native';

export default function Card(props) {
    return (
        <View style={styles.card}>
            <View style={styles.body}>
                {props.children}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        borderRadius: 6,
        elevation: 3,
        backgroundColor: '#FFFFFF',
        shadowOffset: { width: 1, height: 1 },
        shadowColor: '#2C2C2C',
        shadowOpacity: 0.3,
        marginHorizontal: 16,
        marginVertical: 5,
    },
    body: {
        marginHorizontal: 16,
        marginVertical: 12,
    }
})