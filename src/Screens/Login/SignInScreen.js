import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Platform,
  StyleSheet,
  StatusBar,
  Image,
  Alert,
  ActivityIndicator,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import {useTheme} from 'react-native-paper';
import {authentication} from '../../utils/firebase';
import {signInWithEmailAndPassword} from 'firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {colors, images} from '../../Constants';
import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import {
  LoginManager,
  GraphRequest,
  GraphRequestManager,
  AccessToken,
} from 'react-native-fbsdk';
import { requestUserPermission, notificationListener } from '../../utils/notificationService';


const SignInScreen = ({navigation}) => {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    GoogleSignin.configure();
 
  }, []);

  const [data, setData] = React.useState({
    username: '',
    password: '',
    check_textInputChange: false,
    secureTextEntry: true,
    isValidUser: true,
    isValidPassword: true,
  });

  const {colors} = useTheme();

  // / ------------------------------Facebook Login Start ---------------------////

  const signInWithFacebook = async () => {
    LoginManager.logOut();
    LoginManager.logInWithPermissions(['public_profile', 'email']).then(
      result => {
        if (
          result.declinedPermissions &&
          result.declinedPermissions.includes('email')
        ) {
          resCallback({message: 'Email is Requird'});
        }
        if (result.isCancelled) {
          console.log('isCancelled', result.isCancelled);
        } else {
          setIsLoading(true);
          AccessToken.getCurrentAccessToken()
            .then(user => {
              return user;
            })
            .then(async user => {
              await AsyncStorage.setItem('facebooktoken', user.accessToken);
              // await Utility.setInLocalStorge('facebooktoken', user.accessToken);
              const responseInfoCallback = async (error, result) => {
                if (error) {
                  // setLoading(false);
                  console.log('errrrreeeee', error);
                  alert('Error fetching data: ' + error.toString());
                } else {
                  console.log(result);
                }
              };
              const infoRequest = new GraphRequest(
                '/me',
                {
                  accessToken: user.accessToken,
                  parameters: {
                    fields: {
                      string: 'email,name,first_name,last_name',
                    },
                  },
                },
                responseInfoCallback,
              );
              console.log(infoRequest);

              new GraphRequestManager().addRequest(infoRequest).start();
              navigation.navigate('DrawerStack');
            });
        }
      },
    );
  };

  // / ------------------------------Google Login Start ---------------------////

  const signInwitGoogle = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      await GoogleSignin.signOut();
      const userInfo = await GoogleSignin.signIn();

      console.log(userInfo);
      navigation.navigate('DrawerStack');
      setIsLoading(false);
      
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        console.log(error);
        // user cancelled the login flow
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation (e.g. sign in) is in progress already
        console.log(error);
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // play services not available or outdated
        console.log(error);
      } else {
        // some other error happened
        console.log(error);
      }
    }
  };

  const textInputChange = val => {
    if (val.trim().length >= 4) {
      setData({
        ...data,
        username: val,
        check_textInputChange: true,
        isValidUser: true,
      });
    } else {
      setData({
        ...data,
        username: val,
        check_textInputChange: false,
        isValidUser: false,
      });
    }
  };

  const handlePasswordChange = val => {
    if (val.trim().length >= 8) {
      setData({
        ...data,
        password: val,
        isValidPassword: true,
      });
    } else {
      setData({
        ...data,
        password: val,
        isValidPassword: false,
      });
    }
  };

  const updateSecureTextEntry = () => {
    setData({
      ...data,
      secureTextEntry: !data.secureTextEntry,
    });
  };

  const handleValidUser = val => {
    if (val.trim().length >= 4) {
      setData({
        ...data,
        isValidUser: true,
      });
    } else {
      setData({
        ...data,
        isValidUser: false,
      });
    }
  };

  const loginHandle = (username, password) => {
    if (data.username.length == 0 || data.password.length == 0) {
      Alert.alert(
        'Wrong Input!',
        'Username or password field cannot be empty.',
        [{text: 'Okay'}],
      );
      return;
    } else {
      LoginHander();
    }
    // signIn(foundUser)
    // console.log(foundUser,"User Details")
  };

  const LoginHander = () => {
    console.log('check the logn fun');
    signInWithEmailAndPassword(authentication, data.username, data.password)
      .then(userCredential => {
        // Signed in
        setIsLoading(true);

        const user = userCredential.user;
        console.log(user.stsTokenManager.accessToken);

        if (user) {
          AsyncStorage.setItem('userToken', user.stsTokenManager.accessToken);
          navigation.navigate('DrawerStack');
        }
      })
      .catch(error => {
        console.log(error,"Errror found ")
        alert(
          'Wrong Input!',
          [{text: 'Okay'}],
        );
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#a35cb7" barStyle="light-content" />
      <View style={styles.header}>
        <Text style={styles.text_header}>Welcome!</Text>
      </View>
      <Animatable.View
        animation="fadeInUpBig"
        style={[
          styles.footer,
          {
            backgroundColor: colors.background,
          },
        ]}>
        <Text
          style={[
            styles.text_footer,
            {
              color: '#c6447c',
            },
          ]}>
          {'Username'}
        </Text>
        <View style={styles.action}>
          <FontAwesome name="user-o" color={'#c6447c'} size={20} />
          <TextInput
            placeholder="Your Username"
            placeholderTextColor="#a35cb7"
            style={[
              styles.textInput,
              {
                color: colors.text,
              },
            ]}
            autoCapitalize="none"
            onChangeText={val => textInputChange(val)}
            onEndEditing={e => handleValidUser(e.nativeEvent.text)}
          />
          {data.check_textInputChange ? (
            <Animatable.View animation="bounceIn">
              <Feather name="check-circle" color={'#c6447c'} size={20} />
            </Animatable.View>
          ) : null}
        </View>
        {data.isValidUser ? null : (
          <Animatable.View animation="fadeInLeft" duration={500}>
            <Text style={styles.errorMsg}>
              {'Username must be 4 characters long.'}
            </Text>
          </Animatable.View>
        )}

        <Text
          style={[
            styles.text_footer,
            {
              color: '#c6447c',
              marginTop: 35,
            },
          ]}>
          {'Password'}
        </Text>
        <View style={styles.action}>
          <Feather name="lock" color={'#c6447c'} size={20} />
          {/* c6447c */}
          <TextInput
            placeholder="Your Password"
            placeholderTextColor="#a35cb7"
            secureTextEntry={data.secureTextEntry ? true : false}
            style={[
              styles.textInput,
              {
                color: colors.text,
              },
            ]}
            autoCapitalize="none"
            onChangeText={val => handlePasswordChange(val)}
          />
          <TouchableOpacity onPress={updateSecureTextEntry}>
            {data.secureTextEntry ? (
              <Feather name="eye-off" color={'#c6447c'} size={20} />
            ) : (
              <Feather name="eye" color={'#c6447c'} size={20} />
            )}
          </TouchableOpacity>
        </View>
        {data.isValidPassword ? null : (
          <Animatable.View animation="fadeInLeft" duration={500}>
            <Text style={styles.errorMsg}>
              {'Password must be 8 characters long.'}
            </Text>
          </Animatable.View>
        )}

        <TouchableOpacity>
          <Text style={{color: '#c6447c', marginTop: 15}}>
            {'Forgot password?'}
          </Text>
        </TouchableOpacity>

        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <View
            style={{
              flex: 1,
              height: 1,
              backgroundColor: 'pink',
            }}
          />
          <View>
            <Text
              style={{fontSize: 11.5}}
              // children={strings('social')}
            />
          </View>
          <View
            style={{
              flex: 1,
              height: 1,
              backgroundColor: 'pink',
            }}
          />
        </View>
        <View style={styles.row}>
          <TouchableOpacity onPress={signInWithFacebook}>
            <View style={styles.col}>
              <Image
                source={images.FB}
                resizeMode={'stretch'}
                style={styles.gicon}
              />
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={signInwitGoogle}>
            <View style={styles.col}>
              <Image
                source={images.google}
                resizeMode={'stretch'}
                style={styles.gicon}
              />
            </View>
          </TouchableOpacity>
          {/* {Platform.OS === 'ios' && (
            <View style={styles.col}>
              <Image
                source={images.apple}
                resizeMode={'stretch'}
                style={styles.gicon}
              />
            </View>
          )} */}
        </View>

        <View style={styles.button}>
          <TouchableOpacity
            style={styles.signIn}
            onPress={() => {
              loginHandle();
            }}>
            <LinearGradient
              colors={['#c6447c', '#a35cb7']}
              style={styles.signIn}>
              <Text
                style={[
                  styles.textSign,
                  {
                    color: '#fff',
                  },
                ]}>
                Sign In
                {isLoading && (
                  <ActivityIndicator
                    size="large"
                    color={colors.surface}
                    // style={{alignSelf: 'center'}}
                  />
                )}
              </Text>
            </LinearGradient>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate('SignUpScreen')}
            style={[
              styles.signIn,
              {
                borderColor: '#a35cb7',
                borderWidth: 1,
                marginTop: 15,
              },
            ]}>
            <Text
              style={[
                styles.textSign,
                {
                  color: '#c6447c',
                },
              ]}>
              Sign Up
            </Text>
          </TouchableOpacity>
        </View>
      </Animatable.View>
    </View>
  );
};

export default SignInScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#a35cb7',
  },
  header: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
    paddingBottom: 50,
  },
  footer: {
    flex: 8,
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  text_header: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 30,
  },
  text_footer: {
    color: '#05375a',
    fontSize: 18,
  },
  action: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
    paddingBottom: 5,
  },
  actionError: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#FF0000',
    paddingBottom: 5,
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS === 'ios' ? 0 : -12,
    paddingLeft: 10,
    color: '#05375a',
  },
  errorMsg: {
    color: '#FF0000',
    fontSize: 14,
  },
  button: {
    alignItems: 'center',
    marginTop: 50,
  },
  signIn: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    borderRadius: 10,
  },

  textSign: {
    fontSize: 18,
    textAlign: 'center',
    fontWeight: 'bold',
  },

  row: {
    paddingLeft: 20,
    paddingRight: 20,
    justifyContent: 'center',
    flexDirection: 'row',
  },
  col: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 8,
  },
  gicon: {
    height: 35,
    width: 35,
  },
});
