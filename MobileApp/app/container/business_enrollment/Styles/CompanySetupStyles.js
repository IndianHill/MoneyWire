import { StyleSheet } from 'react-native'
import { Colors, Images, Fonts } from '../../../theme/'

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.primary,
    },
    innerContainer:{
        marginLeft:'8%',
        marginRight:'8%',
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
    titleView: {
        paddingTop:'35%',
    },
    titleText: {
        fontSize: 32,
        color: Colors.white,
        fontFamily: Fonts.semi_bold,
    },
    descpText:{
        paddingTop: '2%',
        color: Colors.grey,
        fontFamily: Fonts.regular,
    },
    formFieldView:{
        paddingTop:'4%',
    },
    dropdownItemTextStyle:{
        fontSize: 18,
        color: Colors.grey,
        fontFamily: Fonts.regular,
    },
    formFieldText:{
        fontSize: 18,
        color: Colors.white,
        fontFamily: Fonts.regular,
    },
    fieldLabelStyle:{
        fontSize: 16,
        color: Colors.white,
        justifyContent: 'center', 
        alignItems: 'center',
        fontFamily: Fonts.regular,
    },
    fieldTextStyle:{
        fontSize: 18,
        color: Colors.white,
        justifyContent: 'center', 
        alignItems: 'center',
        fontFamily: Fonts.semi_bold,
    }
})