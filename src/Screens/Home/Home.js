//import liraries
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  ImageBackground,
  Image,
  Button,
} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

import {Caption} from 'react-native-paper';
// import  GameCard from '../../Components/';
// import GameCard from '../../Components/GameCard';
import {
  TextComponent,
  ButtonComponent,
  GameCard,
  TextInputWithLabel,
  VoiceMatch,
  ChatHeaderComponent,
  AudioRoom,
} from '../../Components';

import Icon from 'react-native-vector-icons/Ionicons';
import {images, fonts, colors} from '../../Constants';
// create a component
const Home = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'row', padding: 10}}>
        <Icon
          style={{padding: 5}}
          onPress={() => navigation.openDrawer()}
          name="md-menu"
          size={35}
          color={colors.pink}
        />
        <View
          style={styles.Header}>
          <Text style={styles.title}>Play Games & Make Friends</Text>
        </View>
      </View>

      <View style={{}}>

        <Caption style={styles.lable}>Audio Rooms </Caption>
        <ScrollView horizontal style={{}}>
        <AudioRoom />
      
        </ScrollView>
      </View>
      <View style={styles.wraper}>
        <Caption style={styles.lable}>Voice Match </Caption>
        <ScrollView horizontal style={{}}>
          {/* <GameCard /> */}
          {/* <AudioRoom /> */}
          <VoiceMatch />
          <VoiceMatch />
          <VoiceMatch />
        </ScrollView>
      </View>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    justifyContent: 'center',
    textAlign: 'center',
    color: colors.purple,
  },
  lable: {
    fontSize: 18,
    lineHeight: 18,
    padding: 10,
    color: 'black',
  },
  Header:{
    flex: 1,
    height: 45,
    justifyContent: 'center',
  },
  wraper: {
    flex: 1,
  },
});

export default Home;
