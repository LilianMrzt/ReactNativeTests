import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import PropTypes from 'prop-types';

const Material3Button = ({text, onButtonPressed}) => {
  return (
      <TouchableOpacity style={styles.button} onPress={onButtonPressed}>
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
    },
    button:{
        paddingLeft:24,
        paddingRight:24,
        backgroundColor:'$primaryContainer',
        borderRadius: 20,
        height: 40,
        alignItem: 'center',
        justifyContent: 'center',
        elevation : 1,
    },
});

Material3Button.propTypes = {
    text: PropTypes.string,
};
export default Material3Button;
