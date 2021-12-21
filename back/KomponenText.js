import React, {useState} from 'react';
import {View, Text} from 'react-native';
import {styles} from './src/style';

const KomponenText = () => {
  var text;
  const [Clik, setClick] = useState('Click Me!');

  return (
    <View style={styles.container}>
      <Text style={{color: 'gray', fontSize: 26}}>
        {(text = 'Politeknik \nNegeri \nMadiun\n')}
        <Text
          style={{color: 'red', fontSize: 26}}
          onPress={() => setClick(text.replace(/\n/g, ''))}>
          {Clik}
        </Text>
      </Text>
    </View>
  );
};

export default KomponenText;
