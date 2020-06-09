import React, {Component, Fragment} from 'react';
import AsyncStorage from '@react-native-community/async-storage';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import MainTabNavigator from './MainTabNavigator';
import LoginIndex from './../page/Login/Index';
import HomeIndex from './../page/Home/Index';
import HomeDetail from './../page/Home/Detail1';
import MineIndex from './../page/Mine/Index';
import MineDetail from './../page/Mine/Detail2';

const Stack = createStackNavigator();

export default class AppNavigator extends Component {
    constructor() {
        super();
        this.state = {
            user_info: {},
        };

    }
    componentWillMount(){
        AsyncStorage.getItem('user_info').then((value) => {
            this.setState({
                user_info: JSON.parse(value),
            });
        });
    }
    render() {
        return (
            <NavigationContainer>
                <Stack.Navigator>
                    {
                        !this.state.user_info ? (<Stack.Screen name="LoginIndex" component={LoginIndex}
                                                               options={{
                                                                   headerMode: 'none',
                                                                   headerTitle: '',
                                                                   headerShown: false,
                                                               }}
                        />) : (
                            <React.Fragment>
                                <Stack.Screen name="ButtonTab" component={MainTabNavigator}
                                              options={{
                                                  headerMode: 'none',
                                                  headerTitle: '',
                                                  headerShown: false,
                                              }}
                                />
                                <Stack.Screen name="HomeIndex" component={HomeIndex}
                                              options={{
                                                  headerTitle: 'none',
                                              }}
                                />
                                <Stack.Screen name="HomeDetail" component={HomeDetail}/>
                                <Stack.Screen name="MineIndex" component={MineIndex}
                                              options={{
                                                  headerTitleAlign: 'center',
                                              }}
                                />
                                <Stack.Screen name="MineDetail" component={MineDetail}
                                              options={{
                                                  headerShown: true,
                                                  headerTitleAlign: 'center',
                                              }}
                                />
                            </React.Fragment>
                        )
                    }

                </Stack.Navigator>
            </NavigationContainer>
        );
    }
}
/**
 * 把这个配置到 Navigation栈Stack内
 *
 *
 * 所有路由都注册在<Stack.Navigator>内
 *
 * <Stack.Screen> 可以嵌套 component={Stack.Screen}
 * 但是 Tab 最好不要
 *
 * Stack内嵌套 Tab，即保证最外层是Stack的话，所以所有页面都可以stack跳栈
 * **/
