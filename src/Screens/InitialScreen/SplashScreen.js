import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
  StatusBar,
  Image,
  ImageBackground,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {useTheme} from '@react-navigation/native';
import {Login} from '../..';
import SignInScreen from '../Login/SignInScreen';
import {colors, fonts, images} from '../../Constants';
import {TextComponent} from '../../Components';
const SplashScreen = ({navigation}) => {
  const {colors} = useTheme();

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#a35cb7" barStyle="light-content" />

      <ImageBackground source={images.BG} style={{flex: 1}}>
        <View style={styles.header}>
          <Animatable.Image
            animation="bounce"
            duraton="1500"
            source={images.logo}
            style={styles.logo}
            resizeMode="stretch"
          />
        </View>
          <Animatable.View style={[styles.footer, {}]} animation="fadeInUpBig">
            <TextComponent style={styles.title}>
              Stay connected with everyone !
            </TextComponent>
            <TextComponent style={[styles.text, ]}>
              Sign in with account
            </TextComponent>
            <View style={styles.button}>
              <TouchableOpacity
                onPress={() => navigation.navigate('SignInScreen')}>
                <View style={styles.signIn}>
                  <Text style={styles.textSign}>Get Started</Text>
                  <MaterialIcons name="navigate-next" color="#fff" size={20} />
                </View>
              </TouchableOpacity>
            </View>
          </Animatable.View>
      </ImageBackground>
    </View>
  );
};

export default SplashScreen;

const {height} = Dimensions.get('screen');
const height_logo = height * 0.28;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#a35cb7',
  },
  header: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  footer: {
    backgroundColor: colors.white,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingVertical: 50,
    paddingHorizontal: 30,
  },
  logo: {
    width: height_logo,
    height: height_logo,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  text: {
    color: 'grey',
    marginTop: 5,
    fontSize: 16,
  },
  button: {
    alignItems: 'flex-end',
    marginTop: 30,
  },
  signIn: {
    width: 150,
    height: 40,
    backgroundColor: colors.pink,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    flexDirection: 'row',
  },
  textSign: {
    color: colors.white,
    fontSize: 20,
    fontWeight: 'bold',
  },
});
