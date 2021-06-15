import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Card from '../shared/card';

export default function About() {
    return (
        <View style={styles.container}>
            <ScrollView>
                <Card>
                    <Text>
                        <Text style={{ fontWeight: 'bold' }}>Cratel </Text>
                    helps you obtain the purchases you need, directly through an app which connects you to similar consumers within the permissible range, who want the same. By placing your request in the app, find similar customers desiring the same. Once you place the order, you can pay for the respective item, making it easier for the consumers as well as the supplier.
                    Cratel makes wholesale purchases easy with reduced delivery charges. With having its reach throughout the country, there is diminished loss and product stagnation. With all this in mind, Cratel is the go to app for making your wholesale purchases hassle free!
                </Text>
                    <Text style={{ marginTop: 10, fontWeight: 'bold' }}>
                        Our vision:
                </Text>
                    <Text>
                        We aim to provide people with the best services that can fulfil their urge so that none will have to compromise with their cravings, cost and quantity factors. We intend to grow and expand till we are able reach out to you from anywhere to furnish you with all your wishes.
                </Text>
                    <Text style={{ marginTop: 10, fontWeight: 'bold' }}>
                        Our story:
                </Text>
                    <Text>
                        The idea of satisfying our cravings is really a tempting one. All we need is the best taste from the right place. Starting with the soft and juicy Alphonso mangoes from Maharashtra to those yummy and tender coconuts from Kerala…Heavenly!!
                        But have you ever wondered? Whether it's seasonal fruits or year-round fruits, any non-local fruit might have been heavy on your pockets!
                        For us it did! We tried to call various vendors across the country, but we waived after hearing “We have a minimum order limit + shipping charges” from each of them. We felt it was a waste of such massive amount and not even worthy spending such high prices.
                        Then we wondered, “Is it just me who wants to eat these Alphonso mangos? Or any other people out there, who are wishing for the same and facing the same problem?”
                        That’s when we came across this idea of collective buying, and that lead us to Cratel! Now we have developed this service that collects people’s requirements, calculates the collective quantity, conveys it to the vendor and finally ships it and delivers it to your place.
                        Now the goods you wish for, are at your doorstep step in the desired amount and decent prices!
                </Text>
                </Card>
            </ScrollView>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        margin: 0,
        marginTop: 10,
        marginBottom: 20,
        flex: 1,
        fontSize: 30,
    }
})