import { StatusBar } from 'expo-status-bar';
/*import { StyleSheet, Text, View } from 'react-native';*/

import React from 'react';

import Video from 'react-native-video';


import { StyleSheet, Button, View, SafeAreaView, Text, Alert, Image, TouchableOpacity, ImageBackground } from 'react-native';
var myimg = 'https://reactnative.dev/img/tiny_logo.png';


export default function App() {
   /* if (count === 0) { var myimg = 'https://cdn.shopify.com/s/files/1/0533/2089/files/img-url-filter.jpg?v=1515074624&width=1024'; }
    if (count === 1) { var myimg = 'https://reactnative.dev/img/tiny_logo.png'; } */

    function apple () {
    my
    }

  return (
      <View style={styles.container}>
          <TouchableOpacity onPress={() => { Alert.alert('Image 1', '1.png, 160 by 160') }}>
              <Image
                  source={require('./assets/1.png')}
                  style={{ resizeMode: 'contain', width: 160,height: 160,}}
              />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => { Alert.alert('Image 2', '2.png, 160 by 160') }}>
              <Image
                  source={require('./assets/2.png')}
                  style={{ resizeMode: 'contain', width: 160, height: 160, }}
              />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => { Alert.alert('Image 3', '3.png, 160 by 160') }}>
              <Image
                  source={require('./assets/3.png')}
                  style={{ resizeMode: 'contain', width: 160, height: 160, }}
              />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => { Alert.alert('Image 4', '4.png, 160 by 160') }}>
              <Image
                  source={require('./assets/4.png')}
                  style={{ resizeMode: 'contain', width: 160, height: 160, }}
              />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => { Alert.alert('Image 5', '5.png, 160 by 160') }}>
              <Image
                  source={require('./assets/5.png')}
                  style={{ resizeMode: 'contain', width: 160, height: 160, }}
              />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => { Alert.alert('Image 6', '6.png, 160 by 160') }}>
              <Image
                  source={require('./assets/6.png')}
                  style={{ resizeMode: 'contain', width: 160, height: 160, }}
              />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => { Alert.alert('Image 7', '7.png, 160 by 160') }}>
              <Image
                  source={require('./assets/7.png')}
                  style={{ resizeMode: 'contain', width: 160, height: 160, }}
              />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => { Alert.alert('Image 8', '8.png, 160 by 160') }}>
              <Image
                  source={require('./assets/8.png')}
                  style={{ resizeMode: 'contain', width: 160, height: 160, }}
              />
          </TouchableOpacity>


      <StatusBar style="auto" />
    </View>
  );
}




const styles = StyleSheet.create({
  container: {
        backgroundColor: '#4E6E89',
        margin: 30,
        margintop: 30,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
      flexWrap: 'wrap',
    },
    imagewrap: {
        height: 160,
        width: 160,
        backgroundColor: '#5E873B',
    },
    image: {
        flex: 1,
        justifyContent: "center"
    }
});

