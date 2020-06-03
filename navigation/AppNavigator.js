import React, {Component} from 'react';

import {
    StyleSheet,
    View,
    Text,
} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import MainTabNavigator from './MainTabNavigator';

import Detail1 from './../page/Home/Detail1';
import Detail2 from './../page/Mine/Detail2';


const Stack = createStackNavigator();

class Detail1StackScreen extends Component {
    render() {
        return (
            <Stack.Navigator>
                <Stack.Screen name="Detail1" component={Detail1} options={{
                    title: 'Detail1',
                }}/>
                <Stack.Screen name="Detail2" component={Detail2} options={{
                    title: 'Detail2',
                }}/>
            </Stack.Navigator>
        );
    }
}

const Detail2StackScreen = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Detail2" component={Detail2} options={{
                title: 'Detail2',
            }}/>
        </Stack.Navigator>
    );
};

export default class AppNavigator extends Component {
    render() {
        return (
            <NavigationContainer>
                <Stack.Navigator headerMode="none">
                    <Stack.Screen name="ButtonTab" component={MainTabNavigator}/>
                    <Stack.Screen name="Details1" component={Detail1StackScreen}
                                  options={{
                                      headerShown: true,
                                      headerTitleAlign: 'center',
                                  }}
                    />
                    <Stack.Screen name="Details2" component={Detail2StackScreen}
                                  options={{
                                      headerShown: true,
                                      headerTitleAlign: 'center',
                                  }}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        );
    }
}
const styles = StyleSheet.create({});

