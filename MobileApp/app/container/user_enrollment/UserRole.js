import React, { Component } from 'react'
import { View, StatusBar, Text, Image, Alert, 
    TouchableOpacity, 
    TouchableHighlight} from 'react-native';
import * as firebase from "firebase"
import { Actions } from 'react-native-router-flux';
import RadioForm, 
    { RadioButton, 
    RadioButtonInput, 
    RadioButtonLabel} from 'react-native-simple-radio-button'

// Styles
import styles from './Styles/UserRoleStyles'
import { Colors, Images } from '../../theme/'

class UserRole extends Component {

    constructor() {
        super();
        this.state = {
            isLoading: false,
            currentUser: {},
        };
    }

    componentDidMount() {
        this.authSubscription = firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({
                    isLoading: false,
                    currentUser: user,
                });
            }
        });
    }

    showLoading = () => {
        this.setState({
            isLoading: true
        })
    }

    hideLoading = () => {
        this.setState({
            isLoading: false
        })
    }

    //--------------------------- Render UI ---------------------------

    renderNextNav = () => {
        return (
            <TouchableOpacity onPress={ () => {  }}
                    style={styles.nxtBtnStyle}>
                <Image source={Images.next} style={styles.nxtImg} />
            </TouchableOpacity>
        )
    }

    renderTitleText = () => {
        return (
            <View style={styles.titleTextView}>
                <Text style={styles.titleText}>What is your Role ?</Text>
            </View>
        )
    }

    renderTitleDescp = () => {
        let desp = "To personalize your settings and user experience"
        return (
            <View style={styles.titleDescpTextView}>
                <Text style={styles.titleDescpText}>{desp}</Text>
            </View>
        )
    }

    renderClose = () => {
        return (
            <TouchableOpacity onPress={ () => { Actions.pop() }}
                    style={styles.closeBtnStyle}>
                <Image source={Images.back} style={styles.closeImg} />
            </TouchableOpacity>
        )
    }

    render () {
        return (
            <View style={styles.container}>
                { this.renderClose() }
                { this.renderTitleText() }
                { this.renderTitleDescp() }
                { this.renderNextNav() } 
            </View>
        )
    }
}

export default UserRole;