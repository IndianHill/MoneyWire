import { StyleSheet } from 'react-native'
import { Colors, Fonts } from '../../theme/'

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.white,
    },
    navBarStyle: {
        height: 64,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 22,
        backgroundColor: Colors.primary
    },
    navBarTitle: {
        fontSize: 17,
        color: Colors.white,
        fontWeight: 'bold',
        textAlign: 'center',
        alignSelf: 'center',
        fontFamily: Fonts.semi_bold,
    },
    backImg:{
        height: 20, width: 15, marginLeft: 10, tintColor:Colors.white
    },
    backBtn: {
        position:'absolute', top: 28, left: 10
    },
})