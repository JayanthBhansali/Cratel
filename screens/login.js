import React, { useState } from 'react';
import { Text, View, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native';
import firebase from 'firebase';

export default function Login({ navigation }) {
    const [phno, setPhno] = useState("");
    const [otp, setOTP] = useState("");

    firebase.auth().languageCode = 'it';
    // To apply the default browser preference instead of explicitly setting it.
    // firebase.auth().useDeviceLanguage();

    window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('sign-in-button', {
        'size': 'invisible',
        'callback': (response) => {
            // reCAPTCHA solved, allow signInWithPhoneNumber.
            onSignInSubmit();
        }
    });

    window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container');

    const phoneNumber = getPhoneNumberFromUserInput();
    const appVerifier = window.recaptchaVerifier;
    firebase.auth().signInWithPhoneNumber(phoneNumber, appVerifier)
        .then((confirmationResult) => {
            // SMS sent. Prompt user to type the code from the message, then sign the
            // user in with confirmationResult.confirm(code).
            window.confirmationResult = confirmationResult;

            const code = getCodeFromUserInput();
            confirmationResult.confirm(code).then((result) => {
                // User signed in successfully.
                const user = result.user;
                var credential = firebase.auth.PhoneAuthProvider.credential(confirmationResult.verificationId, code);
                firebase.auth().signInWithCredential(credential);
                // ...
            }).catch((error) => {
                // User couldn't sign in (bad verification code?)
                // ...
            });
            // ...
        }).catch((error) => {
            // Error; SMS not sent
            // ...
        });

    return (
        <View style={styles.container}>
            <Image style={styles.image}
                source={require("../assets/cratel-icon.jpg")} />
            <View style={styles.inputView}>
                <TextInput
                    style={styles.TextInput}
                    placeholder="Email"
                    placeholderTextColor="#003f5c"
                    onChangeText={(e) => setPhno(e)}
                />
            </View>
            {/* <View style={styles.inputView}>
                <TextInput
                    style={styles.TextInput}
                    placeholder="Password"
                    placeholderTextColor="#003f5c"
                    secureTextEntry={true}
                    onChangeText={}
                />
            </View>
            <TouchableOpacity>
                <Text style={styles.forgot_button}>Forgot Password</Text>
            </TouchableOpacity> */}
            <TouchableOpacity style={styles.loginBtn}
                onPress={() => navigation.navigate('OTPPage')}>
                <Text style={styles.loginText}>Continue</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "coral",
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        marginBottom: 40,
        borderRadius: 100,
        height: 200,
        width: 200,
    },
    inputView: {
        backgroundColor: "#FFC0CB",
        borderRadius: 30,
        width: '70%',
        height: 45,
        marginBottom: 20,
        alignItems: 'center',
    },
    TextInput: {
        height: 50,
        flex: 1,
        padding: 10,
    },
    forgot_button: {
        height: 30,
        marginBottom: 30,
    },
    loginBtn: {
        width: '70%',
        borderRadius: 25,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "#FFFFFF",
        zIndex: 100,
    },
    loginText: {
        color: "tomato",
        fontWeight: 'bold'
    }
});