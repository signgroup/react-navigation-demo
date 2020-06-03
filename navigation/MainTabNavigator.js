import React, {Component} from 'react';

import {
    StyleSheet,
    View,
    Image,
    Text,
    Button,
} from 'react-native';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

import HomeScreen from './../page/Home/Index';
import MineScreen from './../page/Mine/Index';
import Detail1 from './../page/Home/Detail1';
import Detail2 from './../page/Mine/Detail2';


const Stack = createStackNavigator();
// 首页的路由栈
const HomeStackScreen = () => {
    return (
        <Stack.Navigator  initialRouteName="Detail1">
            <Stack.Screen name="Home" component={HomeScreen} options={{
                title: 'Home'
            }} />
            <Stack.Screen name="Detail1" component={Detail1}
                          options={{
                              title: 'Home11111111'
                          }} />
        </Stack.Navigator>


    )
}
// 首页的路由栈
const MineStackScreen = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Mine" component={MineScreen} options={{
                title: 'Mine'
            }} />
        </Stack.Navigator>
    )
}

const Tab = createBottomTabNavigator();
export default class MainTabNavigator extends Component {
    render() {
        return (
                <Tab.Navigator
                    labeled={false}
                    initialRouteName="Pond"
                    activeColor="#EB3349"
                    inactiveColor="#888888"
                    backBehavior="none"
                    shifting={true}
                    barStyle={{
                        backgroundColor: '#FFFFFF',
                    }}
                >
                    <Tab.Screen name="Home" component={HomeStackScreen}
                                options={{
                                    tabBarIcon: ({color}) => (
                                        <Image
                                            source={require('./../images/home_nor.png')}
                                            style={[{width: 22, height: 22}, {tintColor: color}]}/>
                                    ),
                                }}

                    />
                    <Tab.Screen name="Mine" component={MineStackScreen}
                                options={{
                                    tabBarIcon: ({color}) => (
                                        <Image
                                            source={require('./../images/mine_nor.png')}
                                            style={[{width: 22, height: 22}, {tintColor: color}]}/>
                                    ),
                                    tabBarVisible: true,
                                }}/>
                </Tab.Navigator>
        );
    }
}

const styles = StyleSheet.create({});

