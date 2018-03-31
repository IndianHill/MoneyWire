import { StyleSheet } from 'react-native'
import { Colors, Fonts } from '../../../theme/'

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.primary,
    },
    titleTextView: {
        top: '20%',
        marginRight: '8%',
        marginLeft: '8%',
    },
    titleText: {
        fontSize: 32,
        color: Colors.white,
        fontFamily: Fonts.semi_bold,
    },
    radioButtonsView: {
        top: '30%',
        marginRight: '8%',
        marginLeft: '8%', 
    },
    radioBtnLabel: {
        fontSize: 20,
        color: Colors.white,
        fontFamily: Fonts.semi_bold,
    },
})