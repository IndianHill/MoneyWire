import React, { Component } from 'react'
import { BackAndroid, Alert } from 'react-native'
import { Scene, Router, Stack } from 'react-native-router-flux'

// Scene
import Login from '../container/Login'
import Dashboard from '../container/Dashboard'
import MobileAuth from '../container/MobileAuth'
import EmailLogin from '../container/EmailLogin'
import Welcome from '../container/user_enrollment/Welcome'
import UserName from '../container/user_enrollment/UserName'
import UserRole from '../container/user_enrollment/UserRole'
import CompanySetup from '../container/business_enrollment/CompanySetup'
import AddDelegate from '../container/business_enrollment/AddDelegate'

class NavigationRouter extends Component {

    componentDidMount(){
        console.log('router loaded...')
    }

    render () {
        return (
            <Router>
                <Stack key="root" >
                    <Scene key="login" component={Login} title="Login" hideNavBar />
                    <Scene key="dashboard" component={Dashboard} title="Dashboard" hideNavBar />
                    <Scene key="mobile_auth" component={MobileAuth} title="MobileAuth" hideNavBar />
                    <Scene key="email_login" component={EmailLogin} title="EmailLogin" hideNavBar />
                    <Scene key="welcome" component={Welcome} title="Welcome" hideNavBar />
                    <Scene key="user_name" component={UserName} title="UserName" hideNavBar />
                    <Scene key="user_role" component={UserRole} title="UserRole" hideNavBar />
                    <Scene initial key="company_setup" component={CompanySetup} title="CompanySetup" hideNavBar />
                    <Scene key="add_delegate" component={AddDelegate} title="AddDelegate" hideNavBar />
                </Stack>
            </Router>
        )
    }
}

export default NavigationRouter;