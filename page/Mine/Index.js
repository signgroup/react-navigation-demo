import React, {Component} from 'react';

import {
    StyleSheet,
    View,
    Text, Button,
} from 'react-native';

export default class Mine extends Component {
    render() {
        return (
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Text>Mine!</Text>
                <Button
                    title="Go to Details"
                    onPress={() =>{
                        console.log('Details2')
                        this.props.navigation.navigate('Details2')
                    }}
                />
            </View>
        );
    }
}
const styles = StyleSheet.create({});

