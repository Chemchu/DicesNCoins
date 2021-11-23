import { View, Text } from 'react-native'
import React, { useState } from 'react';

export const RollDice = (numSizes: number): number => {
    return Math.floor((Math.random() * numSizes) + 1);
}

export const DicePage = () => {
    return (
        <View>
            <Text> eyyy loco </Text>
        </View>

    );
}