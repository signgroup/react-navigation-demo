/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';
// import AppNavigator from './navigation/MainTabNavigator'
import AppNavigator from './navigation/AppNavigator'
// import AppNavigator from './testRoute'

export default class App extends Component {
  render(){
    return(
        <AppNavigator />
    )
  }
}

const styles = StyleSheet.create({
});

