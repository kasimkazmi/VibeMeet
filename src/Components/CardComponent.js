import React from 'react';
import {Animated, Image, StyleSheet, Text, View} from 'react-native';
import {images} from '../Constants/images';

const CardComponent = props => {
  const {likeOpacity, nopeOpacity} = {
    likeOpacity: 1,
    nopeOpacity: 1,
    ...props,
  };
  return (
    <View style={StyleSheet.absoluteFill}>
      <View
        style={{
          position: 'absolute',
          height: '100%',
          width: '100%',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Image style={styles.image} source={images.MiddleIcon} />
      </View>
      <View style={styles.overlay}>
        <View style={styles.header}>
          <Animated.View style={[styles.like, {opacity: likeOpacity}]}>
            <Text style={styles.likeLabel}>LIKE </Text>
          </Animated.View>
          <Animated.View style={[styles.nope, {opacity: nopeOpacity}]}>
            <Text style={styles.nopeLabel}>NOPE </Text>
          </Animated.View>
        </View>
        <View style={styles.footer}>
          <Text style={styles.name}>Kasim</Text>
        </View>
      </View>
    </View>
  );
};

export default CardComponent;

const styles = StyleSheet.create({
  image: {
    // width: 200,
    // height: 350,
    backgroundColor: 'pink',
    borderRadius: 8,
  },
  overlay: {
    flex: 1,
    justifyContent: 'space-between',
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  footer: {
    flexDirection: 'row',
    backgroundColor: 'pink',
  },
  name: {
    color: 'green',
    fontSize: 32,
  },
  like: {
    borderWidth: 4,
    borderRadius: 5,
    padding: 8,
    borderColor: '#6ee3b4',
  },
  likeLabel: {
    fontSize: 32,
    color: '#6ee3b4',

    fontWeight: 'bold',
  },
  nope: {
    borderWidth: 4,
    borderRadius: 5,
    padding: 8,
    borderColor: '#ec5288',
  },
  nopeLabel: {
    fontSize: 32,
    color: '#ec5288',
    fontWeight: 'bold',
  },
});
