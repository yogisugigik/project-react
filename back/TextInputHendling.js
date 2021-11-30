import React, {useState} from 'react';
import {Text, TextInput, View} from 'react-native';

// membuat fungsi untuk mengolah inputan user
var addPizza = props => {
  var target = 'pizza';
  var inputan = props.toLowerCase().replace(/pizza/g, 'pizza ');
  inputan = inputan.split(' ');
  // mengelola panjang array variabel inputan
  var cocok = 0;
  for (var i = 0; i < inputan.length; i++) {
    if (inputan[i].includes(target)) {
      cocok++;
    }
  }
  // menyimpan pizza ke dalam array
  var isi = [];
  for (i = 0; i < cocok; i++) {
    var pizza = '🍕';
    isi[i] = pizza;
  }
  // mengeluarkan isi array yang berisi pizza
  isi = isi.toString().replace(/,/g, ' ');
  return isi;
};

PizzaTranslator = () => {
  const [text, setText] = useState('');
  return (
    <View style={{padding: 10}}>
      <TextInput
        style={{height: 40}}
        placeholder="Type here to translate!"
        onChangeText={text => setText(text)}
        defaultValue={text}
      />
      <Text style={{padding: 10, fontSize: 42}}>{addPizza(text)}</Text>
    </View>
  );
};

export default PizzaTranslator;
