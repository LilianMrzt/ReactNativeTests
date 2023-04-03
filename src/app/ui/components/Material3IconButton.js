import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import PropTypes from 'prop-types';
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

const Material3IconButton = ({text, icon}) => {
    return (
        <TouchableOpacity style={styles.button}>
            <MaterialIcons name={icon} size={24} style={styles.icon}/>

            <Text style={styles.text}>
                {text}
            </Text>
        </TouchableOpacity>
  );
};

const styles = EStyleSheet.create({
    text: {
        color: '$onPrimaryContainer',
        fontSize: 20,
        fontFamily: 'Roboto',
    },
    icon:{
        color: '$onPrimaryContainer',
        marginRight: 8,
        textAlign: 'center'
    },
    button:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingLeft:16,
        paddingRight:24,
        backgroundColor:'$primaryContainer',
        borderRadius: 20,
        height: 40,
        elevation : 1,
    },
});

Material3IconButton.propTypes = {
    text: PropTypes.string,
    icon: PropTypes.string,
};
export default Material3IconButton;
