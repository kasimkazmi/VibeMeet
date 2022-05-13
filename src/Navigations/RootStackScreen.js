
import React from 'react';

import {createNativeStackNavigator} from "@react-navigation/native-stack"
import { SignInScreen, SignUpScreen, SplashScreen, } from '../Screens';
import DrawerStack from './DrawerStack';

const RootStack = createNativeStackNavigator();

const RootStackScreen = ({navigation}) => (
    <RootStack.Navigator screenOptions={{headerShown:false}}>
        <RootStack.Screen name="SplashScreen" component={SplashScreen}/>
         <RootStack.Screen name="SignInScreen" component={SignInScreen}/>
        <RootStack.Screen name="SignUpScreen" component={SignUpScreen}/>
        <RootStack.Screen name="DrawerStack" component={DrawerStack}/>



       
    </RootStack.Navigator>
);

export default RootStackScreen;