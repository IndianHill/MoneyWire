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
        flexDirection: 'column',
        marginLeft:'8%',
        marginRight:'8%',
        marginTop: 50,
        alignItems:'center',
        alignSelf:'center',
        justifyContent:'center',
    },
    titleText: {
        marginTop: 40,
        fontSize: 28,
        color: Colors.white,
        fontFamily: Fonts.semi_bold,
        alignSelf:'center',
        alignItems:'center',
        textAlign: 'center',
    },
    thumbsUpImg:{
        height: 180, width: 180, tintColor:Colors.white,
    },
})