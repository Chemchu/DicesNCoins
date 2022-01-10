import React from 'react';
import { Button, Pressable, StyleSheet } from 'react-native';
import tailwind from 'tailwind-rn';
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';

export default function TabDices({ navigation }: RootTabScreenProps<'Dices'>) {
  return (
    // <View style={styles.container}>
    //   <Text style={styles.title}>Dados</Text>
    //   <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
    //   <EditScreenInfo path="/screens/TabTwoScreen.tsx" />
    // </View>
    <View style={tailwind(`flex w-full h-full items-center p-4`)}>
      <Text>
        Fondo
      </Text>
      {/* <Button onPress={() => { console.log("bazinga") }} title='Roll' /> */}
      <Pressable style={({ pressed }) => {
        return tailwind(`${pressed ? "bg-yellow-600" : "bg-yellow-400"} w-20 h-10 rounded-xl items-center justify-center`)
      }}>
        <Text style={tailwind(``)}>ROLL</Text>
      </Pressable>
    </View >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 20,
  },
  title: {
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
