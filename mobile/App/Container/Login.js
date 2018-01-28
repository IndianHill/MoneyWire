import React, { Component } from 'react'
import { View, StatusBar, Text, Image, Alert, 
    TouchableOpacity } from 'react-native';
import NavigationRouter from '../Navigation/NavigationRouter';
import * as firebase from 'firebase';
import { GoogleSignin } from 'react-native-google-signin';
import LoadingView from '../Component/LoadingView';

// Styles
import styles from './Styles/LoginStyles'
import { Colors, Images } from '../Theme/'

// Components
class Login extends Component {

    constructor() {
        super();
        this.state = {
            isLoading: true,
            currentUser: {},
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
                loading: false,
                currentUser: user,
            });
        });
    }

    /**
     * Don't forget to stop listening for authentication state changes
     * when the component unmounts.
     */
    componentWillUnmount() {
        this.authSubscription();
    }

    //--------------------------- FB Login press ---------------------------
    fbLogin = () => {
        console.log('FBLogin');
    }

    //--------------------------- Google Login Press ---------------------------
    googleLogin = () => {
        console.log('GoogleLogin');
        this.checkAndConfigureSignIn();
    }

    checkAndConfigureSignIn = () => {
        GoogleSignin.hasPlayServices({ autoResolve: true }).then(() => {
            GoogleSignin.configure({
                scopes: ["https://www.googleapis.com/auth/userinfo.email", "https://www.googleapis.com/auth/userinfo.profile"], // what API you want to access on behalf of the user, default is email and profile
                iosClientId: "",
                webClientId: ""
            }).then(() => {
                this.signInGoogle();
            })
        })
        .catch((err) => {
            console.log("Play services error", err.code, err.message);
        })
    }

    signInGoogle = () => {
        GoogleSignin.signIn()
        .then((data) => {
            console.log('Getting google credentials..')
            // create a new firebase credential with the token
            const credential = firebase.auth.GoogleAuthProvider.credential(data.idToken, data.accessToken)

            console.log('Google logging in with credentials..')
            // login with credential
            return firebase.auth().signInWithCredential(credential)
        })
        .then((currentUser) => {
            console.log('Google login successful..')
            console.info(JSON.stringify(currentUser.toJSON()))
        })
        .catch((error) => {
            console.error(`Google login fail with error: ${error}`)
        })
    }

    //--------------------------- Twitter Login Press ---------------------------
    twitterLogin = () => {
        console.log('TwitterLogin');
    }

    //--------------------------- Mobile Login Press ---------------------------
    mobileLogin = () => {
        console.log('MobileLogin');
    }

    //--------------------------- Render UI ---------------------------

    renderBottomView = () => {
        return (
            <View style={styles.bottomView}>
                <TouchableOpacity onPress={()=> { this.fbLogin() }} style={styles.loginIconImgView}>
                    <Image source={Images.fb_login} style={styles.loginIconImg} />
                </TouchableOpacity>
                <TouchableOpacity onPress={()=> { this.googleLogin() }} style={styles.loginIconImgView}>
                    <Image source={Images.google_login} style={styles.loginIconImg} />
                </TouchableOpacity>
                <TouchableOpacity onPress={()=> { this.twitterLogin() }} style={styles.loginIconImgView}>
                    <Image source={Images.twitter_login} style={styles.loginIconImg} />
                </TouchableOpacity>
                <TouchableOpacity onPress={()=> { this.mobileLogin() }} style={styles.loginIconImgView}>
                    <Image source={Images.mobile_login} style={styles.mobileLoginIconImg} />
                </TouchableOpacity>
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
                <Text style={styles.logoTitle}>MONEYWIRE</Text>
                { this.renderLoadingView() }
                { this.renderBottomView() }
            </View>
        )
    }
}

export default Login;
