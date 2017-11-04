import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import ModelView from 'react-native-gl-model-view';

export default class screen3 extends Component {
    render() {
      return (
        <View style={styles.container}>
          <ModelView
            model="../../data/demon.model"
            texture="../../data/demon.png"
        
            scale={0.01}
        
            translateZ={-2}
            rotateZ={270}
        
            style={{flex: 1}}
            />
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

