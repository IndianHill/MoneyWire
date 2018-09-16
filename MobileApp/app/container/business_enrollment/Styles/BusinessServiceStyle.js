import { StyleSheet } from 'react-native'
import { Colors, Images, Fonts } from '../../../theme/'

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.primary,
    },
    closeBtnStyle:{
        marginTop: '15%',
        marginLeft: '8%',
        height: 40,  
        width: 40,
        justifyContent: 'flex-start', 
        alignItems: 'center',
        alignSelf: 'flex-start',
        flexDirection:'column',
    },
    closeImg:{
        height: 32, 
        width: 32, 
        tintColor:Colors.white,
        justifyContent: 'center', 
        alignItems: 'center',
        alignSelf: 'center',
    },
    titleView: {
        flexDirection: 'row',
        marginLeft:'8%',
        marginRight:'8%',
        paddingTop: 50,
    },
    titleDescpView:{
        marginLeft:'8%',
        marginRight:'8%',
        paddingTop: 20,
    },
    titleText: {
        fontSize: 32,
        color: Colors.white,
        fontFamily: Fonts.semi_bold,
    },
    descpText:{
        fontSize: 16,
        color: Colors.grey,
        fontFamily: Fonts.regular,
    },
    formFieldView:{
        marginLeft:'8%',
        marginRight:'8%',
        paddingTop:20,
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
    },
    bottomView:{
        flex:1,
        flexDirection:'row',
        justifyContent: 'space-between', 
        alignItems: 'center',
        marginTop: 60,
        marginBottom: 40,
        marginRight: '8%',
        marginLeft: '8%',
    },
    addDelegateView:{
        justifyContent: 'center', 
        alignItems: 'center',
        alignSelf: 'flex-start',
    },
    addDelegateText:{
        fontSize: 20,
        color: Colors.secondary,
        fontFamily: Fonts.regular,
    },
    nxtBtnStyle:{
        height: 60,  
        width: 60,
        borderRadius: 30,
        backgroundColor: Colors.secondary,
        justifyContent: 'center', 
        alignItems: 'center',
        alignSelf: 'flex-end',
    },
    nxtImg:{
        height: 50, 
        width: 35, 
        tintColor:Colors.white,
        justifyContent: 'center', 
        alignItems: 'center',
        alignSelf: 'center',
    },
})