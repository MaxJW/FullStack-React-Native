import React from 'react';
import { StyleSheet, View, TextInput } from 'react-native';
import PropTypes from 'prop-types';

export default class SearchInput extends React.Component {
    static propTypes = {
        onSubmit: PropTypes.func.isRequired,
        placeholder: PropTypes.string,
    };

    static defaultProps = {
        placeholder: '',
    };
    
    state = {
        text: '',
    };

    handleChangeText = text => {
        this.setState({text});
    }

    handleSubmitEditing = () => {
        const { onSubmit } = this.props;
        const { text } = this.state;

        if (!text) return;

        onSubmit(text);
        this.setState({ text: '' });
    }

    render() {
        const { placeholder } = this.props;
        const { text } = this.state;
        return (
            <View style={styles.container}>
                <TextInput
                    autocorrect={false}
                    value={text}
                    placeholder={placeholder}
                    placeholderTextColor="white"
                    underlineColorAndroid="transparent"
                    style={styles.textInput}
                    clearButtonMode="always"
                    onChangeText={this.handleChangeText}
                    onSubmitEditing={this.handleSubmitEditing}
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