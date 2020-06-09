import React, {Component} from 'react';

import {
    StyleSheet,
    View,
    Text,
    TextInput,
    ImageBackground,
    TouchableOpacity,
    Alert,
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

export default class Home extends Component {
    constructor() {
        super();
        this.state = {
            phone: null,
            code: null,
        };
    }

    handelLoginSubmit() {
        const handelAlert = (str = '请输入完成数据后提交！') => {
            Alert.alert(str);  //弹出提示框
        };
        if (!this.state.phone) {
            handelAlert('请输入手机号码');
            return;
        }
        if (this.state.phone.length!==11) {
            handelAlert('请输入11位手机号码');
            return;
        }
        if (!this.state.code) {
            handelAlert('请输入验证码');
            return;
        }
        console.log(this.state);
        let data = new FormData();
        data.append('way', 3);
        data.append('source', 2);
        data.append('mobile_phone', this.state.phone);//18112916652
        data.append('code', this.state.code);//181001
        fetch('https://zxtest.zhijiasoft.com/v1/auth/login/', {
            method: 'POST',
            body: data,
        })
            .then(res => res.json())
            .catch(error => console.error('Error:', error))
            .then(response =>{
                console.log(response)
                if(response.code===1){
                    handelAlert(response.message)
                }
                if(response.code===0){
                    console.log(response.data.user_info)
                    AsyncStorage.setItem('user_info',JSON.stringify(response.data.user_info));
                    //跳转
                    this.props.navigation.navigate('ButtonTab')
                }
            });
    }

    render() {
        return (
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <ImageBackground source={require('./../../images/Login/login-bg.png')}
                                 style={styles.imageBackgroundStyle} resizeMode='cover'>
                    <View style={styles.loginBox}>
                        <View style={styles.inputBox}>
                            <View style={styles.inputViewStyle}>
                                <TextInput
                                    style={{flex: 1, width: '100%'}}
                                    placeholder="请输入手机号码"
                                    placeholderTextColor="#ccc"
                                    keyboardType='numeric'
                                    maxLength={11}
                                    onChangeText={(value) => {
                                        const textValue = value.replace(/[^\d]+/, '');
                                        // console.log(textValue);
                                        this.setState({phone: textValue});
                                    }}
                                    value={this.state.phone}
                                />
                                <TouchableOpacity
                                    style={{
                                        height: 28,
                                        width: 86,
                                        borderWidth: 1,
                                        borderColor: 'rgba(194,194,194,1)',
                                        justifyContent: 'center',
                                        borderRadius: 4,
                                    }}
                                    activeOpacity={.7}
                                >
                                    <Text style={{
                                        color: '#aaa',
                                        textAlign: 'center',
                                        fontSize: 14,
                                    }}>获取验证码</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={{flex: 1}}>
                                <TextInput
                                    placeholder="请输入验证码"
                                    placeholderTextColor="#ccc"
                                    keyboardType='numeric'
                                    maxLength={11}
                                    onChangeText={(value) => {
                                        const textValue = value.replace(/[^\d]+/, '');
                                        // console.log(textValue);
                                        this.setState({code: textValue});
                                    }}
                                    value={this.state.code}
                                />
                            </View>
                        </View>
                        <TouchableOpacity style={styles.loginBtn} activeOpacity={.7}
                                          onPress={this.handelLoginSubmit.bind(this)}
                        >
                            <Text style={styles.loginText}>登录</Text>
                        </TouchableOpacity>
                    </View>
                </ImageBackground>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    imageBackgroundStyle: {
        width: '100%',
        height: '100%',
        backgroundColor: '#e80000',
        justifyContent: 'flex-end',
    },
    loginBox: {
        height: 200,
        marginLeft: 22,
        marginRight: 22,
        marginBottom: 105,
        justifyContent: 'space-between',
    },
    inputBox: {
        width: '100%',
        height: 100,
        backgroundColor: '#fff',
        paddingLeft: 12,
        paddingRight: 12,
        borderRadius: 2,
    },
    inputViewStyle: {
        flex: 1,
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
        flexDirection: 'row',
        alignItems: 'center',
    },
    loginBtn: {
        width: '100%',
        height: 49,
        backgroundColor: '#FFEDAF',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,
    },
    loginText: {
        color: '#E83A3A',
        fontSize: 18,
        letterSpacing: 2,

    },
});

