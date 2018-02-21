import React, { Component } from 'react'
import { BackAndroid, Alert } from 'react-native'
import { Scene, Router, Stack } from 'react-native-router-flux'

// Scene
import Login from '../Container/Login'
import Dashboard from '../Container/Dashboard'
import MobileAuth from '../Container/MobileAuth'

class NavigationRouter extends Component {

    componentDidMount(){
        console.log('router loaded...')
    }

    render () {
        return (
            <Router>
                <Stack key="root" >
                    <Scene initial key="login" component={Login} title="Login" hideNavBar />
                    <Scene key="dashboard" component={Dashboard} title="Login" hideNavBar />
                    <Scene key="mobile_auth" component={MobileAuth} title="MobileAuth" hideNavBar />
                </Stack>
            </Router>
        )
    }
}

export default NavigationRouter;