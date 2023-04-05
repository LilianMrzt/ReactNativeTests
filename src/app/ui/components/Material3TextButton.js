import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import PropTypes from 'prop-types';

const Material3TextButton = ({text, fontSize, fontColor}) => {
    return (
        <TouchableOpacity style={styles.button}>
            <Text style={[styles.text, {
                fontSize: fontSize,
                color : fontColor,
            }]}>
                {text}
            </Text>
        </TouchableOpacity>
    );
};

const styles = EStyleSheet.create({
    text: {
        color: '$onPrimaryContainer',
        fontSize: 20,
        fontFamily: 'Roboto-Medium',
    },
    button:{
        height: 40,
        justifyContent: 'center',
        marginTop: 5,
        marginBottom: 5,
    },
});

Material3TextButton.propTypes = {
    text: PropTypes.string,
};
export default Material3TextButton;
