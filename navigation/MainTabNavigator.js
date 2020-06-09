import React, {Component} from 'react';

import {
    StyleSheet,
    Image,
} from 'react-native';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import HomeScreen from './../page/Home/Index';
import MineScreen from './../page/Mine/Index';

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
                    <Tab.Screen name="Home" component={HomeScreen}
                                options={{
                                    tabBarIcon: ({color}) => (
                                        <Image
                                            source={require('./../images/home_nor.png')}
                                            style={[{width: 22, height: 22}, {tintColor: color}]}/>
                                    ),
                                }}

                    />
                    <Tab.Screen name="Mine" component={MineScreen}
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

