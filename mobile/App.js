/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import RootContainer from './App/Container/RootContainer'
import { AppRegistry } from 'react-native'

export default class App extends Component<{}> {
    render() {
        return (
            <RootContainer />
        );
    }
}

AppRegistry.registerComponent('Moneywire', () => App);