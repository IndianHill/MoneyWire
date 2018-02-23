import { StyleSheet } from 'react-native'
import { Colors, Fonts } from '../../Theme/'

export default StyleSheet.create({
    container: {
        flex: 1,
        alignItems:'center',
        backgroundColor: Colors.primary,
    },
    logoTitle: {
        top: '35%',
        fontSize: 40,
        color: Colors.white,
        justifyContent: 'center', 
        alignItems: 'center',
        fontFamily: Fonts.semi_bold,
    },
    bottomView: {
        flex: 1,
        position: 'absolute',
        bottom: '10%',
        flexDirection: 'row',
        marginLeft: '8%',
        marginRight: '8%',
        justifyContent: 'space-between',
    },
    loginIconImgView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    emailLoginIconImg: {
        height: 48,
        width: 48,
        tintColor: Colors.white,
    },
    loginIconImg: {
        height: 32,
        width: 32,
        tintColor: Colors.white,
    },
    mobileLoginIconImg: {
        height: 32,
        width: 20,
        tintColor: Colors.white,
    },
    loadingView: {
        flex: 1,
        justifyContent: 'center',
        flexDirection: 'row',
    },
})