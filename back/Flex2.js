import React, {Component} from 'react';
import {AppRegistry, View, StyleSheet} from 'react-native';

export default class App extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <View style={{flex: 1, backgroundColor: 'powderblue'}}>
          {/* colom 1 */}
          <View style={[styles.container, {alignContent: 'space-around'}]}>
            <View>
              <View style={[styles.box, {backgroundColor: '#ff0000'}]} />
              <View style={[styles.box, {backgroundColor: '#008000'}]} />
              <View style={[styles.box, {backgroundColor: '#0000ff'}]} />
              <View style={[styles.box, {backgroundColor: '#ffff00'}]} />
              <View style={[styles.box, {backgroundColor: '#ffa500'}]} />
            </View>
            <View>
              <View style={[styles.box, {backgroundColor: '#ff0000'}]} />
              <View style={[styles.box, {backgroundColor: '#008000'}]} />
              <View style={[styles.box, {backgroundColor: '#0000ff'}]} />
            </View>
          </View>
        </View>
        <View style={{flex: 1, backgroundColor: 'skyblue'}}>
          <View style={[styles.container2, styles.row]}>
            <View
              style={[
                styles.box,
                {
                  backgroundColor: '#ff0000',
                  flexBasis: 'auto',
                  flexShrink: 1,
                  flexGrow: 5,
                },
              ]}
            />
            <View
              style={[
                styles.box,
                {
                  backgroundColor: '#008000',
                  flexBasis: 'auto',
                  flexShrink: 1,
                  flexGrow: 15,
                },
              ]}
            />
            <View
              style={[
                styles.box,
                {
                  backgroundColor: '#0000ff',
                  flexBasis: 'auto',
                  flexShrink: 1,
                  flexGrow: 30,
                },
              ]}
            />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  container2: {
    flex: 1,
    alignContent: 'center',
  },
  box: {
    width: 50,
    height: 50,
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});

AppRegistry.registerComponent('Style', () => App);
