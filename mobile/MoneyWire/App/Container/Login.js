import React, { Component } from 'react'
import { View, StatusBar, Text, Image, Alert, 
    TouchableOpacity } from 'react-native';
import NavigationRouter from '../Navigation/NavigationRouter';
import firebase from 'react-native-firebase';
// import { GoogleSignin } from 'react-native-google-signin';
import LoadingView from '../Component/LoadingView';
import { Actions } from 'react-native-router-flux'

// Styles
import styles from './Styles/LoginStyles'
import { Colors, Images } from '../Theme/'

// Components
class Login extends Component {

    constructor() {
        super();
        this.state = {
            isLoading: true,
            currentUser: null,
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
            this.setState({
                isLoading: false,
                currentUser: user,
            });
            if (user) {
                console.log('Authenticated User - '+JSON.stringify(user))
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

    //--------------------------- Render UI ---------------------------

    renderBottomView = () => {
        return (
            <View style={styles.bottomView}>
                <TouchableOpacity onPress={()=> { Actions.mobile_auth() }} style={styles.loginIconImgView}>
                    <Image source={Images.login} style={styles.emailLoginIconImg} />
                </TouchableOpacity>
            </View>
        )
    }

    renderPrivacyPolicyBtn = () => {
        return (
            <TouchableOpacity onPress={()=> {  }} style={styles.privacyPolicyBtnView}>
                <Text style={styles.privacyPolicyBtnText}>Privacy Policy</Text>
            </TouchableOpacity>
        )
    }

    renderTitleView = () => {
        return (
            <View style={styles.titleViewStyle}>
                <Text style={styles.logoTitle}>MONEYWIRE</Text>
                <Text style={styles.description}>BILLING, INVOICING & TAX RETURNS</Text>
                <Text style={styles.centerDescription}>GST Complaint Cloud Solution</Text>
            </View>
        )
    }

    renderLoadingView = () => {
        if (this.state.isLoading) {
            return (
                <LoadingView />
            )
        }
    }

    render() {
        return (
            <View style={styles.container}>
                { this.renderTitleView() }
                { this.renderLoadingView() }
                { this.renderBottomView() }
                { this.renderPrivacyPolicyBtn() }
            </View>
        )
    }
}

export default Login;
