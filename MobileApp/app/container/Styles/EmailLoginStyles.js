import { StyleSheet } from 'react-native'
import { Colors, Fonts } from '../../theme/'

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.primary,
    },
    loginMsgViewStyle:{
        top: '20%',
        marginRight: '8%',
        marginLeft: '8%',
        justifyContent: 'center', 
    },
    loginMsgText:{
        fontSize: 32,
        color: Colors.white,
        justifyContent: 'center', 
        alignItems: 'center',
        fontFamily: Fonts.regular,
    },
    signInViewStyle: {
        top: '25%',
        marginRight: '8%',
        marginLeft: '8%',
        justifyContent: 'center', 
    },
    signInTextViewStyle: {
        fontSize: 24,
        color: Colors.grey_dark,
        justifyContent: 'center', 
        alignItems: 'center',
        fontFamily: Fonts.light,
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
        color: Colors.grey,
        fontFamily: Fonts.regular,
    },
    toggleTextStyle: {
        fontSize: 16,
        color: Colors.secondary,
        fontFamily: Fonts.regular,
    },
    visiblityIconImg: {
        height: 24,
        width: 24,
        tintColor: Colors.white,
    },
    nxtBtnStyle:{
        position:'absolute',
        bottom: '5%',
        right: '8%',
        height: 60,  
        width: 60,
        borderRadius: 30,
        backgroundColor: Colors.secondary,
        justifyContent: 'center', 
        alignItems: 'center',
        alignSelf: 'center',
    },
    nxtImg:{
        height: 50, width: 35, tintColor:Colors.white
    },
    closeBtnStyle:{
        position:'absolute',
        top: '5%',
        left: '5%',
        height: 60,  
        width: 60,
        justifyContent: 'center', 
        alignItems: 'center',
        alignSelf: 'center',
    },
    closeImg:{
        height: 32, width: 32, tintColor:Colors.white
    },
})