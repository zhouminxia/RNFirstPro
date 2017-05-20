/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */


import React,{Component} from 'react';
import {AppRegistry,Text,View,StyleSheet} from 'react-native';
AppRegistry.registerComponent('HelloWorld', ()=>HelloWorld);

const WYHeader = require('./wangyihead');
class HelloWorld extends Component {
    render() {
        return (
            <View style={styles.flex}>
                <WYHeader>
                </WYHeader>


                <List title='阿卡的减肥啦空间的1'></List>
                <List title='阿卡的减肥啦空间的2'></List>
                <List title='阿卡的减肥啦空间的3'></List>
                <List title='阿卡的减肥啦空间的4'></List>

                <ImportanceNews news={
                ['阿卡的减肥啦空阿卡的减肥啦空阿卡的减肥啦空阿卡的减肥啦空阿卡的减肥啦空阿卡的减肥啦空阿卡的减肥啦空阿卡的减肥啦空阿卡的减肥啦空','阿卡的减肥啦空dfadsfdf','阿卡的减肥啦空dfadsfdf']
                }></ImportanceNews>
            </View>
        );
    }
}


class List extends Component {
    render() {
        return (
            <View style={styles.listItem}>
                <Text style={styles.listItemFont}>{this.props.title}</Text>
            </View>
        );
    }
}

class ImportanceNews extends Component {


    show(title) {
        alert(title);
    }

    render() {
        var mNews = [];
        for (var i in this.props.news) {
            var text = (
                <Text
                    key={i}
                    onPress={this.show.bind(this,this.props.news[i])}
                    numberOfLines={1}
                    style={[styles.listItemFont,styles.news_item]}>{this.props.news[i]}
                </Text>
            );
            mNews.push(text);
        }


        return (
            <View style={styles.flex}>
                <Text style={styles.importantTitle}>今日要闻</Text>
                {mNews}

            </View>
        );
    }
}
const styles = StyleSheet.create({
    flex: {
        flex: 1,
    },

    listItem: {
        height: 40,
        marginLeft: 10,
        marginRight: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
        justifyContent: 'center',
    },
    listItemFont: {
        fontSize: 18,
    },

    importantTitle: {
        color: '#f00',
        marginLeft: 10,
        marginTop: 10,
        fontWeight: 'bold',
        fontSize: 20,
    },
    news_item: {

        margin: 5,

    },

});