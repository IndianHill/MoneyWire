import { StyleSheet } from 'react-native'
import { Colors, Fonts } from '../../Theme/'

export default StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: Colors.white,
    },
    welcomeNoteView: {
        top: '10%',
        marginLeft: '2%',
        marginRight: '2%',
    },
    welcomeNoteText: {
        color: Colors.primary,
        fontSize: 18,
    },
    logoutViewStyle: {
        bottom: '10%',
        position: 'absolute',
        marginLeft: '10%',
        marginRight: '10%',
    }
})