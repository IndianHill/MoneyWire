import React, { Component } from 'react'
import { View, StatusBar, Text, Image, Alert, 
    TouchableOpacity } from 'react-native';
import * as firebase from 'firebase';

// Styles
import styles from './Styles/DashboardStyles'

class Dashboard extends Component {

    constructor() {
        super();
        this.state = {
            isLoading: false,
            currentUser: {},
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

    //--------------------------- Render UI ---------------------------

    renderWelcomeMsg = () => {

        if (this.state.currentUser) {
            return (
                <View style={styles.welcomeNoteView}>
                    <Text style={styles.welcomeNoteText}>Welcome {this.state.currentUser.displayName}</Text>
                </View>
            )
        }

    }

    renderLogOutView = () => {
        return (
            <View style={styles.logoutViewStyle}>
            </View>
        )
    }

    render () {
        return (
            <View style={styles.container}>
                <StatusBar barStyle={'light-content'} />
                { this.renderWelcomeMsg() }
            </View>
        )
    }
}

export default Dashboard;