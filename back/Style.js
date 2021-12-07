import React from 'react';
import {View, Image} from 'react-native';
import {styles} from './src/style';
import {Pnm, StudentPortal} from './src/img';

const Style = () => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Image source={Pnm} style={styles.image1} />
        <Image source={StudentPortal} style={styles.image2} />
      </View>
    </View>
  );
};

export default Style;
