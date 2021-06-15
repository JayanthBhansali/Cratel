import React, { useState } from 'react';
import { Text, View, StyleSheet, FlatList, TouchableHighlight, Modal } from 'react-native';

export default function AddItem() {

    const [modelOpen, setModalOpen] = useState(true);

    return (
        < View style={styles.container} >

            <Modal visible={modelOpen} animationType='slide'>
                <View style={styles.modalContent}>
                    <Text>Abc</Text>
                </View>
            </Modal>
        </ View>
    )
};


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
    }
})
