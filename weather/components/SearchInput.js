import React from 'react';
import { StyleSheet, View, TextInput } from 'react-native';

export default class SearchInput extends React.Component {
    handleChangeText(newLocation) {
        //We need to do soemthing with newLocation
    }

    render() {
        return (
            <View style={styles.container}>
                <TextInput
                    autocorrect={false}
                    placeholder={this.props.placeholder}
                    placeholderTextColor="white"
                    underlineColorAndroid="transparent"
                    style={styles.textInput}
                    clearButtonMode="always"
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        height: 40,
        width: 300,
        marginTop: 20,
        backgroundColor: '#666',
        marginHorizontal: 40,
        paddingHorizontal: 10,
        borderRadius: 5,
    },
    textInput: {
        flex: 1,
        color: 'white',
    },
});