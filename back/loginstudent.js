import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';

export default function App() {
  const [nim, setNim] = useState('');
  const [password, setPassword] = useState('');

  var state = 0;
  const onClick = () => {
    var nim = 203307020;
    if (state % 2 == 0) {
      state++;
      setNim(nim);
      setPassword(nim);
    } else if (state % 2 == 1) {
      setNim('');
      setPassword('');
    }
  };

  return (
    <View style={styles.viewContainer}>
      <View style={styles.cardColour}>
        <View style={styles.viewWrapper}>
          <Image
            source={{
              uri: 'http://student.pnm.ac.id/assets/img/logo-dark.png',
            }}
            style={styles.imageLogin}
          />
        </View>
        <View style={[styles.inCard, styles.elevation]}>
          <TextInput
            placeholder="NPM"
            keyboardType="number-pad"
            style={styles.textInput}>
            {nim}
          </TextInput>
          <TextInput
            placeholder="Password"
            style={styles.textInput}
            secureTextEntry>
            {password}
          </TextInput>
          <TouchableOpacity onPress={onClick}>
            <View style={styles.viewButton}>
              <Text style={styles.textLogin}>LOGIN</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  viewContainer: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  textInput: {
    width: responsiveWidth(81),
    height: responsiveHeight(7),
    marginVertical: responsiveHeight(2.0),
    borderColor: '#ebebeb',
    alignSelf: 'center',
    borderBottomWidth: 1,
    padding: 10,
  },
  viewButton: {
    width: responsiveWidth(25),
    height: responsiveHeight(5),
    alignItems: 'center',
    backgroundColor: '#03a9f4',
    justifyContent: 'center',
    alignSelf: 'flex-end',
    borderRadius: 3,
    marginTop: responsiveHeight(3.0),
    marginRight: responsiveHeight(3.0),
  },
  textLogin: {
    fontWeight: '500',
    color: '#ebebeb',
    fontSize: responsiveFontSize(2.2),
  },
  imageLogin: {
    marginTop: 50,
    width: 250,
    height: 50,
    resizeMode: 'contain',
  },
  viewWrapper: {
    alignItems: 'center',
  },
  textTitle: {
    fontSize: responsiveFontSize(2.2),
    fontWeight: 'bold',
    color: '#43B2EC',
  },
  cardColour: {
    backgroundColor: '#F3F2F2',
    paddingBottom: 10,
  },
  inCard: {
    backgroundColor: '#FFFFFF',
    paddingBottom: 20,
    margin: 13,
    paddingLeft: 10,
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },

  elevation: {
    elevation: 8,
    shadowColor: '#161516',
  },
});
