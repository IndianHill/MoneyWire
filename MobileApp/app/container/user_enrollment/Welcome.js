import React, { Component } from 'react'
import { View, StatusBar, Text, Image, Alert, 
    TouchableOpacity } from 'react-native';
import * as firebase from "firebase"
import { Actions } from 'react-native-router-flux'

// Styles
import styles from './Styles/WelcomeStyles'
import { Colors, Images } from '../../theme/'

class Welcome extends Component {

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

    renderNextNav = () => {
        return (
            <TouchableOpacity onPress={ () => { Actions.user_name() }}
                    style={styles.nxtBtnStyle}>
                <Image source={Images.next} style={styles.nxtImg} />
            </TouchableOpacity>
        )
    }

    renderBg = () => {
        return (
            <View style={styles.bgView}>
                <Image source={Images.bg} style={styles.bgImage} />
            </View>
        )
    }

    renderMsgTitle = () => {
        return (
            <View style={styles.titleView}>
                <Text style={styles.titleText}>Setup your account in 2 mins.</Text>
            </View>
        )
    }

    render () {
        return (
            <View style={styles.container}>
                { this.renderBg() }
                { this.renderMsgTitle() }
                { this.renderNextNav() } 
            </View>
        )
    }
}

export default Welcome;