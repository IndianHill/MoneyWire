import React, { Component } from 'react';
import RootContainer from './App/Container/RootContainer'
import { AppRegistry } from 'react-native'
import firebase from 'react-native-firebase';

export default class App extends Component<{}> {
    render() {
        return (
            <RootContainer />
        );
    }
}

AppRegistry.registerComponent('Moneywire', () => App);