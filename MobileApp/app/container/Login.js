import React, { Component } from 'react'
import { View, StatusBar, Text, Image, Alert, 
    TouchableOpacity } from 'react-native';
import NavigationRouter from '../navigation/NavigationRouter';
import * as firebase from "firebase";
import LoadingView from '../component/LoadingView';
import { Actions } from 'react-native-router-flux';
import { GoogleSignin } from 'react-native-google-signin';

// Styles
import styles from './Styles/LoginStyles'
import { Colors, Images } from '../theme/'

// Components
class Login extends Component {

    constructor() {
        super();
        this.state = {
            isLoading: false,
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

    //--------------------------- Google Sign In ---------------------------

    setupGoogleSignin = () => {

        GoogleSignin.hasPlayServices({ autoResolve: true }).then(() => {
            GoogleSignin.configure({
                scopes: ["https://www.googleapis.com/auth/userinfo.email", "https://www.googleapis.com/auth/userinfo.profile"],
                iosClientId: "84141118544-9b09c2off0bsi7fooreubm1q5lea433p.apps.googleusercontent.com",
                offlineAccess: false
            }).then(()=>{
                this.onGoogleSignIn()
            }).catch((err) => {
                console.log("Error in sign-in", err.code, err.message);
            });
        })
        .catch((err) => {
            console.log("Play services error", err.code, err.message);
        });
      }

    onGoogleSignIn = () => {
        this.showLoading()
        GoogleSignin.signIn()
        .then((data) => {
            console.log('Data:', data);
            
            // Create a new Firebase credential with the token
            const credential = firebase.auth.GoogleAuthProvider.credential(data.idToken, data.accessToken);
            return firebase.auth().signInWithCredential(credential);
        })
        .then((user) => {
            // If you need to do anything with the user, do it here
            // The user will be logged in automatically by the
            // `onAuthStateChanged` listener we set up in App.js earlier
            this.hideLoading()
        })
        .catch((error) => {
            const { code, message } = error;
            // For details of error codes, see the docs
            // The message contains the default Firebase string
            // representation of the error
            console.log('Error on sign on:', code, message);
            this.hideLoading()
        });
    }

    //--------------------------- Render UI ---------------------------

    renderBottomView = () => {
        return (
            <View style={styles.bottomView}>
                <Text style={styles.loginTextStyle}>Sign in here</Text>
                <View style={styles.loginItemsView}>
                    <TouchableOpacity onPress={()=> { this.setupGoogleSignin() }} style={styles.loginIconImgView}>
                        <Image source={Images.google_login} style={styles.loginIconImg} />
                    </TouchableOpacity>
                    <View style={styles.verticalSeperatorStyle} />
                    <TouchableOpacity onPress={()=> { Actions.email_login() }} style={styles.loginIconImgView}>
                        <Image source={Images.login} style={styles.loginIconImg} />
                    </TouchableOpacity>
                </View>
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
            </View>
        )
    }
}

export default Login;
