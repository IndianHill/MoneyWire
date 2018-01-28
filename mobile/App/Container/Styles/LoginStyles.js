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
        fontSize: 32,
        color: Colors.white,
        justifyContent: 'center', 
        alignItems: 'center',
    },
    bottomView: {
        flex: 1,
        position: 'absolute',
        bottom: '10%',
        flexDirection: 'row',
        marginLeft: '5%',
        marginRight: '5%',
        justifyContent: 'space-between',
    },
    loginIconImgView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
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