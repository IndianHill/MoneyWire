import React, { Component } from 'react'
import { View, StatusBar, Text, Image, Alert, TouchableOpacity } from 'react-native'
import NavigationRouter from '../Navigation/NavigationRouter'

// Styles
import styles from './Styles/LoginStyles'
import { Colors, Images } from '../Theme/'

// Components
class Login extends Component {

    // FB Login press
    fbLogin = () => {
        console.log('FBLogin');
    }

    // Google Login Press
    googleLogin = () => {
        console.log('GoogleLogin');
    }

    // Twitter Login Press
    twitterLogin = () => {
        console.log('TwitterLogin');
    }

    // Mobile Login Press
    mobileLogin = () => {
        console.log('MobileLogin');
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.logoTitle}>MONEYWIRE</Text>
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
            </View>
        )
    }
}

export default Login;
