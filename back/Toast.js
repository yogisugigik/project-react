import React from 'react';
import {
  View,
  SafeAreaView,
  StyleSheet,
  Button,
  ToastAndroid,
} from 'react-native';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.button}>
          <Button
            title="TOAST ATAS KIRI"
            onPress={() =>
              ToastAndroid.showWithGravityAndOffset(
                'TOAST ATAS KIRI',
                ToastAndroid.LONG,
                ToastAndroid.TOP,
                -330,
                0,
              )
            }
          />
        </View>
        <View style={styles.button}>
          <Button
            title="TOAST ATAS KANAN"
            onPress={() =>
              ToastAndroid.showWithGravityAndOffset(
                'TOAST ATAS KANAN',
                ToastAndroid.LONG,
                ToastAndroid.TOP,
                330,
                0,
              )
            }
          />
        </View>
        <View style={styles.button}>
          <Button
            title="TOAST TENGAH"
            onPress={() =>
              ToastAndroid.showWithGravity(
                'TOAST TENGAH',
                ToastAndroid.LONG,
                ToastAndroid.CENTER,
              )
            }
          />
        </View>
        <View style={styles.button}>
          <Button
            title="TOAST BAWAH KIRI"
            onPress={() =>
              ToastAndroid.showWithGravityAndOffset(
                'TOAST BAWAH KIRI',
                ToastAndroid.LONG,
                ToastAndroid.BOTTOM,
                -330,
                0,
              )
            }
          />
        </View>
        <View style={styles.button}>
          <Button
            title="TOAST BAWAH KANAN"
            onPress={() =>
              ToastAndroid.showWithGravityAndOffset(
                'TOAST BAWAH KANAN',
                ToastAndroid.LONG,
                ToastAndroid.BOTTOM,
                330,
                0,
              )
            }
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gray',
  },
  content: {
    flex: 1,
    alignContent: 'center',
    justifyContent: 'center',
    marginLeft: 20,
    marginRight: 20,
  },
  button: {
    paddingTop: 20,
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
});
export default App;
