import React from 'react';
import {
  StyleSheet,
  Text,
  SafeAreaView,
  ScrollView,
  StatusBar,
} from 'react-native';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <Text style={styles.text}>
          Ipsum Lorem ex et qui pariatur nostrud. Id dolore proident dolor est
          ea cupidatat Lorem ad ea ea sit consectetur minim adipisicing. Eu
          proident consequat id magna labore laboris do. Reprehenderit occaecat
          dolor adipisicing id reprehenderit minim et deserunt adipisicing
          voluptate consectetur. Laboris ullamco culpa aliquip pariatur
          incididunt Lorem sit labore ut cupidatat minim. Tempor pariatur
          adipisicing labore duis nulla. Reprehenderit ut aliqua ut fugiat nulla
          fugiat voluptate aliqua ut. Duis dolor aute esse commodo sunt nostrud
          deserunt pariatur cupidatat veniam occaecat. Pariatur nulla sit magna
          sint anim velit nulla amet adipisicing officia in reprehenderit ea.
          Adipisicing duis culpa aliqua amet incididunt enim pariatur anim
          reprehenderit nisi consectetur commodo culpa. Consectetur qui et Lorem
          adipisicing ut nulla ut veniam sint amet amet Lorem enim nostrud.
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {flex: 1, paddingTop: StatusBar.currentHeight},
  scrollView: {backgroundColor: 'blue', marginHorizontal: 20},
  text: {fontSize: 42, color: 'white'},
});

export default App;
