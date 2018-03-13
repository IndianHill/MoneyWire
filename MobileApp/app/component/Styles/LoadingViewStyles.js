import { StyleSheet } from 'react-native'
import { Colors, Fonts } from '../../theme/'

export default StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    activityIndicatorView: {
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: Colors.grey_dark_transperent,
    }
})