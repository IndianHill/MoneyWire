import { StyleSheet } from 'react-native'
import { Colors, Fonts } from '../../theme/'

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
        paddingTop: 22,
        backgroundColor: Colors.primary
    },
    navBarTitle: {
        fontSize: 17,
        color: Colors.white,
        fontWeight: 'bold',
        textAlign: 'center',
        alignSelf: 'center',
        fontFamily: Fonts.semi_bold,
    },
    backImg:{
        height: 20, width: 15, marginLeft: 10, tintColor:Colors.white
    },
    backBtn: {
        position:'absolute', top: 28, left: 10
    },
    loginMsgViewStyle:{
        top: '10%',
        marginRight: '8%',
        marginLeft: '8%',
        justifyContent: 'center', 
    },
    loginMsgText:{
        fontSize: 32,
        color: Colors.primary,
        justifyContent: 'center', 
        alignItems: 'center',
        fontFamily: Fonts.regular,
    },
    signInViewStyle: {
        top: '15%',
        marginRight: '8%',
        marginLeft: '8%',
        justifyContent: 'center', 
    },
    signInTextViewStyle: {
        fontSize: 16,
        color: Colors.grey_dark,
        justifyContent: 'center', 
        alignItems: 'center',
        fontFamily: Fonts.light,
    },
    signInBtnStyle:{
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
    signInBtnTextStyle: {
        color: Colors.white,
        fontSize: 16,
        fontFamily: Fonts.regular,
    },
    bottomViewStyle: {
        bottom: '8%',
        marginRight: '8%',
        marginLeft: '8%',
        flexDirection: 'row',
        position:'absolute',
    },
    bottomMsgTextStyle:{
        fontSize: 16,
        color: Colors.black,
        fontFamily: Fonts.light,
    },
    toggleTextStyle: {
        fontSize: 16,
        color: Colors.primary,
        fontFamily: Fonts.light,
    },
    visiblityIconImg: {
        height: 24,
        width: 24,
        tintColor: Colors.primary,
    },
})