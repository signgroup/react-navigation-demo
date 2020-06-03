import React, {Component} from 'react';

import {
    StyleSheet,
    View,
    Text, Button,
} from 'react-native';

export default class Home extends Component {
    render() {
        return (
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Text>Home!</Text>
                <Button
                    title="Go to Details"
                    onPress={() =>{
                        console.log('Details1')
                        this.props.navigation.navigate('HomeDetail')
                    }}
                />
            </View>
        );
    }
}
const styles = StyleSheet.create({});

