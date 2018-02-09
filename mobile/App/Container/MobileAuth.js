import React, { Component } from 'react'
import { View, StatusBar, Text, Image, Alert, 
    TouchableOpacity } from 'react-native';
import NavigationRouter from '../Navigation/NavigationRouter';
import * as firebase from 'firebase';
import { Actions } from 'react-native-router-flux'

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

    //--------------------------- render mobile number ---------------------------
    renderMobileNumberView = () => {
        return (
            <View style={styles.mobileNumberInputView}>
                <Text style={styles.mobileNumberTextViewStyle}>Enter your mobile number</Text>

            </View>
        )
    }

    renderCancelView = () => {
        return (
            <View style={styles.cancelView}>
                <TouchableOpacity onPress={()=> {  Actions.pop() }} style={styles.cancelButtonViewStyle}>
                    <Text style={styles.cancelTextStyle}>Cancel</Text>
                </TouchableOpacity>
            </View>
        )
    }

    render() {
        return (
            <View style={styles.container}>
                { this.renderMobileNumberView() }
                { this.renderCancelView() }
            </View>
        )
    }

}

export default MobileAuth;