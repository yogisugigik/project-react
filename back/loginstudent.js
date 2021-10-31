import React from 'react';
import {Text, View, Image, TextInput} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

const App = () => {
  return (
    <View>
      <View style={{width: 80, height: 80, backgroundColor: '#0abde3'}} />
      <View style={{width: 80, height: 80, backgroundColor: 'blue'}} />
      <Text>Hallo</Text>
      <Text>Semua</Text>
      <Hudoro />
      <Text>Loh</Text>
      <Text>{average()}</Text>
      <Photo />
      <TextInput />
    </View>
  );
};

const Hudoro = () => {
  return <Text>Hudoro Mangku Udoro</Text>;
};

const Photo = () => {
  return (
    <Image
      source={{uri: 'https://placeimg.com/100/100/tech'}}
      style={{width: 100, height: 100}}
    />
  );
};

const Laheh = () => {
  return (
    <Image
      source={{uri: 'https://placeimg.com/640/480/nature'}}
      style={{width: 640, height: 480}}
    />
  );
};

function average() {
  let int1, int2, hasil;
  int1 = 100;
  int2 = 200;
  hasil = int1 + int2;
  return hasil;
}

export default App;
