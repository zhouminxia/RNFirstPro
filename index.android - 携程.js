/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

//import React, { Component } from 'react';
//import {
//  AppRegistry,
//  StyleSheet,
//  Text,
//  View
//} from 'react-native';
//
//export default class HelloWorld extends Component {
//  render() {
//    return (
//      <View style={styles.container}>
//        <Text style={styles.welcome}>
//          Welcome to React Native!
//        </Text>
//        <Text style={styles.instructions}>
//          To get started, edit index.android.js
//        </Text>
//        <Text style={styles.instructions}>
//          Double tap R on your keyboard to reload,{'\n'}
//          Shake or press menu button for dev menu
//        </Text>
//      </View>
//    );
//  }
//}
//
//const styles = StyleSheet.create({
//  container: {
//    flex: 1,
//    justifyContent: 'center',
//    alignItems: 'center',
//    backgroundColor: '#F5FCFF',
//  },
//  welcome: {
//    fontSize: 20,
//    textAlign: 'center',
//    margin: 10,
//  },
//  instructions: {
//    textAlign: 'center',
//    color: '#333333',
//    marginBottom: 5,
//  },
//});
//
//AppRegistry.registerComponent('HelloWorld', () => HelloWorld);
//import React, { Component } from 'react';
//import { AppRegistry, Image,View,Text } from 'react-native';
//
//class HelloWorld extends Component {
//    //render() {
//    //  return (
//    //      <Text>Hello world!Hello world!</Text>
//    //  );
//    //}
//
//    //render() {
//    //    let pic = {
//    //        uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
//    //    };
//    //    return (
//    //        <Image source={pic} style={{height: 200,width: 300}}/>
//    //    );
//    //}
//    render() {
//        return (
//            //<View style={{alignItems:'center'}}>
//            <View >
//                <Hello name='first'/>
//                <Hello name='second'/>
//                <Hello name='third'/>
//            </View>
//        );
//    }
//
//}
//class Hello extends Component {
//    render() {
//        return (
//            <Text >Hello {this.props.name}</Text>
//        );
//
//    }
//}
//
//// 注意，这里用引号括起来的'HelloWorld'必须和项目名一致
//AppRegistry.registerComponent('HelloWorld', () => HelloWorld);
//电影demo

//import React,{Component} from 'react';
//import {
//    AppRegistry,
//    Text,
//    Image,
//    View,
//    StyleSheet
//    } from 'react-native';
//var MY_MOVIES_DATA = [
//    {title: '题目', year: '2016', posters: {thumbnail: 'http://i.imgur.com/UePbdph.jpg'}},
//];
//class HelloWorld extends Component {
//    render() {
//        var movie = MY_MOVIES_DATA[0];
//        return (
//            <View style={styles.container}>
//
//                <Image
//                    source={{uri:movie.posters.thumbnail}}
//                    style={styles.thumbnail}
//                    />
//                <View style={styles.rightContainer}>
//                    <Text style={styles.title}>{movie.title}</Text>
//                    <Text style={styles.year}>{movie.year}</Text>
//                </View>
//            </View>
//        );
//    }
//
//}
//var styles = StyleSheet.create({
//    container: {
//        flexDirection: 'row',
//        flex: 1,
//        justifyContent: 'center',
//        alignItems: 'center',
//        backgroundColor: '#F5FCFF',
//    },
//    thumbnail: {
//        width: 100,
//        height: 100,
//    },
//    rightContainer: {
//        flex: 1,
//    },
//    title: {
//        fontSize: 20,
//        marginBottom: 8,
//        textAlign: 'center',
//    },
//    year: {
//        textAlign: 'center',
//    },
//});
//AppRegistry.registerComponent('HelloWorld', ()=>HelloWorld);

//=============一闪一闪
//import React, { Component } from 'react';
//import { AppRegistry, Text, View } from 'react-native';
//
//class Blink extends Component {
//    constructor(props) {
//        super(props);
//        this.state = {showText: true};
//
//        // 每1000毫秒对showText状态做一次取反操作----() =>5相当于{return 5};
//        setInterval(() => {
//            this.setState({showText: !this.state.showText});
//        }, 1000);
//    }
//
//    render() {
//        // 根据当前showText的值决定是否显示text内容
//        let display = this.state.showText ? this.props.text : ' ';
//        return (
//            <Text>{display}</Text>
//        );
//    }
//}
//
//
//AppRegistry.registerComponent('HelloWorld', () => HelloWorld);
//class HelloWorld extends Component {
//    render() {
//        return (
//            <View>
//                <Blink text='I love to blink'/>
//                <Blink text='Yes blinking is so great'/>
//                <Blink text='Why did they ever take this out of HTML'/>
//                <Blink text='Look at me look at me look at me'/>
//            </View>
//        );
//    }
//}


//React是全局对象，顶层API与组件API
//class HelloWorld extends Component {
//    render() {
//        return (
//            <View >
//                <Shrik text='纯蓝色'/>
//                <Shrik text='纯红色'/>
//                {/*<Shrik style={[styles.bigblue,styles.red]}>[blue，red]</Shrik>
//                 <Shrik style={[styles.red,styles.bigblue]}>一半红， 一半蓝</Shrik>
//                 <Shrik style={[styles.bigblue, styles.red]}>bigblue, then red</Shrik>*/}
//
//            </View>
//        );
//    }
//}

//class Shrik extends Component {
//    // 构造
//    constructor(props) {
//        super(props);
//        // 初始状态
//        this.state = {
//            showText: true
//        };
//        //setInterval(() => {
////            this.setState({showText: !this.state.showText});
////        }, 1000);
//
//        setInterval(()=> {
//            this.setState({showText: !this.state.showText});
//        }, 1000);
//    }
//
//    render() {
//        // 根据当前showText的值决定是否显示text内容
//        let display = this.state.showText ? this.props.text : ' ';
//        return (
//            <Text style={styles.bigblue}>{display}</Text>
//        );
//    }
//}
//
//const styles = StyleSheet.create({
//    bigblue: {
//        color: 'blue',
//        fontWeight: 'bold',
//        fontSize: 30,
//    },
//    red: {
//        color: 'red',
//    },
//});

import React,{Component} from 'react';
import {AppRegistry,Text,View,StyleSheet,PixelRatio} from 'react-native';
AppRegistry.registerComponent('HelloWorld', ()=>HelloWorld);
class HelloWorld extends Component {
    render() {
        return (
            <View style={styles.flex}>
                <View style={styles.container}>
                    <View style={[styles.center,styles.flex]}>
                        <Text style={styles.font}>春天</Text>
                    </View>
                    <View style={[styles.leftRightWhiteLine,styles.flex]}>
                        <View style={[styles.flex,styles.horizontolWhiteLine]}>
                            <View style={[styles.flex,styles.center]}>
                                <Text style={styles.font}>酒店1</Text>
                            </View>
                        </View>
                        <View style={[styles.flex,styles.center]}>
                            <Text style={styles.font}>酒店2</Text>
                        </View>
                    </View>
                    <View style={[styles.center,styles.flex]}>
                        <Text style={styles.font}>特惠</Text>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    flex: {
        flex: 1,
    },
    container: {
        marginTop: 100,
        flexDirection: 'row',
        backgroundColor:'rgb(223,82,71)',
        height: 100,
        borderRadius: 5,
        margin: 10,
    },

    center: {
        justifyContent: 'center',
        alignItems: 'center',
    },


    leftRightWhiteLine: {
        borderLeftWidth: 1 / PixelRatio.get(),
        borderLeftColor: '#fff',
        borderRightWidth: 1 / PixelRatio.get(),
        borderRightColor: '#fff',
    },

    horizontolWhiteLine: {
        borderBottomWidth: 1 / PixelRatio.get(),
        borderBottomColor: '#fff',
    },
    font:{
        fontSize:16,
        fontWeight:'bold',
        color:'#fff',
    },

});