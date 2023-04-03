import React from 'react';
import {TouchableOpacity} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import PropTypes from 'prop-types';
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

const Material3FAB = ({icon}) => {
    return (
        <TouchableOpacity style={styles.button}>
            <MaterialIcons name={icon} size={24} style={styles.icon}/>
        </TouchableOpacity>
    );
};

const styles = EStyleSheet.create({
    icon:{
        color: '$onPrimaryContainer',
    },
    button:{
        alignItems: 'center',
        justifyContent: 'center',
        padding: 16,
        backgroundColor:'$primaryContainer',
        borderRadius: 16,
        height: 56,
        width: 56,
        elevation : 1,
        position: 'absolute',
        bottom: 16,
        right: 16,
    },
});

Material3FAB.propTypes = {
    icon: PropTypes.string,
};
export default Material3FAB;
