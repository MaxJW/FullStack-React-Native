import React from 'react';
import Constants from 'expo-constants';
import { StyleSheet, Text, View } from 'react-native';

import CardList from './components/CardList';

const items = [
  { id: 0, author: 'Bob Ross'},
  { id: 1, author: 'Chuck Norris'},
];

export default function App() {
  return (
    <View style={styles.container}>
      <CardList items={items} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: Constants.statusBarHeight,
  },
});
