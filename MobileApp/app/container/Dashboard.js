import React, { Component } from 'react'
import { View, StatusBar, Text, Image, Alert, 
    TouchableOpacity } from 'react-native';
import * as firebase from "firebase"

// Styles
import styles from './Styles/DashboardStyles'
import { Colors, Images } from '../theme/'

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

    render () {
        return (
            <View style={styles.container}>
                
            </View>
        )
    }
}

export default Dashboard;