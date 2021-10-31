import React, {useRef, useEffect} from 'react';
import {Animated, Text, View} from 'react-native';

const FadeInView = props => {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 10000,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);

  return (
    <Animated.View style={{...props.style, opacity: fadeAnim}}>
      {props.children}
    </Animated.View>
  );
};

export default () => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <FadeInView style={{width: 300, height: 50, backgroundColor: 'blue'}}>
        <Text
          style={{
            fontSize: 20,
            textAlign: 'center',
            margin: 10,
            color: 'white',
          }}>
          Politeknik Negeri Madiun
        </Text>
      </FadeInView>
    </View>
  );
};
