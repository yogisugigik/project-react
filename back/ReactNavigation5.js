import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Button} from 'react-native';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Screen1"
          component={Screen1}
          options={{title: 'Screen 1'}}
        />
        <Stack.Screen
          name="Screen2"
          component={Screen2}
          options={{title: 'Screen 2'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const Screen1 = ({navigation}) => {
  return (
    <Button title="Screen 2" onPress={() => navigation.navigate('Screen2')} />
  );
};
const Screen2 = ({navigation}) => {
  return (
    <Button title="Screen 1" onPress={() => navigation.navigate('Screen1')} />
  );
};

export default App;
