import React from "react";
import {Text} from "react-native";
import PropTypes from 'prop-types';
import EStyleSheet from "react-native-extended-stylesheet";

const BigText = ({text}) => {
  return (
      <Text style={styles.text}>
          {text}
      </Text>
  );
};

BigText.propTypes = {
    text: PropTypes.string,
};

const styles = EStyleSheet.create({
    text: {
        fontSize: 30,
        color: '$onBackground',
        fontWeight: 'bold',
        margin: 16,
    },
});

export default BigText;
