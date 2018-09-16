import React, { Component } from 'react'
import { View, StatusBar, Text, Image, Alert, 
    TouchableOpacity, 
    TouchableHighlight} from 'react-native';
import * as firebase from "firebase"
import { Actions } from 'react-native-router-flux';
import RadioForm, 
    { RadioButton, 
    RadioButtonInput, 
    RadioButtonLabel} from 'react-native-simple-radio-button'

// Styles
import styles from './Styles/UserRoleStyles'
import { Colors, Images } from '../../theme/'

class UserRole extends Component {

    constructor() {
        super();
        this.state = {
            isLoading: false,
            currentUser: {},
            user_roles: [
                { label: 'Business Owner', value: 0 },
                { label: 'Tax Professional', value: 1 },
                { label: 'Sales/Invoicing Executive', value: 2 },
                { label: 'Independent Professional', value: 3 },
            ],
            selectedUserRoleIndex: 0,
            selectedUserRole: '',
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

    renderNextNav = () => {
        return (
            <TouchableOpacity onPress={ () => { Actions.company_setup() }}
                    style={styles.nxtBtnStyle}>
                <Image source={Images.next} style={styles.nxtImg} />
            </TouchableOpacity>
        )
    }

    renderTitleText = () => {
        return (
            <View style={styles.titleTextView}>
                <Text style={styles.titleText}>What is your Role ?</Text>
            </View>
        )
    }

    renderTitleDescp = () => {
        let desp = "To personalize your settings and user experience"
        return (
            <View style={styles.titleDescpTextView}>
                <Text style={styles.titleDescpText}>{desp}</Text>
            </View>
        )
    }

    renderRoleOptions = () => {
        let roles = this.state.user_roles
        return (
            <View style={styles.rolesOptionsView}>
                <RadioForm formHorizontal={false} animation={true} >
                    { roles.map((obj, i) => {
                        var onPress = (value, index) => {
                            this.setState({
                                selectedUserRole: value,
                                selectedUserRoleIndex: index
                            })
                        }
                    return (
                        <RadioButton labelHorizontal={true} key={i} style={styles.radioBtnStyle}>
                        {/*  You can set RadioButtonLabel before RadioButtonInput */}
                            <RadioButtonInput
                                obj={obj}
                                index={i}
                                isSelected={this.state.selectedUserRoleIndex === i}
                                onPress={onPress}
                                buttonInnerColor={Colors.secondary}
                                buttonOuterColor={this.state.selectedUserRoleIndex === i ? Colors.secondary : Colors.white}
                                buttonSize={18}
                                buttonOuterSize={30}
                                buttonStyle={{ marginTop:8 }}
                                buttonWrapStyle={{marginLeft: 8}}
                            />
                            <RadioButtonLabel
                                obj={obj}
                                index={i}
                                labelHorizontal={true}
                                onPress={onPress}
                                labelStyle={[styles.radioBtnLabel, {marginTop:8}]}
                                labelWrapStyle={{marginTop:8}}
                            />
                        </RadioButton>
                    )
                    })}
                </RadioForm>
            </View>
        )
    }

    renderClose = () => {
        return (
            <TouchableOpacity onPress={ () => { Actions.pop() }}
                    style={styles.closeBtnStyle}>
                <Image source={Images.back} style={styles.closeImg} />
            </TouchableOpacity>
        )
    }

    render () {
        return (
            <View style={styles.container}>
                { this.renderClose() }
                { this.renderTitleText() }
                { this.renderTitleDescp() }
                { this.renderRoleOptions() }
                { this.renderNextNav() } 
            </View>
        )
    }
}

export default UserRole;