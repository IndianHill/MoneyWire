import { StyleSheet } from 'react-native'
import { Colors, Images, Fonts } from '../../../theme/'

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
    titleDescpTextView: {
        top: '25%',
        marginRight: '8%',
        marginLeft: '8%',
    },
    titleDescpText: {
        fontSize: 18,
        color: Colors.grey,
        fontFamily: Fonts.regular,
    },
})