import { View, Text, Image, StyleSheet, PanResponder } from 'react-native'
import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import LottieView from 'lottie-react-native';

export const RollDice = (numSizes: number): number => {
    return Math.floor((Math.random() * numSizes) + 1);
}

export const DicePage = () => {
    return (
        <View style={styles.background}>
            <LottieView style={{alignSelf:'center', backgroundColor:'#254E70'}} source={require('../lottieAnimations/dice.json')}/>
            {/* <Icon name="dice" size={80} color="#4F8EF7" /> */}

        </View>

    );
}


const styles = StyleSheet.create({
    background:{
        backgroundColor:'#254E70',
        height:'100%',
        alignItems:'center'
    },
    sectionContainer: {
      marginTop: 32,
      paddingHorizontal: 24,
    },
    sectionTitle: {
      fontSize: 24,
      fontWeight: '600',
    },
    sectionDescription: {
      marginTop: 8,
      fontSize: 18,
      fontWeight: '400',
    },
    highlight: {
      fontWeight: '700',
    },
  });