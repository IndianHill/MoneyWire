import React from 'react'
import { View, ActivityIndicator, Modal } from 'react-native'

// Styles
import styles from './Styles/LoadingViewStyles'
import { Colors } from '../Theme/Index';

export default class LoadingView extends React.Component {

    // If size is not passed from props then default size will be considered
    getSizeOfIndicator = () => {
        if (this.props.size) {
            return this.props.size;
        } else {
            return 'large';
        }
    }

    // If color is not passed from props then default color will be considered
    getColorOfIndicator = () => {
        if (this.props.color) {
            return this.props.color;
        } else {
            return Colors.white;
        }
    }

    render () {
        return (
            <Modal
                visible='true'
                animationType={ 'none' }
                onRequestClose={() => {}}
            >
                <View style={[styles.container, styles.activityIndicatorView]}>
                    <activityIndicatorView size={ this.getSizeOfIndicator() } color={ this.getColorOfIndicator() } />
                </View>
            </Modal>
        )
    }
}