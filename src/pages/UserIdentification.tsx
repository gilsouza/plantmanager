import { useNavigation } from '@react-navigation/core';
import React, { useState } from 'react';
import { 
    Keyboard,
    KeyboardAvoidingView,
    Platform,
    SafeAreaView, 
    StyleSheet, 
    Text, 
    TextInput, 
    View,
    TouchableWithoutFeedback
} from 'react-native'

import Button from '../components/Button';

import colors from '../styles/colors';
import fonts from '../styles/fonts';

export function UserIdentification() {
    const navigation = useNavigation()
    const [isFocused, setIsFocused] = useState(false)
    const [isFilled, setIsFilled] = useState(false)
    const [name, setName] = useState('')

    function handleSubmit() {
        navigation.navigate('Confirmation')
    }

    function handleInputBlur() {
        setIsFocused(false)
        setIsFilled(!!name)
    }

    function handleInputFocus() {
        setIsFocused(true)
    }

    function handleInputChange(value: string) {
        setIsFilled(!!value)
        setName(value)
    }

    return (
        <SafeAreaView style={styles.container}>
            <KeyboardAvoidingView
                style={styles.container}
                behavior={Platform.select({
                    android: 'height',
                    ios: 'padding'
                })}
                >
                    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View style={styles.content}>
                        <View style={styles.form}>
                            <View style={styles.header}>
                                <Text style={styles.emoji}>
                                    { isFilled ? '😄️' : '😀️'} 
                                </Text>
                                <Text style={styles.title}>
                                    Como podemos {'\n'}
                                    chamar você?
                                </Text>
                            </View>

                            <TextInput 
                                style={[
                                    styles.input,
                                    (isFocused || isFilled) 
                                    && { borderColor: colors.green }
                                ]}
                                placeholder="Digite um nome"
                                onBlur={handleInputBlur}
                                onFocus={handleInputFocus}
                                onChangeText={handleInputChange}
                            />
                            
                            <View style={styles.footer}>
                                <Button 
                                    title="Confirmar"
                                    onPress={handleSubmit}
                                    disabled={!isFilled}
                                />
                            </View>
                        </View>
                    </View>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
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
        width: '100%'
    },
    form: {
        flex: 1,
        alignItems: 'center',
        paddingHorizontal: 54,
        justifyContent: 'center'
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
        fontSize: 24,
        textAlign: 'center',
        color: colors.heading,
        fontFamily: fonts.heading,
        lineHeight: 32,
        marginTop: 20
    },
    footer: {
        width: '100%',
        marginTop: 40,
        paddingHorizontal: 20
    },
    header: {
        alignItems: 'center'
    }
})