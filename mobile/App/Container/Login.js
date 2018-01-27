import React, { Component } from 'react'
import { View, StatusBar, Text, Image, Alert } from 'react-native'
import NavigationRouter from '../Navigation/NavigationRouter'

// Styles
import styles from './Styles/LoginStyles'

// Components
class Login extends Component {

    render() {
        return (
            <View style={styles.container}>
                <Text>Login</Text>
            </View>
        )
    }
}

export default Login;
