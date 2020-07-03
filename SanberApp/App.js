import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {StyleSheet,
        Text,
        View,
        ScrollView
} from 'react-native';
import Constants from 'expo-constants';

import Latihan13 from './Latihan/Latihan13/latihan13';
import Latihan14 from './Latihan/Latihan14/latihan14';
import Latihan15 from './Latihan/Latihan15/index'

import YoutubeUI from './Tugas/Tugas12/App';

import LoginScreen from './Tugas/Tugas13/LoginScreen'; 
import AboutScreen from './Tugas/Tugas13/AboutScreen';

import Tugas14 from './Tugas/Tugas14/App';
import SkillScreen from './Tugas/Tugas14/SkillScreen';

import Tugas15 from './Tugas/Tugas15/index'


export default function App() {
  return (
    <Tugas15 />

    //<SkillScreen />
    //<Tugas14_2 />
    
    /*
    <Latihan15 />
    <Tugas14 />
    <ScrollView>
      <Latihan14 />      
    </ScrollView>
    
    <Latihan13 />
    <YoutubeUI />

    <ScrollView>
      <View style={styles.container}>
        <StatusBar style="auto" />
        <Text>Open up App.js to start working on your app!</Text>        
      </View>
      <LoginScreen/>
      <AboutScreen/>
    </ScrollView>



    */    
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
    //backgroundColor: '#fff',
    //alignItems: 'center',
    //justifyContent: 'center',
    //justifyContent:'space-evenly',
  },
});