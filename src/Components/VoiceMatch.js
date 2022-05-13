import React from 'react';
import {Image, Text, View, StyleSheet} from 'react-native';
import {colors, fonts, images} from '../Constants';

const VoiceMatch = props => {
  return (
    <View style={{paddingLeft: 20, flex: 1}}>
      <Image
        source={images.BG}
        style={{
          height: 100,
          width:150,
          borderTopRightRadius: 8,
          borderTopLeftRadius: 8,
        }}
      />

      <View
        style={{
          backgroundColor: 'white',
          borderWidth: 0.4,
          borderBottomLeftRadius: 8,
          borderBottomRightRadius: 8,
          width: 150,
        }}>
        <Text style={styles.lable}>First Section</Text>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Image
            source={images.DP}
            style={{height: 20, width: 20, resizeMode: 'center'}}
          />
          <Text style={styles.lable}>{'PlayreName'}</Text>
        </View>
      </View>
    </View>
  );
};

export default VoiceMatch;

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 24,
    paddingTop: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'pink',
  },
  lable: {
    fontSize: 13,
    lineHeight: 18,
    padding: 8,
    color: 'black',
  },
  wraper: {
    flex: 1,
  },
});
