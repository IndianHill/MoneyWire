import React, { Component } from 'react';
import RootContainer from './app/container/RootContainer'
import { AppRegistry } from 'react-native'
import * as firebase from './app/firebase';

export default class App extends Component<{}> {
    render() {
        return (
            <RootContainer />
        );
    }
}

AppRegistry.registerComponent('MediZone', () => App);