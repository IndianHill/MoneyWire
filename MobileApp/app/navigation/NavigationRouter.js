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
import AddDelegateSuccess from '../container/business_enrollment/AddDelegateSuccess'
import AddClient from '../container/business_enrollment/AddClient'
import BusinessService from '../container/business_enrollment/BusinessService'

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
                    <Scene key="company_setup" component={CompanySetup} title="CompanySetup" hideNavBar />
                    <Scene key="add_delegate" component={AddDelegate} title="AddDelegate" hideNavBar />
                    <Scene key="add_delegate_success" component={AddDelegateSuccess} title="AddDelegateSuccess" hideNavBar />
                    <Scene key="add_client" component={AddClient} title="AddClient" hideNavBar />
                    <Scene initial key="business_service" component={BusinessService} title="BusinessService" hideNavBar />
                </Stack>
            </Router>
        )
    }
}

export default NavigationRouter;