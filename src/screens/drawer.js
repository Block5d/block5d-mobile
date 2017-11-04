import React from 'react';
import {StyleSheet, View, Button} from 'react-native';

class drawer extends React.Component {

  onShowModal = () => {
    this.toggleDrawer();
    this.props.navigator.showModal({
      screen: 'bcapp.Screen1',
      title: `Screen 1`
    });
  };

  onPushToFirstTab = () => {
    this.toggleDrawer();
    // this.props.navigator.handleDeepLink({
    //   link: 'tab1/example.Types.Push'
    // });
  };

  toggleDrawer = () => {
    this.props.navigator.toggleDrawer({
      side: 'left'
    });
  };

  pushScreen = () => {
    this.props.navigator.push({
      screen: 'bcapp.Screen1', // unique ID registered with Navigation.registerScreen
      title: 'Screen 1', // navigation bar title of the pushed screen (optional)
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
        <View style={styles.button}>
          <Button
            color='white'
            onPress={this.onShowModal}
            title="Show Modal"/>
        </View>
        <View style={styles.button}>
          <Button
            color='white'
            onPress={this.onPushToFirstTab}
            title="Push to First Tab"/>
        </View>
        <View style={styles.button}>
          <Button
            color='white'
            onPress={this.pushScreen}
            title="Show Push"/>
        </View>
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: 300,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#47605c',
  },
  button: {
    marginTop: 16,
  }
});

export default drawer;
