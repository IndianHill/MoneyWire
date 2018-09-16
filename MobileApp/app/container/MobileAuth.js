import React, { Component } from 'react'
import { View, StatusBar, Text, Image, Alert, 
    TouchableOpacity } from 'react-native';
import NavigationRouter from '../navigation/NavigationRouter';
import * as firebase from "firebase";
import { Actions } from 'react-native-router-flux';
import { TextField } from 'react-native-material-textfield';

// Styles
import styles from './Styles/MobileAuthStyles'
import { Colors, Images } from '../theme/'

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
    // componentWillUnmount() {
    //     this.authSubscription();
    // }

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
        let phoneNumber = '+91'+this.state.phone;
        console.log('Phone Number:'+phoneNumber)
        firebase.auth()
        .verifyPhoneNumber(phoneNumber)
        .on('state_changed', (phoneAuthSnapshot) => {
            // How you handle these state events is entirely up to your ui flow and whether
            // you need to support both ios and android. In short: not all of them need to
            // be handled - it's entirely up to you, your ui and supported platforms.

            // E.g you could handle android specific events only here, and let the rest fall back
            // to the optionalErrorCb or optionalCompleteCb functions
            switch (phoneAuthSnapshot.state) {
            // ------------------------
            //  IOS AND ANDROID EVENTS
            // ------------------------
            case firebase.auth.PhoneAuthState.CODE_SENT: // or 'sent'
                console.log('code sent');
                // on ios this is the final phone auth state event you'd receive
                // so you'd then ask for user input of the code and build a credential from it
                break;
            case firebase.auth.PhoneAuthState.ERROR: // or 'error'
                console.log('verification error');
                console.log(phoneAuthSnapshot.error);
                break;

            // ---------------------
            // ANDROID ONLY EVENTS
            // ---------------------
            case firebase.auth.PhoneAuthState.AUTO_VERIFY_TIMEOUT: // or 'timeout'
                console.log('auto verify on android timed out');
                // proceed with your manual code input flow, same as you would do in
                // CODE_SENT if you were on IOS
                break;
            case firebase.auth.PhoneAuthState.AUTO_VERIFIED: // or 'verified'
                // auto verified means the code has also been automatically confirmed as correct/received
                // phoneAuthSnapshot.code will contain the auto verified sms code - no need to ask the user for input.
                console.log('auto verified on android');
                console.log(phoneAuthSnapshot);
                // Example usage if handling here and not in optionalCompleteCb:
                // const { verificationId, code } = phoneAuthSnapshot;
                // const credential = firebase.auth.PhoneAuthProvider.credential(verificationId, code);

                // Do something with your new credential, e.g.:
                // firebase.auth().signInWithCredential(credential);
                // firebase.auth().linkWithCredential(credential);
                // etc ...
                break;
            }
        }, (error) => {
            // optionalErrorCb would be same logic as the ERROR case above,  if you've already handed
            // the ERROR case in the above observer then there's no need to handle it here
            console.log(error);
            // verificationId is attached to error if required
            console.log(error.verificationId);
        }, (phoneAuthSnapshot) => {
            // optionalCompleteCb would be same logic as the AUTO_VERIFIED/CODE_SENT switch cases above
            // depending on the platform. If you've already handled those cases in the observer then
            // there's absolutely no need to handle it here.

            // Platform specific logic:
            // - if this is on IOS then phoneAuthSnapshot.code will always be null
            // - if ANDROID auto verified the sms code then phoneAuthSnapshot.code will contain the verified sms code
            //   and there'd be no need to ask for user input of the code - proceed to credential creating logic
            // - if ANDROID auto verify timed out then phoneAuthSnapshot.code would be null, just like ios, you'd
            //   continue with user input logic.
            console.log(phoneAuthSnapshot);
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
                    prefix='+91'
                    label='Phone Number'
                    textColor={Colors.grey_dark}
                    labelTextStyle={styles.mobileNumberTextViewStyle}
                    value={this.state.phone}
                    keyboardType='numeric'
                    maxLength={10}
                    onChangeText={ (phoneText) => this.setPhoneNumber(phoneText) }
                />
                <TouchableOpacity onPress={ () => { this.onGetOTP() }}
                        style={styles.getOTPBtn}>
                    <Text style={styles.getOTPText}>Get OTP</Text>
                </TouchableOpacity>
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