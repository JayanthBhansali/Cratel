import React from 'react';
import { LogBox } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import * as firebase from 'firebase';
import 'firebase/firestore';
import MyDrawer from './routes/drawer';

const firebaseConfig = {
  apiKey: "AIzaSyCnRy2StJmQW1ujb1RvyuBGOcZSTMxXxTs",
  authDomain: "cratel-e79e0.firebaseapp.com",
  databaseURL: 'https://cratel-e79e0.firebaseapp.com',
  projectId: "cratel-e79e0",
  storageBucket: "cratel-e79e0.appspot.com",
  messagingSenderId: "1004343008206",
  appId: "1:1004343008206:web:3a5b0ca4e3ee3dda07a99f",
  measurementId: "G-8X1D1DMZJN"
};

firebase.initializeApp(firebaseConfig);

export default class App extends React.Component {

  render() {
    return (
      <NavigationContainer>
        <MyDrawer />
      </NavigationContainer>
    );
  }
};
