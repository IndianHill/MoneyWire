import React, { Component } from 'react'
import { View, StatusBar, Text, Image, Alert, 
    TouchableOpacity } from 'react-native';
import * as firebase from "firebase"
import { Actions } from 'react-native-router-flux';
import { TextField } from 'react-native-material-textfield';

// Styles
import styles from './Styles/EmailLoginStyles'
import { Colors, Images } from '../theme/'

class EmailLogin extends Component {

    constructor() {
        super();
        this.state = {
            isLoading: false,
            currentUser: {},
        };
    }

    componentDidMount() {
        user = firebase.auth().currentUser;
        if(user) {
            this.setState({
                currentUser: user
            })
        }
    }

    //--------------------------- Render UI ---------------------------

    renderNavBar = () => {
        return (
            <View style={styles.navBarStyle}>
                <StatusBar barStyle={'light-content'} />
                <TouchableOpacity onPress={ () => { Actions.pop() }}
                    style={styles.backBtn}>
                    <Image source={Images.back} style={styles.backImg} />
                </TouchableOpacity>
                <Text style={styles.navBarTitle}>EMAIL LOGIN</Text>
            </View>
        )
    }

    render () {
        return (
            <View style={styles.container}>
                { this.renderNavBar() }
            </View>
        )
    }
}

export default EmailLogin;