import React from 'react';
import { StyleSheet, View, Text, TextInput } from 'react-native';

import TimerButton from './TimerButton';

export default function TimerForm({ id, title, project }) {
    const submitText = id ? 'Update' : 'Create';

    return (
        <View style={styles.formContainer}>
            <View style={styles.attributeContainer}>
                <Text style={styles.textInputTitle}>Title</Text>
                <View style={styles.textInputContainer}>
                    <TextInput style={styles.textInput}
                    underlineColorAndroid="transparent"
                    defaultValue={title}
                    />
                </View>
            </View>
            <View style//FINISH THIS BIT OFF HERE//
        </View>
    )
}