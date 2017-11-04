/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import {Platform} from 'react-native';
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import {Navigation} from 'react-native-navigation';

import {registerScreens} from './src/screens';

// screen related book keeping
registerScreens();

const tabs = [
  {
    label: 'One',
    screen: 'bcapp.Screen1', // this is a registered name for a screen
    icon: require('./img/one.png'),
    selectedIcon: require('./img/one_selected.png'), // iOS only
    title: 'Screen One'
  },
  {
    label: 'Two',
    screen: 'bcapp.Screen2',
    icon: require('./img/two.png'),
    selectedIcon: require('./img/two_selected.png'), // iOS only
    title: 'Screen Two'
  },
  {
    label: 'Three',
    screen: 'bcapp.Screen2',
    icon: require('./img/two.png'),
    selectedIcon: require('./img/two_selected.png'), // iOS only
    title: 'Screen Three'
  }
]

Navigation.startTabBasedApp({
  tabs: tabs,
  animationType: Platform.OS === 'ios' ? 'slide-up' : 'fade',
  tabsStyle: {
    tabBarBackgroundColor: '#4bad9c', // Background color
    navBarButtonColor: '#ffffff',
    tabBarButtonColor: '#ffffff',
    navBarTextColor: '#ffffff',
    tabBarSelectedButtonColor: '#47605c', // Selected color
    navigationBarColor: '#003a66',
    navBarBackgroundColor: '#003a66',
    statusBarColor: '#002b4c',
    tabFontFamily: 'BioRhyme-Bold',
  },
  appStyle: {
    tabBarBackgroundColor: '#003a66',
    navBarButtonColor: '#ffffff',
    tabBarButtonColor: '#ffffff',
    navBarTextColor: '#ffffff',
    tabBarSelectedButtonColor: '#ff505c',
    navigationBarColor: '#003a66',
    navBarBackgroundColor: '#003a66',
    statusBarColor: '#002b4c',
    tabFontFamily: 'BioRhyme-Bold',
  },
  drawer: {
    left: {
      screen: 'bcapp.Drawer'
    },
    style: { // ( iOS only )
      // drawerShadow: true, // optional, add this if you want a side menu drawer shadow
      // contentOverlayColor: 'rgba(0,0,0,0.25)', // optional, add this if you want a overlay color when drawer is open
      leftDrawerWidth: 75, // optional, add this if you want a define left drawer width (50=percent)
      // rightDrawerWidth: 50 // optional, add this if you want a define right drawer width (50=percent)
    },
    type: 'TheSideBar',
    // animationType: 'door', 
    // animationType: 'parallax',
    // animationType: 'slide-and-scale',
    // animationType: 'airbnb',
    animationType: 'door',
  }
});
