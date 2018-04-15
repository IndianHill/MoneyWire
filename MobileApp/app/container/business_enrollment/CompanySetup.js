import React, { Component } from 'react'
import { View, StatusBar, Text, Image, Alert, 
    TouchableOpacity, TouchableHighlight,
    ScrollView, } from 'react-native'
import * as firebase from "firebase"
import { Actions } from 'react-native-router-flux'
import { Dropdown } from 'react-native-material-dropdown'
import { TextField } from 'react-native-material-textfield'

// Styles
import styles from './Styles/CompanySetupStyles'
import { Colors, Images } from '../../theme/'

class CompanySetup extends Component {

    constructor() {
        super();
        this.state = {
            isLoading: false,
            currentUser: {},
            industry_error:null,
            industry_types:[{
                value:'Design'
            },{
                value:'Technology'
            },{
                value:'Marketing'
            }],
            businessName:'',
            businessEmail:'',
            businessPhone:'',
            primaryPOCName:'',
            pocEmail:'',
            pocNumber:'',
            gstNumber:'',
            address:'',
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
                <Image source={Images.back} style={styles.closeImg} />
            </TouchableOpacity>
        )
    }

    renderTitleView = () => {
        let descpStr = "To setup account, your business profile and manage customer accounts (B2B, B2C), provision company data access"
        return (
            <View style={styles.titleView}>
                <Text style={styles.titleText}>How is your business (company) setup</Text>
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

    renderIndustryDropdown = () => {
        return (
            <View style={styles.formFieldView}>
                <Dropdown
                    label='Industry'
                    data={this.state.industry_types}
                    baseColor={Colors.white}
                    textColor={Colors.white}
                    selectedItemColor={Colors.secondary}
                    fontSize={18}
                    labelFontSize={16}
                    itemTextStyle={styles.dropdownItemTextStyle}
                    style={styles.formFieldText}
                    error={this.state.industry_error}
                />
            </View>
        )
    }

    renderBusinessName = () => {
        return (
            <View style={styles.formFieldView}>
                <TextField
                    label='Business Name'
                    tintColor={Colors.white}
                    textColor={Colors.white}
                    baseColor={Colors.white}
                    labelFontSize={16}
                    labelTextStyle={styles.fieldLabelStyle}
                    value={this.state.businessName}
                    fontSize={18}
                    titleTextStyle={styles.fieldTextStyle}
                    keyboardType='email-address'
                    maxLength={60}
                    onChangeText={ (text) => this.setState({businessName: text}) }
                    style={styles.formFieldText}
                />
            </View>
        )
    }

    renderBusinessEmail = () => {
        return (
            <View style={styles.formFieldView}>
                <TextField
                    label='Business Email address'
                    tintColor={Colors.white}
                    textColor={Colors.white}
                    baseColor={Colors.white}
                    labelFontSize={16}
                    labelTextStyle={styles.fieldLabelStyle}
                    value={this.state.businessEmail}
                    fontSize={18}
                    titleTextStyle={styles.fieldTextStyle}
                    keyboardType='email-address'
                    maxLength={60}
                    onChangeText={ (text) => this.setState({businessEmail: text}) }
                    style={styles.formFieldText}
                />
            </View>
        )
    }

    renderBusinessPhone = () => {
        return (
            <View style={styles.formFieldView}>
                <TextField
                    label='Business Phone'
                    tintColor={Colors.white}
                    textColor={Colors.white}
                    baseColor={Colors.white}
                    labelFontSize={16}
                    labelTextStyle={styles.fieldLabelStyle}
                    value={this.state.businessPhone}
                    fontSize={18}
                    titleTextStyle={styles.fieldTextStyle}
                    keyboardType='phone-pad'
                    maxLength={13}
                    onChangeText={ (text) => this.setState({businessPhone: text}) }
                    style={styles.formFieldText}
                />
            </View>
        )
    }

    renderPrimaryPOCName = () => {
        return (
            <View style={styles.formFieldView}>
                <TextField
                    label='Primary POC Name'
                    tintColor={Colors.white}
                    textColor={Colors.white}
                    baseColor={Colors.white}
                    labelFontSize={16}
                    labelTextStyle={styles.fieldLabelStyle}
                    value={this.state.primaryPOCName}
                    fontSize={18}
                    titleTextStyle={styles.fieldTextStyle}
                    keyboardType='email-address'
                    maxLength={60}
                    onChangeText={ (text) => this.setState({primaryPOCName: text}) }
                    style={styles.formFieldText}
                />
            </View>
        )
    }

    renderPOCNumber = () => {
        return (
            <View style={styles.formFieldView}>
                <TextField
                    label='POC Number'
                    tintColor={Colors.white}
                    textColor={Colors.white}
                    baseColor={Colors.white}
                    labelFontSize={16}
                    labelTextStyle={styles.fieldLabelStyle}
                    value={this.state.pocNumber}
                    fontSize={18}
                    titleTextStyle={styles.fieldTextStyle}
                    keyboardType='phone-pad'
                    maxLength={13}
                    onChangeText={ (text) => this.setState({pocNumber: text}) }
                    style={styles.formFieldText}
                />
            </View>
        )
    }

    renderGSTNumber = () => {
        return (
            <View style={styles.formFieldView}>
                <TextField
                    label='GSTIN'
                    tintColor={Colors.white}
                    textColor={Colors.white}
                    baseColor={Colors.white}
                    labelFontSize={16}
                    labelTextStyle={styles.fieldLabelStyle}
                    value={this.state.gstNumber}
                    fontSize={18}
                    titleTextStyle={styles.fieldTextStyle}
                    keyboardType='email-address'
                    maxLength={60}
                    onChangeText={ (text) => this.setState({gstNumber: text}) }
                    style={styles.formFieldText}
                />
            </View>
        )
    }

    renderAddress = () => {
        return (
            <View style={styles.formFieldView}>
                <TextField
                    label='Address'
                    tintColor={Colors.white}
                    textColor={Colors.white}
                    baseColor={Colors.white}
                    labelFontSize={16}
                    labelTextStyle={styles.fieldLabelStyle}
                    value={this.state.address}
                    fontSize={18}
                    titleTextStyle={styles.fieldTextStyle}
                    keyboardType='email-address'
                    maxLength={120}
                    onChangeText={ (text) => this.setState({address: text}) }
                    style={styles.formFieldText}
                />
            </View>
        )
    }

    renderBottomView = () => {
        return (
            <View style={styles.bottomView}>
                <View>
                    <TouchableOpacity onPress={ () => {  }}
                            style={styles.addDelegateView}>
                        <Text style={styles.addDelegateText}>Add Delegates</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity onPress={ () => {  }}
                        style={styles.nxtBtnStyle}>
                        <Image source={Images.next} style={styles.nxtImg} />
                    </TouchableOpacity>
                </View>
            </View>
        )
    }

    renderTitleTopView = () => {
        return (
            <View>
                { this.renderTitleView() }
                { this.renderTitleDescpView() }
            </View>
        )
    }

    renderFormUI = () => {
        return (
            <View>
                { this.renderIndustryDropdown() }
                { this.renderBusinessName() }
                { this.renderBusinessEmail() }
                { this.renderBusinessPhone() } 
                { this.renderPrimaryPOCName() }
                { this.renderPOCNumber() }
                { this.renderGSTNumber() }
                { this.renderAddress() }
            </View>
        )
    }

    render () {
        return (
            <ScrollView style={styles.container}>
                { this.renderClose() }
                { this.renderTitleTopView() }
                { this.renderFormUI() }
                { this.renderBottomView() }
            </ScrollView>
        )
    }
}

export default CompanySetup;