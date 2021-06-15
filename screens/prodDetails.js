import React, { useState, useRef } from 'react';
import { Dimensions, Image, Text, View, StyleSheet, Animated, ScrollView, TouchableOpacity } from 'react-native';
import { RadioButton } from 'react-native-paper';
import Card from '../shared/card';

const { width } = Dimensions.get("window");
const imageWidth = width - 42;
const height = imageWidth * 0.60;


export default function ProdDetails({ navigation, route }) {

    const { id } = route.params;
    const [product, setProduct] = useState("")
    const [progressStatus, setProgressStatus] = useState(50);


    db.collection("Products").doc(id).get().then((doc) => {
        if (doc.exists) {
            console.log("Document data:", doc.data());
            setProduct({
                title: doc.data().Title,
                minQty: doc.data().MinQty,
                unit: doc.data().Unit,
                price: doc.data().Price,
                filledQty: doc.data().FilledQty,
                seller: doc.data().seller,
            });
            setProgressStatus(product.filledQty / product.minQty)
        } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
        }

    }).catch((error) => {
        console.log("Error getting document:", error);
    });;
    const [checked, setChecked] = React.useState('first');
    const [activeImage, setActiveImage] = useState(0);
    const assets = [
        "https://post.healthline.com/wp-content/uploads/2020/09/Do_Apples_Affect_Diabetes_and_Blood_Sugar_Levels-732x549-thumbnail-1-732x549.jpg",
        "https://usapple.org/wp-content/uploads/2019/10/apple-gala.png",
        "https://images.heb.com/is/image/HEBGrocery/000320625-1?$article%2D235%2Dsquare$",
    ];

    anim = useRef(new Animated.Value(0)).current;

    componentDidMount = () => {
        this.onAnimate();
    }

    onAnimate = () => {
        this.anim.addListener(({ value }) => {
            setProgressStatus({ progressStatus: value.toFixed(2) });
        });
    }

    change = ({ nativeEvent }) => {
        const slide = Math.ceil(nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width);
        if (slide !== activeImage) {
            setActiveImage(slide)
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.bottomNav}>
                <TouchableOpacity style={styles.loginBtn}>
                    <Text style={styles.loginText}>ADD TO CART</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.loginBtn}>
                    <Text style={styles.loginText}>BUY NOW</Text>
                </TouchableOpacity>
            </View>
            <ScrollView>
                <View style={styles.scrollContainer}>
                    <Card>
                        <View>
                            <Text style={styles.title}>{product.title}</Text>
                            <Text>Price: Rs. {product.price}/{product.unit}</Text>
                            <Text>Min Qty: {product.minQty}</Text>
                        </View>
                        <View style={styles.imageView}>
                            <ScrollView
                                horizontal
                                pagingEnabled
                                onScroll={change}
                                showsHorizontalScrollIndicator={false}
                                style={styles.scroll}
                            >
                                {assets.map((image, index) => (
                                    <Image
                                        key={index}
                                        style={styles.image}
                                        source={{ uri: image }}
                                    />
                                ))}
                            </ScrollView>
                            <View style={styles.pagination}>
                                {assets.map((i, k) => (
                                    <Text key={k} style={k == activeImage ? styles.pagingActiveText : styles.pagingText}>
                                        ⬤
                                    </Text>
                                ))}
                            </View>
                        </View>
                        <View style={styles.progressBar}>
                            <Animated.View
                                style={[
                                    styles.inner, {
                                        width: progressStatus + "%",
                                        backgroundColor: progressStatus < 50 ? 'red' : progressStatus >= 80 ? 'green' : 'orange',
                                    },
                                ]}
                            />
                            <Animated.Text style={styles.label}>
                                {progressStatus.toFixed(2)}%
                            </Animated.Text>
                        </View>
                        {/* <View style={{ marginTop: 20 }}>
                            <RadioButton.Group
                                onValueChange={newValue => setChecked(newValue)} value={checked}>
                                <View style={styles.card}>
                                    <View style={styles.cardBody}>
                                        <View style={styles.radioButtons}>
                                            <Text>1Kg @ Rs. 75/Kg</Text>
                                            <RadioButton
                                                color="coral"
                                                value='first' />
                                        </View>
                                    </View>
                                </View>
                                <View style={styles.card}>
                                    <View style={styles.cardBody}>
                                        <View style={styles.radioButtons}>
                                            <Text>5Kg @ Rs. 70/Kg</Text>
                                            <RadioButton
                                                color="coral"
                                                value='second' />
                                        </View>
                                    </View>
                                </View>
                                <View style={styles.card}>
                                    <View style={styles.cardBody}>
                                        <View style={styles.radioButtons}>
                                            <Text>10Kg @ Rs. 65/Kg</Text>
                                            <RadioButton
                                                color="coral"
                                                value='third' />
                                        </View>
                                    </View>
                                </View>
                            </RadioButton.Group>
                        </View> */}
                        <View style={{ marginTop: 20 }}>
                            <Text>Order will be placed at 12:00PM on 31 May 2021 </Text>
                        </View>
                        <View style={{ marginTop: 20 }}>
                            <Text>Sold By</Text>
                            <Text style={styles.title}>{product.seller}</Text>
                        </View>
                    </Card >
                </View>
            </ScrollView>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 10,
    },
    bottomNav: {
        bottom: 0,
        position: 'absolute',
        flexDirection: 'row',
        zIndex: 200,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 24,
    },
    scrollContainer: {
        flex: 1,
        marginBottom: 60,
    },
    progressBar: {
        width: "100%",
        height: 25,
        padding: 1,
        borderColor: "tomato",
        borderWidth: 2,
        borderRadius: 30,
        marginTop: 20,
        justifyContent: "center",
    },
    inner: {
        width: "100%",
        height: 20,
        borderRadius: 15,
    },
    label: {
        fontSize: 16,
        color: "black",
        position: "absolute",
        zIndex: 1,
        alignSelf: "center",
    },
    imageView: {
        width: imageWidth,
        height: height,
        marginTop: 20,
        alignSelf: 'center'
    },
    scroll: {
        flex: 1,
    },
    image: {
        flex: 1,
        height: height,
        resizeMode: 'contain',
        width: imageWidth,
    },
    pagination: {
        flexDirection: 'row',
        position: 'absolute',
        bottom: 0,
        alignSelf: 'center'
    },
    pagingText: {
        color: '#888888',
        margin: 3
    },
    pagingActiveText: {
        color: 'tomato',
        margin: 3
    },
    card: {
        borderRadius: 6,
        elevation: 3,
        backgroundColor: '#ffffff',
        shadowOffset: { width: 1, height: 1 },
        shadowColor: '#2C2C2C',
        shadowOpacity: 0.3,
        marginVertical: 5,
        borderColor: "#000000",
        borderWidth: 1
    },
    cardBody: {
        marginHorizontal: 16,
        marginVertical: 12,
    },
    radioButtons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    loginBtn: {
        height: 50,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "tomato",
    },
    loginText: {
        color: "#ffffff",
        fontWeight: 'bold'
    }
});