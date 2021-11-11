import React, {Component} from 'react';
import {AppRegistry, View, StyleSheet} from 'react-native';

export default class App extends Component {
  render() {
    return (
      <View style={styles.flexbRoot}>
        <View style={{flex: 1, backgroundColor: 'red'}} />
        <View style={styles.flexbChild}>
          <View style={[styles.boxChild, {backgroundColor: 'powderblue'}]} />
          <View style={[styles.boxStrech, {backgroundColor: 'skyblue'}]} />
          <View style={[styles.boxChild, {backgroundColor: 'steelblue'}]} />
        </View>
        <View style={{flex: 1, backgroundColor: 'green'}} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  flexbRoot: {
    flex: 1,
  },
  flexbChild: {
    flex: 3,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  boxChild: {
    width: 50,
    height: 50,
  },
  boxStrech: {
    width: 'auto',
    height: 50,
    alignSelf: 'stretch',
    minWidth: 50,
  },
});

AppRegistry.registerComponent('Style', () => App);
