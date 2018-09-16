import { StyleSheet } from 'react-native'
import { Colors, Fonts } from '../../../theme/'

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.primary,
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
    bgView:{
        top: '10%',
        height: '25%',
        marginLeft: '8%',
        marginRight: '8%',
    },
    bgImage:{
        height: '100%',
        width: '100%',
    },
    titleView:{
        top: '18%',
        marginLeft: '8%',
        marginRight: '8%',
    },
    titleText: {
        fontSize: 32,
        color: Colors.white,
        fontFamily: Fonts.semi_bold,
    },
    msgDescpView:{
        top: '22%',
        marginLeft: '8%',
        marginRight: '8%',
    },
    msgDescpText:{
        fontSize: 16,
        color: Colors.grey,
        fontFamily: Fonts.regular,
    },
    bottomViewStyle: {
        top: '45%',
        marginRight: '8%',
        marginLeft: '8%',
        flexDirection: 'row',
    },
    bottomMsgTextStyle:{
        fontSize: 16,
        color: Colors.grey,
        fontFamily: Fonts.regular,
    },
    underlineTextStyle: {
        fontSize: 16,
        color: Colors.secondary,
        fontFamily: Fonts.regular,
    },
    nxtClickMsgView:{
        bottom:'8%',
        left: '8%',
        position: 'absolute',
    },
    nxtMsgText:{
        fontSize: 16,
        color: Colors.grey,
        fontFamily: Fonts.regular,
    },
})