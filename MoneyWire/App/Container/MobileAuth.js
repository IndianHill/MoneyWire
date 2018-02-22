import React, { Component } from 'react'
import { View, StatusBar, Text, Image, Alert, 
    TouchableOpacity } from 'react-native';
import NavigationRouter from '../Navigation/NavigationRouter';
import firebase from 'react-native-firebase';
import { Actions } from 'react-native-router-flux';
import { TextField } from 'react-native-material-textfield';

// Styles
import styles from './Styles/MobileAuthStyles'
import { Colors, Images } from '../Theme/'

// Mobile Authentication
class MobileAuth extends Component {

    constructor() {
        super();
        this.state = {
            isLoading: true,
            currentUser: null,
            isMobileNumberEntered: false,
            phone: '',
            verificationCode: '',
            confirmationResult: '',
            isOTPSent: false,
        };
    }

    /**
    * When the App component mounts, we listen for any authentication
    * state changes in Firebase.
    * Once subscribed, the 'user' parameter will either be null 
    * (logged out) or an Object (logged in)
    */
    componentDidMount() {
        this.authSubscription = firebase.auth().onAuthStateChanged((user) => {
            console.log('User authentication status: LOGGED_IN')
            this.setState({
                isLoading: false,
                currentUser: user,
            });
            if (user) {
                console.log('User:'+JSON.stringify(user))
                Actions.dashboard()
            }
        });
    }

    /**
     * Don't forget to stop listening for authentication state changes
     * when the component unmounts.
     */
    componentWillUnmount() {
        this.authSubscription();
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

    setPhoneNumber = (phoneNumberText) => {
        let phoneNumber = phoneNumberText.replace(/[^0-9]/g, '')
        this.setState({ phone: phoneNumber })
    }

    setVerificationCode = (text) => {
        this.setState({ verificationCode: text })
    }

    isMobileNumberInputViewVisible = () => {
        if (this.state.isOTPSent) {
            return 'none'
        }
    }

    onGetOTP = () => {
        firebase.auth().signInWithPhoneNumber(this.state.phone)
        .then((confirmResult) => {
            // This means that the SMS has been sent to the user
            // You need to:
            //   1) Save the `confirmResult` object to use later
            console.log('OTP has been sent to '+this.state.phone)
            this.setState({ confirmationResult: confirmResult, isOTPSent: true });
            //   2) Hide the phone number form
            //   3) Show the verification code form
        })
        .catch((error) => {
            const { code, message } = error;
            // For details of error codes, see the docs
            // The message contains the default Firebase string
            // representation of the error
            console.log('Error while sending verification code:'+error.code+'-'+error.message)
        });
    }

    onVerify = () => {
        this.state.confirmationResult.confirm(this.state.verificationCode).then(function (result) {
            // User signed in successfully.
            var user = result.user;
            console.log('User verification successful')
          }).catch(function (error) {
            // User couldn't sign in (bad verification code?)
            console.log('User verification failed:'+error.code+' - '+error.message)
          });
    }

    //--------------------------- render mobile number ---------------------------

    renderNavBar = () => {
        return (
            <View style={styles.navBarStyle}>
                <StatusBar barStyle={'light-content'} />
                <TouchableOpacity onPress={ () => { Actions.pop() }}
                    style={styles.backBtn}>
                    <Image source={Images.back} style={styles.backImg} />
                </TouchableOpacity>
                <Text style={styles.navBarTitle}>PHONE LOGIN</Text>
            </View>
        )
    }

    renderMobileNumberView = () => {
        return (
            <View style={styles.mobileNumberInputView} pointerEvents={ this.isMobileNumberInputViewVisible() }>
                <TextField
                    label='Phone Number'
                    textColor={Colors.grey_dark}
                    labelTextStyle={styles.mobileNumberTextViewStyle}
                    value={this.state.phone}
                    keyboardType='numeric'
                    maxLength={10}
                    onChangeText={ (phoneText) => this.setPhoneNumber(phoneText) }
                />
                <View style={styles.getOTPView}>
                    <TouchableOpacity onPress={ () => { this.onGetOTP() }}
                        style={styles.getOTPBtn}>
                        <Text style={styles.getOTPText}>Get OTP</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }

    renderVerificationCodeForm = () => {
        if (!this.state.isOTPSent) {
            return
        }
        
        return (
            <View style={styles.verificationCodeView}>
                <TextField
                    label='Verification Code'
                    textColor={Colors.grey_dark}
                    labelTextStyle={styles.mobileNumberTextViewStyle}
                    value={this.state.verificationCode}
                    keyboardType='numeric'
                    onChangeText={ (text) => this.setVerificationCode(text) }
                />
                <View style={styles.getOTPView}>
                    <TouchableOpacity onPress={ () => { this.onVerify() }}
                        style={styles.getOTPBtn}>
                        <Text style={styles.getOTPText}>Vetify</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }

    render() {
        return (
            <View style={styles.container}>
                { this.renderNavBar() }
                { this.renderMobileNumberView() }
                { this.renderVerificationCodeForm() }
            </View>
        )
    }

}

export default MobileAuth;