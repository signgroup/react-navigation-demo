import React, {Component} from 'react';

import {
    StyleSheet,
    View,
    Text, Button,
} from 'react-native';
import { CommonActions } from '@react-navigation/native';

export default class Mine extends Component {
    render() {
        return (
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Text>Mine!</Text>
                <Button
                    title={"Go to Details"}
                    onPress={() =>{
                        this.props.navigation.dispatch(
                            CommonActions.navigate({
                                name: 'MineIndex',
                                key:new Date().getTime()
                            })
                        );
                    }}
                />
            </View>
        );
    }
}
const styles = StyleSheet.create({});

