import React, {useState} from 'react';
import {View, Text, StyleSheet, SafeAreaView,Dimensions ,ImageBackground} from 'react-native';
import ButtonWithLoader from '../src/Components/ButtonWithLoader';
import TextInputWithLable from '../src/Components/TextInputWithLabel';
import LinearGradient from 'react-native-linear-gradient';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

import validator from '../src/utils/validations';
import {showError} from '../src/utils/helperFunction';
import actions from '../src/redux/actions';
import {showMessage} from 'react-native-flash-message';


const box = Dimensions.get('screen');

const Signup = ({navigation}) => {
  const [state, setState] = useState({
    isLoading: false,
    userName: '',
    email: '',
    password: '',
    isSecure: true,
  });
  const {
    isLoading,
    // userName,
    email,
    role,
    verificationType,
    password,
    isSecure,
  } = state;
  const updateState = data => setState(() => ({...state, ...data}));

  const isValidData = () => {
    const error = validator({
      //   userName,
      email,
      password,
      verificationType,
      role,
    });
    if (error) {
      showError(error);
      return false;
    }
    return true;
  };

  const onSignup = async () => {
    const checkValid = isValidData();
    if (checkValid) {
      updateState({isLoading: true});
      try {
        const res = await actions.signup({
          //   name: userName,
          email,
          password,
          verificationType: 1,
          role: 'user',
        });
        console.log('res of signup==>>>>>', res);
        showMessage('Registered successfully...!!!! Please verify your email');
        updateState({isLoading: false});
        navigation.goBack();
      } catch (error) {
        console.log('error raised');
        showError(error.message);
        updateState({isLoading: false});
      }
    }
  };
  return (
    <View style={styles.container}>
   <LinearGradient
    start={{x: 0.20, y: 0.20}} end={{x: 2.0, y: 1.20}}
    locations={[0.02,0.40,]}
    colors={['#7B7BFD', '#FF1616']}
    style={{flex: 1,
      paddingLeft: 15,
      paddingRight: 15,
      borderRadius: 5}}>

        
      {/* <ImageBackground  style={ {
    width: box.width / 2.40,
    height: box.width / 2.40,
    resizeMode: 'contain',

alignSelf: 'center',     

  }}source={IMG.BGIMG} />   */}
  <View style={{paddingTop:"50%"}}>
      <TextInputWithLable
        label="User name"
        placheHolder="Enter your user name"
        onChangeText={userName => updateState({userName})}
      />
      <TextInputWithLable
        label="Email"
        placheHolder="Enter your email"
        onChangeText={email => updateState({email})}
      />
      <TextInputWithLable
        label="Password"
        placheHolder="Enter your password"
        secureTextEntry={isSecure}
        onChangeText={password => updateState({password})}
      />

      <ButtonWithLoader
        text="Signup"
        onPress={onSignup}
        isLoading={isLoading}
      /></View>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,  paddingLeft:0,
    paddingRight:0,
    paddingBottom:0,
    paddingTop:0,
    padding: 24,
    backgroundColor: 'white',
  },
});

export default Signup;
