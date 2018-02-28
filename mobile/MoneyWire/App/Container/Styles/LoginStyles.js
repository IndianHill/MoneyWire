import { StyleSheet } from 'react-native'
import { Colors, Fonts } from '../../Theme/'

export default StyleSheet.create({
    container: {
        flex: 1,
        alignItems:'center',
        backgroundColor: Colors.primary,
    },
    titleViewStyle: {
        top: '20%',
        marginLeft: '2%',
        marginRight: '2%',
        justifyContent: 'center', 
        alignItems: 'center',
    },
    logoTitle: {
        fontSize: 36,
        color: Colors.white,
        justifyContent: 'center', 
        alignItems: 'center',
        fontFamily: Fonts.bold,
    },
    description: {
        marginTop: '2%',
        fontSize: 18,
        color: Colors.white,
        justifyContent: 'center', 
        alignItems: 'center',
        fontFamily: Fonts.light,
    },
    centerDescription: {
        marginTop: '25%',
        fontSize: 20,
        color: Colors.white,
        justifyContent: 'center', 
        alignItems: 'center',
        fontFamily: Fonts.regular,
    },
    bottomView: {
        flex: 1,
        position: 'absolute',
        bottom: '12%',
        flexDirection: 'row',
        marginLeft: '8%',
        marginRight: '8%',
        justifyContent: 'space-between',
    },
    privacyPolicyBtnView: {
        flex: 1,
        position: 'absolute',
        bottom: '5%',
        flexDirection: 'row',
        marginLeft: '8%',
        marginRight: '8%',
        justifyContent: 'center',
    },
    privacyPolicyBtnText: {
        fontSize: 12,
        color: Colors.white,
        justifyContent: 'center', 
        alignItems: 'center',
        fontFamily: Fonts.regular,
    },
    loginIconImgView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    emailLoginIconImg: {
        height: 40,
        width: 40,
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