import React, { Component } from 'react'
import { View, StatusBar, Text, Image, Alert, 
    TouchableOpacity } from 'react-native';
import * as firebase from "firebase"
import RadioForm, 
    { RadioButton, 
    RadioButtonInput, 
    RadioButtonLabel} from 'react-native-simple-radio-button'
import { TextField } from 'react-native-material-textfield'
import { Actions } from 'react-native-router-flux'

// Styles
import styles from './Styles/UserNameStyles'
import { Colors, Images } from '../../theme/'

class UserName extends Component {

    constructor() {
        super();
        this.state = {
            isLoading: false,
            currentUser: {},
            title: 0,
            title_types: [
                {label: 'Mr', value: 0 },
                {label: 'Mrs', value: 1 },
                {label: 'Dr', value: 2 },
                {label: 'Miss', value: 3 },
            ],
            selectedTitleIndex: 0,
            selectedTitle: '',
            fullName:'',
        };
    }

    componentDidMount() {
        user = firebase.auth().currentUser;
        if(user) {
            this.setState({
                currentUser: user
            })
        }
    }

    setUserFullName = (text) => {
        this.setState({
            fullName: text
        })
    }

    //--------------------------- Render UI ---------------------------

    renderTitleText = () => {
        return (
            <View style={styles.titleTextView}>
                <Text style={styles.titleText}>How should we address you?</Text>
            </View>
        )
    }

    renderRadioForm = () => {
        let titles = this.state.title_types
        return (
            <View style={styles.radioButtonsView}>
                <RadioForm formHorizontal={true} animation={true} >
                    { titles.map((obj, i) => {
                        var onPress = (value, index) => {
                            this.setState({
                                selectedTitle: value,
                                selectedTitleIndex: index
                            })
                        }
                    return (
                        <RadioButton labelHorizontal={true} key={i} >
                        {/*  You can set RadioButtonLabel before RadioButtonInput */}
                        <RadioButtonInput
                            obj={obj}
                            index={i}
                            isSelected={this.state.selectedTitleIndex === i}
                            onPress={onPress}
                            buttonInnerColor={Colors.secondary}
                            buttonOuterColor={this.state.selectedTitleIndex === i ? Colors.secondary : Colors.white}
                            buttonSize={18}
                            buttonOuterSize={30}
                            buttonStyle={{}}
                            buttonWrapStyle={{marginLeft: 8}}
                        />
                        <RadioButtonLabel
                            obj={obj}
                            index={i}
                            labelHorizontal={true}
                            onPress={onPress}
                            labelStyle={styles.radioBtnLabel}
                            labelWrapStyle={{marginTop:8}}
                        />
                        </RadioButton>
                    )
                    })}
                </RadioForm>
            </View>
        )
    }

    renderUserNameView = () => {
        return (
            <View style={styles.usernameView}>
                <TextField
                    label='Enter Full Name'
                    tintColor={Colors.white}
                    textColor={Colors.white}
                    baseColor={Colors.white}
                    labelFontSize={18}
                    labelTextStyle={styles.fullNameTextViewStyle}
                    value={this.state.fullName}
                    fontSize={20}
                    titleTextStyle={styles.fullNameTitle}
                    keyboardType='email-address'
                    maxLength={60}
                    onChangeText={ (text) => this.setUserFullName(text) }
                />
            </View>
        )
    }

    renderNextNav = () => {
        return (
            <TouchableOpacity onPress={ () => {  }}
                    style={styles.nxtBtnStyle}>
                <Image source={Images.next} style={styles.nxtImg} />
            </TouchableOpacity>
        )
    }

    render () {
        return (
            <View style={styles.container}>
                { this.renderTitleText() }
                { this.renderRadioForm() }
                { this.renderUserNameView() }
                { this.renderNextNav() } 
            </View>
        )
    }
}

export default UserName;