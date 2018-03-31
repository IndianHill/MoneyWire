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
        top: '25%',
        marginRight: '8%',
        marginLeft: '8%', 
    },
    radioBtnLabel: {
        fontSize: 20,
        color: Colors.white,
        fontFamily: Fonts.regular,
    },
    usernameView: {
        top: '30%',
        marginRight: '8%',
        marginLeft: '8%',
        color: Colors.white,
    },
    fullNameTextViewStyle: {
        fontSize: 24,
        color: Colors.white,
        justifyContent: 'center', 
        alignItems: 'center',
        fontFamily: Fonts.regular,
    },
    fullNameTitle: {
        fontSize: 24,
        color: Colors.white,
        justifyContent: 'center', 
        alignItems: 'center',
        fontFamily: Fonts.semi_bold,
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
})