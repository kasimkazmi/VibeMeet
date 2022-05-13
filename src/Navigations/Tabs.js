import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../Screens/Home/Home';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import ProfileScreen from '../Screens/Profile/ProfileScreen';
import {StyleSheet} from 'react-native';
import Swips from '../Screens/SwipsScreen/Swips';
import Finder from '../Screens/FinderScreen/Finder';
import {images} from '../Constants';
import * as Animatable from 'react-native-animatable';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator();
const Tabs = () => {
  const AddCustomeButton = ({children, onPress}) => (
    <TouchableOpacity
      style={{
        top: -40,
        justifyContent: 'center',
        alignItems: 'center',
        ...styles.shadow,
      }}
      onPress={onPress}>
      <View
        style={{
          width: 70,
          height: 70,
          // borderRadius: 35,
          // backgroundColor: 'red',
        }}
      />
      {children}
    </TouchableOpacity>
  );

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,

        tabBarStyle: {
          height: 80,
          bottom: 30,
          borderRadius: 15,
          elevation: 0,
          position: 'absolute',
          left: 20,
          right: 20,
          ...styles.shadow,
        },
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <Icon
                style={{
                  width: 20,

                  height: 20,
                }}
                name="home"
                color={focused ? 'red' : 'black'}
                size={20}
              />

              <Text style={{color: focused ? 'red' : 'black', fontSize: 12}}>
                Home
              </Text>
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="Finder"
        component={Finder}
        options={{
          tabBarIcon: ({focused}) =>
            focused ? (
              <Animatable.Image
                animation="bounceIn"
                source={images.MiddleIcon}
                resizeMode="center"
                style={{
                  width: 55,
                  height: 55,
                  position: 'absolute',
                  top: -74,
                }}
              />
            ) : (
              <Animatable.Image
                animation="bounceIn"
                source={images.MiddleIcon}
                resizeMode="center"
                style={{
                  width: 55,
                  height: 55,
                  position: 'absolute',
                  tintColor: 'rgb(0,0,0)',

                  top: -74,
                }}
              />
            ),
          tabBarButton: props => <AddCustomeButton {...props} />,
        }}
      />

      <Tab.Screen
        name="Swips"
        component={Swips}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <Icon
                style={{
                  width: 20,

                  height: 20,
                }}
                name="gesture-swipe"
                color={focused ? 'red' : 'black'}
                size={20}
              />
              <Text
                style={{
                  color: focused ? 'red' : 'black',
                  fontSize: 12,
                  textAlign: 'center',
                }}>
                Swips
              </Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};
const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#7F5DF0',
    shadowOffset: {
      width: 20,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.2,
    elevation: 5,
  },
  icon: {},
});
export default Tabs;
