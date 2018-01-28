import { StyleSheet } from 'react-native'
import { Colors, Fonts } from '../../Theme/'

export default StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    activityIndicatorView: {
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: Colors.grey_dark,
    }
})