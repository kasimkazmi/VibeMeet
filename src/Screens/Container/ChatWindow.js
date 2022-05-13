import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {TextComponent} from '../../Components';
const ChatWindow = () => {
  return (
    <View style={styles.container}>
      <View style={styles.wrapper} />
      <TextComponent style={styles.title}>Chat Window</TextComponent>
    </View>
  );
};

export default ChatWindow;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  wrapper: {
    paddingTop: ' 30%',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'pink',
  },
});
