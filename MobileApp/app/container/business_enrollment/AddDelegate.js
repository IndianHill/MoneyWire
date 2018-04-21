import React, { Component } from 'react'
import { View, StatusBar, Text, Image, Alert, 
    TouchableOpacity, TouchableHighlight,
    ScrollView, } from 'react-native'
import * as firebase from "firebase"
import { Actions } from 'react-native-router-flux'
import { TextField } from 'react-native-material-textfield'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

// Styles
import styles from './Styles/AddDelegateStyle'
import { Colors, Images } from '../../theme/'

class AddDelegate extends Component {

    constructor() {
        super();
        this.state = {
            isLoading: false,
            currentUser: {},
            email: '',
            name: '',
            role: '',
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
                <Text style={styles.titleText}>Add Delegate</Text>
            </View>
        )
    }

    renderTitleDescpView = () => {
        let descpStr = "To setup account, your business profile and manage customer accounts (B2B, B2C), provision company data access"
        return (
            <View style={styles.titleDescpView}>
                <Text style={styles.descpText}>{descpStr}</Text>
            </View>
        )
    }

    renderEmail = () => {
        return (
            <View style={styles.formFieldView}>
                <TextField
                    label='Email'
                    tintColor={Colors.white}
                    textColor={Colors.white}
                    baseColor={Colors.white}
                    labelFontSize={16}
                    labelTextStyle={styles.fieldLabelStyle}
                    value={this.state.email}
                    fontSize={18}
                    titleTextStyle={styles.fieldTextStyle}
                    keyboardType='email-address'
                    maxLength={60}
                    onChangeText={ (text) => this.setState({email: text}) }
                    style={styles.formFieldText}
                />
            </View>
        )
    }

    renderName = () => {
        return (
            <View style={styles.formFieldView}>
                <TextField
                    label='Name'
                    tintColor={Colors.white}
                    textColor={Colors.white}
                    baseColor={Colors.white}
                    labelFontSize={16}
                    labelTextStyle={styles.fieldLabelStyle}
                    value={this.state.name}
                    fontSize={18}
                    titleTextStyle={styles.fieldTextStyle}
                    keyboardType='email-address'
                    maxLength={60}
                    onChangeText={ (text) => this.setState({name: text}) }
                    style={styles.formFieldText}
                />
            </View>
        )
    }

    renderRole = () => {
        return (
            <View style={styles.formFieldView}>
                <TextField
                    label='Role'
                    tintColor={Colors.white}
                    textColor={Colors.white}
                    baseColor={Colors.white}
                    labelFontSize={16}
                    labelTextStyle={styles.fieldLabelStyle}
                    value={this.state.role}
                    fontSize={18}
                    titleTextStyle={styles.fieldTextStyle}
                    keyboardType='email-address'
                    maxLength={60}
                    onChangeText={ (text) => this.setState({role: text}) }
                    style={styles.formFieldText}
                />
            </View>
        )
    }

    renderAddNav = () => {
        return (
            <TouchableOpacity onPress={ () => { Actions.add_delegate_success() }}
                style={styles.addBtnStyle}>
                <Image source={Images.add} style={styles.addImg} />
            </TouchableOpacity>
        )
    }

    renderTitleTopView = () => {
        return (
            <View>
                { this.renderTitleView() }
            </View>
        )
    }

    renderFormUI = () => {
        return (
            <View>
                { this.renderEmail() }
                { this.renderName() }
                { this.renderRole() } 
            </View>
        )
    }

    render () {
        return (
            <View style={styles.container}>
                { this.renderClose() }
                <KeyboardAwareScrollView>
                    { this.renderTitleTopView() }
                    { this.renderFormUI() }
                </KeyboardAwareScrollView>
                { this.renderAddNav() }
            </View>
        )
    }
}

export default AddDelegate;