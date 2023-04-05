import React from "react";
import {Text, TouchableOpacity} from "react-native";
import EStyleSheet from "react-native-extended-stylesheet";
import PropTypes from 'prop-types';
import Ionicons from "react-native-vector-icons/Ionicons";
const SquareCard = ({iconName, text, onCardPressed}) => {
  return (
      <TouchableOpacity style={styles.cardStyle} onPress={onCardPressed}>
            <Ionicons name={iconName} style={styles.icon} size={40}/>
            <Text style={styles.text}>
                {text}
            </Text>
      </TouchableOpacity>
  );
};

SquareCard.propTypes = {
    iconName: PropTypes.string,
    text: PropTypes.string,
};

const styles = EStyleSheet.create({
    cardStyle: {
        backgroundColor:'$primaryContainer',
        height: "100%",
        flex: 0.5,
        borderRadius: 20,
        marginRight: 10,
        marginLeft: 10,
        alignItems: 'center',
        justifyContent: 'flex-end',
        elevation: 1,
    },
    icon: {
        position: 'absolute',
        right: 16,
        top: 16,
        color:  '$background',
    },
    text: {
        fontSize: 28,
        color: '$background',
        fontWeight: 'bold',
        marginRight: 24,
        marginLeft: 24,
        marginBottom: 24,
    },
});

export default SquareCard;
