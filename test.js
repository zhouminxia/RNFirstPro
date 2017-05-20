import React,{Component} from 'react';
import {AppRegistry,Text,View} from 'react-native';
class HelloWorld extends Component {
    render() {
        return (
            <View ></View>
        );
    }
}
class Hello extends Component {
    // ¹¹Ôì
    constructor(props) {
        super(props);
        // ³õÊ¼×´Ì¬
        this.state = {showText: true};
        setInterval(()=> {
            this.setstate({showText: !this.state.showText});
        }, 1000);
    }

    render() {
        let display = this.state.showText ? this.props.text : '';
        return (
            <Text display/>
        );
    }
}
AppRegistry.registerComponent('HelloWorld', ()=>HelloWorld);
class HelloWorld extends Component {
    render() {
        return (
            <View>
                <Hello text='aaaaaaaaa'/>
                <Hello text='bbbbbbb'/>
                <Hello text='cccc'/>
            </View>
        );
    }
}