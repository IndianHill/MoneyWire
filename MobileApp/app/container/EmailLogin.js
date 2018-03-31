import React, { Component } from 'react'
import { View, StatusBar, Text, Image, Alert, 
    TouchableOpacity, 
    TouchableHighlight} from 'react-native';
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
            repassword: '',
            secureTextEntry: true,
        };
    }

    componentDidMount() {
        this.authSubscription = firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({
                    isLoading: false,
                    currentUser: user,
                });
                console.log('Authenticated User - '+JSON.stringify(user))
                if (user.email) {
                    Actions.user_name()
                }
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

    setEmailId = (text) => {
        this.setState({
            email: text
        })
    }

    setPwd = (text) => {
        this.setState({
            password: text.toLowerCase()
        })
    }

    setRePwd = (text) => {
        this.setState({
            repassword: text.toLowerCase()
        })
    }

    showInvalidEmailPwdAlert = () => {

        Alert.alert(
            'Invalid Email/Password',
            "Please enter valid email/Password. \n\n*Password should be at least 6 characters.",
            [
              {text: 'OK'},
            ],
            { cancelable: false }
        )

    }

    showPasswordMatchErrorAlert = () => {

        Alert.alert(
            'Password match error',
            'Please enter same password',
            [
              {text: 'OK'},
            ],
            { cancelable: false }
        )

    }

    showAuthenticationError = (msg) => {
        Alert.alert(
            'Authentication Error',
            msg,
            [
              {text: 'OK'},
            ],
            { cancelable: false }
        )
    }

    emailLogin = () => {

        let email = this.state.email
        let pwd = this.state.password

        console.log('Email:'+email+" pwd:"+pwd)

        if (!this.isEmailValid(email) || !this.isPwdValid(pwd)) {
            this.showInvalidEmailPwdAlert()
            return
        }

        if(this.state.isNewUser) {

            if (this.state.repassword != pwd) {
                this.showPasswordMatchErrorAlert()
                return
            }

            this.performRegister(email, pwd)
        } else {
            this.performSignIn(email, pwd)
        }

    }

    performSignIn = (email, password) => {
        this.showLoading()
        firebase.auth().signInWithEmailAndPassword(email, password)
        .then((user) => {
            console.log('Successfully log in.')
            this.hideLoading()
        })
        .catch((error) => {
            this.hideLoading()
            const { code, message } = error;
            console.log('Error in login', code, message)
            this.showAuthenticationError(message)
        });
    }

    performRegister = (email, password) => {
        this.showLoading()
        firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((user) => {
            console.log('Successfully register.')
            user.sendEmailVerification().then(function() {
                console.log('Verification email sent')
            }).catch(function(error) {
                console.log('Error in sending verification email', code, message)
            });
            this.hideLoading()
        })
        .catch((error) => {
            this.hideLoading()
            const { code, message } = error;
            console.log('Error in register', code, message)
            this.showAuthenticationError(message)
        });
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

    toggleSecureTextEntry = () => {
        this.setState({
            secureTextEntry: !this.state.secureTextEntry
        })
    }

    isEmailValid = (text) => {
        
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        
        if(reg.test(text) === false)
        {
            return false
        }
        
        return true
    }

    isPwdValid = (text) => {

        if (text.length < 6 || text.length > 20) {
            return false
        }

        return true
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
                    maxLength={20}
                    onChangeText={ (text) => this.setRePwd(text) }
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

    renderPasswordAccessoryView = () => {

        let img = this.state.secureTextEntry ? Images.non_visible_txt : Images.visible_txt;

        return (
            <TouchableOpacity onPress={ () => { this.toggleSecureTextEntry() }}>
                <Image 
                    source={img} 
                    style={styles.visiblityIconImg} />
            </TouchableOpacity>
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
                    maxLength={30}
                    returnKeyType='next'
                    enablesReturnKeyAutomatically={true}
                    onChangeText={ (text) => this.setEmailId(text) }
                />
                <TextField
                    label='Password'
                    textColor={Colors.grey_dark}
                    labelTextStyle={styles.signInTextViewStyle}
                    value={this.state.phone}
                    keyboardType='email-address'
                    secureTextEntry={this.state.secureTextEntry}
                    maxLength={20}
                    onChangeText={ (text) => this.setPwd(text) }
                    returnKeyType='next'
                    enablesReturnKeyAutomatically={true}
                    renderAccessory={ () => this.renderPasswordAccessoryView() }
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