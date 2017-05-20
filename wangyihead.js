/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */


import React,{Component} from 'react';
import {AppRegistry,Text,View,StyleSheet,PixelRatio} from 'react-native';

class WYHeader extends Component {
    render() {
        return (
            <View style={styles.flex}>
                <Text style={styles.commonFontSizeAndBold}>
                    <Text style={styles.font1}>
                        <Text>网易</Text>
                    </Text>
                    <Text style={styles.font2}>
                        <Text>新闻</Text>
                    </Text>
                    <Text style={styles.font3}>
                        <Text>有态度”</Text>
                    </Text>
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    flex: {
        justifyContent: 'center',
        flexDirection: 'row',
        height: 50,
        borderBottomColor: '#EF2D36',
        borderBottomWidth: 3 / PixelRatio.get(),
        alignItems: 'center',
    },
    commonFontSizeAndBold:{
        fontSize:30,
        fontWeight:'bold',
    },

    font1:{
        color:'#f00',

    },
    font2:{
        color:'#fff',
        backgroundColor:'rgb(255,128,128)',
    },
    font3:{
        color:'#404040',
    },
});
module.exports = WYHeader;