import { StyleSheet } from 'react-native'
import { Colors, Fonts } from '../../Theme/'

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.white,
    },
    navBarStyle: {
        height: 64,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 12,
        backgroundColor: Colors.primary
    },
    navBarTitle: {
        fontSize: 17,
        color: Colors.white,
        fontWeight: 'bold',
        textAlign: 'center',
        alignSelf: 'center'
    },
    backImg:{
        height: 20, width: 15, marginLeft: 10, tintColor:Colors.white
    },
    backBtn: {
        position:'absolute', top: 28, left: 10
    },
    mobileNumberInputView: {
        top: '20%',
        marginRight: '8%',
        marginLeft: '8%',
        justifyContent: 'center', 
    },
    mobileNumberTextViewStyle: {
        fontSize: 16,
        color: Colors.grey_dark,
        justifyContent: 'center', 
        alignItems: 'center',
    },
    getOTPBtn:{
        width: '100%',
        marginTop: '5%',
        marginRight: '8%',
        marginLeft: '8%',
        height: 35,  
        borderRadius: 10,
        backgroundColor: Colors.primary,
        justifyContent: 'center', 
        alignItems: 'center',
        alignSelf: 'center',
    },
    getOTPText: {
        color: Colors.white,
        fontSize: 16,
    },
    verificationCodeView: {
        marginTop: '20%',
        marginRight: '8%',
        marginLeft: '8%',
    },
})