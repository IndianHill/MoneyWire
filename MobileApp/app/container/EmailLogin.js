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
            isNewUser: false,
            email: '',
            password: '',
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

    setEmailId = (text) => {
        this.setState({
            email: text
        })
    }

    setPwd = (text) => {
        this.setState({
            password: text
        })
    }

    emailLogin = () => {

        let email = this.state.email
        let pwd = this.state.password

        console.log('Email:'+email+" pwd:"+pwd)

        // TODO: Verify Email-id and password strength


    }

    getSignTitleText = () => {
        if(this.state.isNewUser) {
            return "Register with your email address"
        } else {
            return "Login with your email address"
        }
    }

    getSignInText = () => {
        if(this.state.isNewUser) {
            return "Register"
        } else {
            return "Sign In"
        }
    }

    getToggleMsg = () => {
        if(this.state.isNewUser) {
            return "Already registered? "
        } else {
            return "Don't have an account? "
        }
    }

    getToggleBtnText = () => {
        if(this.state.isNewUser) {
            return "Login"
        } else {
            return "Register"
        }
    }

    toggleNewUser = () => {

        this.setState({
            isNewUser: !this.state.isNewUser
        })
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

    getRetypePwdTextView = () => {
        if (this.state.isNewUser) {
            return (
                <TextField
                    label='Retype Password'
                    textColor={Colors.grey_dark}
                    labelTextStyle={styles.signInTextViewStyle}
                    value={this.state.phone}
                    keyboardType='email-address'
                    secureTextEntry
                    maxLength={10}
                    onChangeText={ (text) => this.setPwd(text) }
                />
            )
        }
    }

    renderLoginMsg = () => {
        return (
            <View style={styles.loginMsgViewStyle}>
                <Text style={styles.loginMsgText}>{ this.getSignTitleText() }</Text>
            </View>
        )
    }

    renderSignInView = () => {
        return (
            <View style={styles.signInViewStyle}>
                <TextField
                    label='Email'
                    textColor={Colors.grey_dark}
                    labelTextStyle={styles.signInTextViewStyle}
                    value={this.state.phone}
                    keyboardType='email-address'
                    maxLength={10}
                    onChangeText={ (text) => this.setEmailId(text) }
                />
                <TextField
                    label='Password'
                    textColor={Colors.grey_dark}
                    labelTextStyle={styles.signInTextViewStyle}
                    value={this.state.phone}
                    keyboardType='email-address'
                    secureTextEntry
                    maxLength={10}
                    onChangeText={ (text) => this.setPwd(text) }
                />
                { this.getRetypePwdTextView() }
                <TouchableOpacity onPress={ () => { this.emailLogin() }}
                        style={styles.signInBtnStyle}>
                    <Text style={styles.signInBtnTextStyle}>{ this.getSignInText() }</Text>
                </TouchableOpacity>
            </View>
        )
    }

    renderBottomView = () => {
        return (
            <View style={styles.bottomViewStyle}>
                <Text style={styles.bottomMsgTextStyle}>{ this.getToggleMsg() }</Text>
                <TouchableOpacity onPress={ () => { this.toggleNewUser() }}>
                    <Text textDecorationLine='underline' style={styles.toggleTextStyle}>{ this.getToggleBtnText() }</Text>
                </TouchableOpacity>
            </View>
        )
    }

    render () {
        return (
            <View style={styles.container}>
                { this.renderNavBar() }
                { this.renderLoginMsg() }
                { this.renderSignInView() }
                { this.renderBottomView() }
            </View>
        )
    }
}

export default EmailLogin;