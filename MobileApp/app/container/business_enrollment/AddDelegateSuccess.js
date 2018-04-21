import React, { Component } from 'react'
import { View, StatusBar, Text, Image, Alert, 
    TouchableOpacity, TouchableHighlight,
    ScrollView, } from 'react-native'
import * as firebase from "firebase"
import { Actions } from 'react-native-router-flux'

// Styles
import styles from './Styles/AddDelegateSuccessStyle'
import { Colors, Images } from '../../theme/'

class AddDelegateSuccess extends Component {

    constructor() {
        super();
        this.state = {
            isLoading: false,
            currentUser: {},
            name: 'Sagar',
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

    renderClose = () => {
        return (
            <TouchableOpacity onPress={ () => { Actions.pop() }}
                    style={styles.closeBtnStyle}>
                <Image source={Images.close} style={styles.closeImg} />
            </TouchableOpacity>
        )
    }

    renderTitleView = () => {
        return (
            <View style={styles.titleView}>
                <View>
                    <Image source={Images.thumbs_up} style={styles.thumbsUpImg} />
                </View>
                <Text style={styles.titleText}>You have successfully added { this.state.name }</Text>
            </View>
        )
    }

    renderAddMoreDelegate = () => {
        return (
            <TouchableOpacity onPress={ () => {  }}
                    style={styles.addMoreDelegateBtn}>
                <Text style={styles.titleTextStyle}>ADD MORE DELEGATES</Text>
            </TouchableOpacity>
        )
    }

    renderGoBackView = () => {
        return (
            <TouchableOpacity onPress={ () => { Actions.pop() }}
                    style={styles.goBackBtn}>
                <Text style={styles.goBackTextStyle}>Go back and complete your profile</Text>
            </TouchableOpacity>
        )
    }

    renderBottomView = () => {
        return (
            <View style={styles.bottomView}>
                { this.renderAddMoreDelegate() }
                { this.renderGoBackView() }
            </View>
        )
    }

    render () {
        return (
            <View style={styles.container}>
                { this.renderClose() }
                { this.renderTitleView() }
                { this.renderBottomView() }
            </View>
        )
    }
}

export default AddDelegateSuccess;