import React from 'react';
import { 
    Platform, 
    SafeAreaView, 
    StyleSheet, 
    Text, 
    StatusBar as AndroidStatusBar, 
    Image, 
    TouchableOpacity
} from 'react-native'

import { StatusBar } from 'expo-status-bar';

import wateringImg from '../assets/watering.png'
import colors from '../../styles/colors';

export function Welcome() {
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar style="auto" />
            <Text style={styles.title}>
                Gerencie {'\n'}
                suas plantas de {'\n'}
                forma fácil
            </Text>

            <Image source={wateringImg}  style={styles.image} />

            <Text style={styles.subtitle}>
                Não esqueça mais de regar suas {'\n'}
                plantas. Nós cuidamos de lembrar você {'\n'}
                sempre que precisar.
            </Text>

            <TouchableOpacity style={styles.button} activeOpacity={0.7} >
                <Text style={styles.buttonText}>&gt;</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingTop: Platform.select({
            android: AndroidStatusBar.currentHeight,
            ios: 0
        }) 
    }, 
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        textAlign: 'center',
        color: colors.heading,
        marginTop: 38
    },
    subtitle: {
        textAlign: 'center',
        fontSize: 18,
        paddingHorizontal: 20, 
        color: colors.heading
    },
    button: {
        backgroundColor: colors.green,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 16,
        marginBottom: 10,
        height: 56,
        width: 56
    },
    buttonText: {
        color: colors.white,
    },
    image: {
        height: 284,
        width: 292
    }
})