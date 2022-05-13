import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Dimensions,
  ImageBackground,
} from 'react-native';
import ButtonWithLoader from '../../Components/ButtonWithLoader';
import TextInputWithLable from '../../Components/TextInputWithLabel';
// import {IMG} from '../../utility/image';
import validator from '../../utils/validations';
import {showError} from '../../utils/helperFunction';
import actions from '../../redux/actions';
import LinearGradient from 'react-native-linear-gradient';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import { images } from '../../Constants/images';
const box = Dimensions.get('screen');

const Login = ({navigation}) => {
  const [state, setState] = useState({
    isLoading: false,
    email: '',
    password: '',
    isSecure: true,
  });
  const {isLoading, email, role, password, isSecure} = state;
  const updateState = data => setState(() => ({...state, ...data}));

  const isValidData = () => {
    const error = validator({
      email,
      password,
      role,
    });
    if (error) {
      showError(error);
      return false;
    }
    return true;
  };

  const onLogin = async () => {
    const checkValid = isValidData();
    if (checkValid) {
      updateState({isLoading: true});
      try {
        const res = await actions.login({
          email,
          password,
          role: 'user',
        });
        console.log('res==>>>>>', res);
        if (!res.data.emailVerified) {
          alert('Please verify your email');
        }
        updateState({isLoading: false});
      } catch (error) {
        console.log('error raised');
        showError(error.message);
        updateState({isLoading: false});
      }
    }
  };
  // useEffect(() => {
  //   setTimeout(() => {
  //     SplashScreen.hide();
  //   }, 14000);
  // }, []);
  
  return (
    <View style={styles.container}>
      <LinearGradient
        start={{x: 0.2, y: 0.2}}
        end={{x: 2.0, y: 1.2}}
        locations={[0.02, 0.4]}
        colors={['#7B7BFD', '#FF1616']}
        style={{flex: 1, paddingLeft: 15, paddingRight: 15}}>
        <ImageBackground
          style={{
            width: box.width / 2.4,
            height: box.width / 2.4,
            resizeMode: 'contain',
            alignSelf: 'center',
          }}
          source={images.logo}
        />

        <KeyboardAwareScrollView>
          <TextInputWithLable
            label="Email"
            placheHolder="enter your email"
            onChangeText={email => updateState({email})}
          />
          <TextInputWithLable
            label="Password"
            placheHolder="enter your password"
            secureTextEntry={isSecure}
            onChangeText={password => updateState({password})}
          />

          <ButtonWithLoader
            text="Login"
            onPress={onLogin}
            isLoading={isLoading}
          />

          <View style={{marginVertical: 8}} />

          <ButtonWithLoader
            text="Signupp"
            onPress={() => navigation.navigate('Signup')}
          />
        </KeyboardAwareScrollView>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 0,
    paddingRight: 0,
    paddingBottom: 0,
    paddingTop: 0,
    padding: 24,
    backgroundColor: 'white',
  },
});

export default Login;
