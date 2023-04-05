import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import PropTypes from 'prop-types';
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

const Material3IconTextButton = ({text, icon, fontSize, fontColor}) => {
    return (
        <TouchableOpacity style={styles.button}>
            <MaterialIcons name={icon} size={fontSize + 7} style={[styles.icon, {color: fontColor}]}/>
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
        fontFamily: 'Roboto-Medium',
    },
    icon:{
        marginRight: 8,
        textAlign: 'center'
    },
    button:{
        flexDirection: 'row',
        alignItems: 'center',
        height: 40,
        marginTop: 5,
        marginBottom: 5,
    },
});

Material3IconTextButton.propTypes = {
    text: PropTypes.string,
    icon: PropTypes.string,
};
export default Material3IconTextButton;
