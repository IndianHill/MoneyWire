import React, { Component } from 'react'
import { View, StatusBar } from 'react-native'
import NavigationRouter from '../navigation/NavigationRouter'

// Styles
import styles from './Styles/RootContainerStyles'

class RootContainer extends Component {
    
    componentDidMount () {
        console.log('RootContainer loaded..')
    }
  
    render () {
        return (
            <View style={styles.applicationView}>
                <StatusBar barStyle='light-content' />
                <NavigationRouter />
            </View>
        )
    }
}
  
export default RootContainer;