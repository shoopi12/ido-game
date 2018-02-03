import { StyleSheet } from 'react-native';

export const Style = StyleSheet.create({
    viewContainer: {
        marginTop: 30,
    },
    viewRow: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    textBig: {
        fontSize: 20,
        marginBottom: 20,
        color: 'white',
    },
    textSmall: {
        fontSize: 18,
        color: 'blue',
        textAlign: 'center',
    },
    touchable1: {
        height: 70,
        width: 110,
        justifyContent: 'center',
        borderColor: 'blue',
        borderWidth: 1,
        borderRadius: 10,
    },
    touchable2: {
        height: 70,
        width: 110,
        justifyContent: 'center',
        marginLeft: 10,
        borderColor: 'blue',
        borderWidth: 1,
        borderRadius: 10,
    },
    borderColor: {
        borderColor: 'red',
    },
    color: {
        color: 'red',
    },
});
