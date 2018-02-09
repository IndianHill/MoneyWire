import { StyleSheet } from 'react-native'
import { Colors, Fonts } from '../../Theme/'

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.primary,
    },
    mobileNumberInputView: {
        top: '20%',
        marginRight: '8%',
        marginLeft: '8%',
        justifyContent: 'center', 
        alignItems: 'center',
    },
    mobileNumberTextViewStyle: {
        fontSize: 16,
        color: Colors.white,
        justifyContent: 'center', 
        alignItems: 'center',
    },
    cancelView:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    cancelButtonViewStyle: {
        height: '5%',
        position: 'absolute',
        bottom: '10%',
        marginLeft: '8%',
        marginRight: '8%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        backgroundColor: Colors.white,
    },
    cancelTextStyle: {
        fontSize: 16,
        color: Colors.primary,
    },
})