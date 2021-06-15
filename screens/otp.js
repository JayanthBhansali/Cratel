import React, { useRef, useState, useEffect } from 'react';
import { Text, View, StyleSheet, Image, TextInput, TouchableOpacity, KeyboardAvoidingView } from 'react-native';

export default function SignUp({ navigation }) {
    let textInput = useRef(null)
    const lengthInput = 4;
    const defaultCountDown = 30;
    const clockCall = null;
    const [internalVal, setInternalVal] = useState("");
    const [countDown, setCountDown] = useState(defaultCountDown);
    const [enableResend, setEnableResend] = useState(false);

    useEffect(() => {
        clockCall = setInterval(() => {
            decrementClock();
        }, 1000)
        return () => {
            clearInterval(clockCall)
        }
    }, []);

    const decrementClock = () => {
        if (countDown == 0) {
            setEnableResend(true);
            setCountDown(0);
            clearInterval(this.clockCall);
        } else {
            setCountDown(countDown - 1)
        }
    }

    const onResendOTP = () => {
        if (enableResend) {
            setCountDown(defaultCountDown);
            setEnableResend(false);
            clearInterval(clockCall);
            clockCall = setInterval(() => {
                decrementClock();
            }, 1000)
        }
    }

    const onChangeNumber = () => {
        setInternalVal("")
    }
    const onTextChange = (val) => {
        setInternalVal(val)
        if (val.length == lengthInput) {
            //chech Auth
        }
    }

    useEffect(() => {
        textInput.focus()
    }, []);

    return (
        <View style={styles.container}>
            <KeyboardAvoidingView style={styles.container}>
                <Image style={styles.image}
                    source={require("../assets/cratel-icon.jpg")} />
                <Text>Input your OTP Code sent via SMS</Text>
                <View style={styles.inputView}>
                    <TextInput
                        ref={(input) => textInput = input}

                        style={{ width: 0, height: 0 }}
                        value={internalVal}
                        maxLength={lengthInput}
                        returnKeyType="done"
                        keyboardType="numeric"
                        onChangeText={onTextChange}
                    />
                    <View styles={styles.containerInput}>
                        {
                            Array(lengthInput).fill().map((data, index) => {
                                <View
                                    key={index}
                                    style={styles.cellview, {
                                        borderBottomColor: index == internalVal.length ? '#FB6C6A' : '#234D87'
                                    }}
                                >
                                    <Text
                                        style={styles.celltext}
                                        onPress={() => textInput.focus()}
                                    >
                                        {internalVal && internalVal.length > 0 ? internalVal[index] : ""}
                                    </Text>
                                </View>
                            })
                        }
                    </View>
                </View>
                <View style={styles.bottomView}>
                    <TouchableOpacity onPress={onChangeNumber}>
                        <View style={btnChangeNumber}>
                            <Text style={styles.bottomViewText}>Change Number</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={onResendOTP}>
                        <View style={btnResendOTP}>
                            <Text
                                style={enableResend ? styles.bottomViewText : styles.celltext}>
                                Resend OTP ({countDown})</Text>
                        </View>
                    </TouchableOpacity>
                </View>


            </KeyboardAvoidingView>
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
        alignItems: 'center',
    },
    TextInput: {
        backgroundColor: "#FFC0CB",
        height: 50,
        width: 50,
        flex: 1,
        padding: 5,
        borderColor: '#000000',
    },
    containerInput: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    cellView: {
        paddingVertical: 10,
        width: 40,
        margin: 5,
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomWidth: 1.5,
    },
    celltext: {
        textAlign: 'center',
        fontSize: 16,
    },
    bottomView: {
        flexDirection: 'row',
        flex: 1,
        marginBottom: 30,
        alignItems: 'flex-end'

    },
    btnChangeNumber: {
        width: '150',
        borderRadius: 25,
        height: 50,
        alignItems: 'flex-start',
        justifyContent: 'center',
    },
    btnResendOTP: {
        width: '150',
        borderRadius: 25,
        height: 50,
        alignItems: 'flex-end',
        justifyContent: 'center',
    },
    bottomViewText: {
        color: "tomato",
        fontSize: 16,
        textAlign: 'center',
    }
});