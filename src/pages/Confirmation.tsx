import React, { useState } from 'react';
import { 
    SafeAreaView, 
    StyleSheet, 
    Text, 
    View
} from 'react-native'

import Button from '../components/Button';

import colors from '../styles/colors';
import fonts from '../styles/fonts';

export function Confirmation() {
    return (
        <SafeAreaView style={styles.container}>
                <View style={styles.content}>
                    <Text style={styles.emoji}>
                        😁️
                    </Text>
                    
                    <Text style={styles.title}>
                        Prontinho
                    </Text>

                    <Text style={styles.subtitle}>
                        Agora vamos começar a cuidar das suas plantinhas com muito cuidado.
                    </Text>
                    
                    <View style={styles.footer}>
                        <Button title="Começar"/>
                    </View>
                </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around',
        width: '100%'
    }, 
    content: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 30
    },
    emoji: {
        fontSize: 78
    },
    input: {
        borderBottomWidth: 1,
        borderColor: colors.heading,
        color: colors.heading,
        width: '100%',
        fontSize: 18,
        marginTop: 50,
        padding: 10,
        textAlign: 'center'
    },
    title: {
        fontSize: 22,
        textAlign: 'center',
        color: colors.heading,
        fontFamily: fonts.heading,
        lineHeight: 38,
        marginTop: 15
    },
    subtitle: {
        fontSize: 17,
        textAlign: 'center',
        color: colors.heading,
        paddingVertical: 10,
        fontFamily: fonts.text,
    },
    footer: {
        width: '100%',
        marginTop: 20,
        paddingHorizontal: 50
    }
})
