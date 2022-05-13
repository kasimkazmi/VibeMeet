import {View, ActivityIndicator, LogBox, ImageBackground} from 'react-native';

import React, {useEffect} from 'react';
import {
  NavigationContainer,
  DefaultTheme as NavigationDefaultTheme,
  DarkTheme as NavigationDarkTheme,
} from '@react-navigation/native';

import {createDrawerNavigator} from '@react-navigation/drawer';

import {
  Provider as PaperProvider,
  DefaultTheme as PaperDefaultTheme,
  DarkTheme as PaperDarkTheme,
} from 'react-native-paper';

import ButtomTab from '../Screens/Container/ButtomTab';
import {Chat, DrawerContent, Faq, IndividualChat,Support} from '../Screens';
import {colors, fonts, images} from '../Constants';
import {Profile, Refer} from '..';

const Drawer = createDrawerNavigator();

const DrawerStack = () => {
  return (
      <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}>
        <Drawer.Screen
          name="ButtomTab"
          component={ButtomTab}
          options={{headerShown: false}}
        />
        <Drawer.Screen
          name="ProfileScreen"
          component={Profile}
          options={{headerShown: false}}
        />
        <Drawer.Screen
          name="Chat"
          component={Chat}
          options={{headerShown: false}}
        />
        <Drawer.Screen
          name="Refer"
          component={Refer}
          options={{headerShown: false}}
        />
        <Drawer.Screen
          name="Support"
          component={Support}
          options={{headerShown: false}}
        />
         <Drawer.Screen
          name="Faq"
          component={Faq}
          options={{headerShown: false}}
        />
        <Drawer.Screen
          name="IndividualChat"
          component={IndividualChat}
          options={{headerShown: false}}
        />
      </Drawer.Navigator>
  );
};

export default DrawerStack;
