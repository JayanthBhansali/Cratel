import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function Header({ navigation, title }) {

    const openMenu = () => {
        navigation.openDrawer();
    }

    return (
        <View style={styles.header}>
            <MaterialIcons
                name='menu'
                size={28}
                onPress={openMenu}
                color='#FAFAFA'
            />
            <View>
                <Text style={styles.title}>{title}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        color: '#FAFAFA'
    },
    title: {
        fontWeight: 'bold',
        fontSize: 20,
        marginLeft: 16,
        color: '#FAFAFA',
    },
});