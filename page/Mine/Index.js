import React, {Component} from 'react';

import {
    StyleSheet,
    View,
    Text, Button,
    Image,
    ImageBackground,
} from 'react-native';
import {CommonActions} from '@react-navigation/native';
import AsyncStorage from '@react-native-community/async-storage';

export default class Mine extends Component {
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

        // console.log(this.state.user_info)
        return (
            <View style={{flex: 1}}>

                <ImageBackground source={require('./../../images/Mine/redbg.png')}
                                 style={styles.imageBackgroundStyle} resizeMode='cover'>
                    <View style={styles.headerView}>
                        <Text style={styles.headerText}>我的</Text>
                    </View>
                    <View style={styles.headerContent}>
                        <View style={styles.headerFlexLeft}>
                            <View style={{
                                flexDirection: 'row'
                            }}>
                                <Text style={{fontSize: 20, color: '#fff'}}>{
                                    this.state.user_info.name
                                }</Text>
                                <View style={{
                                    marginLeft:13,
                                    backgroundColor: '#fff',
                                    borderRadius: 4,
                                    paddingLeft:10,
                                    paddingRight:10,
                                    flexDirection:'row',
                                    justifyContent:'center',
                                    alignItems: 'center',
                                }}>
                                    <Image source={require('./../../images/Mine/lvzhi.png')} style={{
                                        width:17,
                                        height:16,
                                    }} />
                                    <Text style={{
                                        marginLeft:8,
                                        color: '#E33132',
                                        fontSize: 12,
                                    }}>
                                        履职积分：200分
                                    </Text>
                                </View>
                            </View>
                            <View
                                style={{
                                    flex:1,
                                    flexDirection:'row',
                                    marginRight:20,
                                    marginTop:10,

                                }}
                            >
                                <Text
                                    style={{
                                        color:'#fff',
                                        fontSize:14,
                                    }}>
                                    职务：
                                </Text>
                                <Text
                                    style={{
                                        color:'#fff',
                                        fontSize:14,
                                    }}>
                                    宁波市城市职业技术学院党委委员、组织部长、宣传部长
                                </Text>
                            </View>
                        </View>
                        <View style={styles.headerFlexRight}>
                            <Image source={require('./../../images/Mine/header.png')} style={{
                                width:80,
                                height:80,
                            }} />
                        </View>
                    </View>
                </ImageBackground>

                {/*<Button
                    title={"Go to Details"}
                    onPress={() =>{
                        this.props.navigation.dispatch(
                            CommonActions.navigate({
                                name: 'MineIndex',
                                key:new Date().getTime()
                            })
                        );
                    }}
                />*/}

                <View style={styles.mineBody}>
                    <View style={styles.gridWrap}>
                        <View style={styles.gridItem}>
                            <Image source={require('./../../images/Mine/resume.png')}
                                   style={{
                                       width:29,
                                       height:32
                                   }} />
                            <Text style={styles.gridText}>我的简历</Text>
                        </View>
                        <View style={styles.gridLine}/>
                        <View style={styles.gridItem}>
                            <Image source={require('./../../images/Mine/collect.png')}
                                   style={{
                                       width:32,
                                       height:29
                                   }} />
                            <Text style={styles.gridText}>我的简历</Text>
                        </View>
                        <View style={styles.gridLine}/>
                        <View style={styles.gridItem}>
                            <Image source={require('./../../images/Mine/collect.png')}
                                   style={{
                                       width:30,
                                       height:29
                                   }} />
                            <Text style={styles.gridText}>我的简历</Text>
                        </View>
                    </View>

                </View>

                <Button
                    style={{
                        backgroundColor:'rgba(255,123,123,1)'
                    }}
                    title={'退出登录'}
                    onPress={() => {
                        AsyncStorage.removeItem(
                            'user_info',
                            (error) => {
                                if (!error) {
                                    this.props.navigation.navigate('LoginIndex');
                                }
                            },
                        );

                    }}
                />
            </View>
        );
    }
}
const styles = StyleSheet.create({
    imageBackgroundStyle: {
        width: '100%',
        height: 159,
    },
    headerView: {
        height: 39,
        alignItems: 'center',
        justifyContent: 'center',

    },
    headerText: {
        color: '#fff',
        fontSize: 18,
    },
    headerContent: {
        flex: 1,
        padding: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    headerFlexLeft: {
        flex: 1,
        overflow:'hidden',
        paddingRight:10,
    },
    headerFlexRight: {
        width: 80,
        height: 80,
        borderRadius: 40,
    },
    mineBody:{
        flex:1,
        marginTop:-20,
        marginLeft:10,
        marginRight: 10,
    },
    gridWrap:{
        height:100,
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center',
        backgroundColor:'#fff',
    },
    gridItem:{
        alignItems:'center',
        justifyContent:'center'
    },
    gridText:{
        color:'#1E1E1E',
        fontSize:14,
        marginTop:10,
    },
    gridLine:{
        width:1,
        height:32,
        backgroundColor:'rgba(238,238,238,1)'
    },
});

