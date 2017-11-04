import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';


export default class screen1 extends Component {
    ondismissModal = () => {
        this.props.navigator.dismissModal({
            animationType: 'slide-down' // 'none' / 'slide-down' , dismiss animation for the modal (optional, default 'slide-down')
          });
      };

  pushScreen2 = () => {
    this.props.navigator.push({
      screen: 'bcapp.Screen2', // unique ID registered with Navigation.registerScreen
      title: 'Screen 2', // navigation bar title of the pushed screen (optional)
      // titleImage: require('../../img/my_image.png'), // iOS only. navigation bar title image instead of the title text of the pushed screen (optional)
      passProps: {}, // Object that will be passed as props to the pushed screen (optional)
      animated: true, // does the push have transition animation or does it happen immediately (optional)
      animationType: 'fade', // 'fade' (for both) / 'slide-horizontal' (for android) does the push have different transition animation (optional)
      backButtonTitle: 'Home', // override the back button title (optional)
      backButtonHidden: false, // hide the back button altogether (optional)
      navigatorStyle: {}, // override the navigator style for the pushed screen (optional)
      navigatorButtons: {} // override the nav buttons for the pushed screen (optional)
    });
  }


  pushViewer = () => {
    this.props.navigator.push({
      screen: 'bcapp.Viewer', // unique ID registered with Navigation.registerScreen
      title: 'Viewer', // navigation bar title of the pushed screen (optional)
      // titleImage: require('../../img/my_image.png'), // iOS only. navigation bar title image instead of the title text of the pushed screen (optional)
      passProps: {}, // Object that will be passed as props to the pushed screen (optional)
      animated: true, // does the push have transition animation or does it happen immediately (optional)
      animationType: 'fade', // 'fade' (for both) / 'slide-horizontal' (for android) does the push have different transition animation (optional)
      backButtonTitle: 'Home', // override the back button title (optional)
      backButtonHidden: false, // hide the back button altogether (optional)
      navigatorStyle: {}, // override the navigator style for the pushed screen (optional)
      navigatorButtons: {} // override the nav buttons for the pushed screen (optional)
    });
  }

  pushScreen3 = () => {
    this.props.navigator.push({
      screen: 'bcapp.Screen3', // unique ID registered with Navigation.registerScreen
      title: 'Screen 3', // navigation bar title of the pushed screen (optional)
      // titleImage: require('../../img/my_image.png'), // iOS only. navigation bar title image instead of the title text of the pushed screen (optional)
      passProps: {}, // Object that will be passed as props to the pushed screen (optional)
      animated: true, // does the push have transition animation or does it happen immediately (optional)
      animationType: 'fade', // 'fade' (for both) / 'slide-horizontal' (for android) does the push have different transition animation (optional)
      backButtonTitle: 'Home', // override the back button title (optional)
      backButtonHidden: false, // hide the back button altogether (optional)
      navigatorStyle: {}, // override the navigator style for the pushed screen (optional)
      navigatorButtons: {} // override the nav buttons for the pushed screen (optional)
    });
  }


  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to Screen 1
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.ios.js
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>
        <Button
            onPress={this.pushScreen2}
            title="Screen 2"/>
        <Button
            onPress={this.pushScreen3}
            title="Screen 3"/>
        <Button
            onPress={this.pushViewer}
            title="Viewer"/>
            
        <Button
            onPress={this.ondismissModal}
            title="Dismiss"/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});