import React, {Component} from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import MainTabNavigator from './MainTabNavigator';

import HomeIndex from './../page/Home/Index';
import HomeDetail from './../page/Home/Detail1';
import MineIndex from './../page/Mine/Index';
import MineDetail from './../page/Mine/Detail2';


const Stack = createStackNavigator();


export default class AppNavigator extends Component {
    render() {
        return (
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name="ButtonTab" component={MainTabNavigator}/>
                    <Stack.Screen name="HomeIndex" component={HomeIndex}/>
                    <Stack.Screen name="HomeDetail" component={HomeDetail}/>
                    <Stack.Screen name="MineIndex" component={MineIndex}
                                  options={{
                                      headerShown: true,
                                      headerTitleAlign: 'center',
                                  }}
                    />
                    <Stack.Screen name="MineDetail" component={MineDetail}
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
