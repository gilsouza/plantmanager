import React from 'react';
import { StyleSheet, Text, TouchableHighlightProps, TouchableOpacity } from 'react-native'

import colors from '../styles/colors'
import fonts from '../styles/fonts'

interface ButtonProps extends TouchableHighlightProps {
    title: string;
}

export default function Button({ title, disabled, ...rest }: ButtonProps) {
    return (
        <TouchableOpacity 
            style={[
                styles.container,
                disabled && { backgroundColor: colors.gray }
            ]}
            {...rest}
        >
            <Text style={styles.text}>
                {title}
            </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.green,
        height: 56,
        borderRadius: 16,
        justifyContent: 'center',
        textAlign: 'center'
    },
    text: {
        fontSize: 16,
        color: colors.white,
        fontFamily: fonts.heading,
        justifyContent: 'center',
        textAlign: 'center'
    }
})