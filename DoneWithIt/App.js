import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Image } from 'react-native';
import React, { useState } from 'react';

{/*comment!!*/}
export default function App() {
  const handleOnPress = () => {
    for(let i = blurAmount; i >= 0; i -= 0.01){
      setTimeout(() => {  setBlur(blurAmount => blurAmount - 0.01); }, 5);
    }{/*console.log("Kobe is pressed!");*/}
  }
  
  const [blurAmount, setBlur] = useState(10);

  
  return (
    <SafeAreaView style={styles.container}>
      <Text onPress={handleOnPress}>Kobe!</Text>
      <Image
        blurRadius={blurAmount}
        source={{
          width: 200,
          height: 300,
          uri: "https://picsum.photos/seed/picsum/200/300"}}
      />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'dodgerblue',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
