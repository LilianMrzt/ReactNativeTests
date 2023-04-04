import React from "react";
import Modal from "react-native-modal";
import {View} from "react-native";
import PropTypes from 'prop-types';
import EStyleSheet from "react-native-extended-stylesheet";

const AlertPopUp = ({isVisible, closeModal, height, content}) => {

    return (
        <Modal
            isVisible={isVisible}
            onBackdropPress={()=>{closeModal()}}
            onBackButtonPress={()=>{closeModal()}}
            transparent={true}
            backdropOpacity={0.2}
            avoidKeyboard={true}
        animationIn={'zoomIn'}
        animationOut={'zoomOut'}>
            <View
                style={[styles.popup, {height: height}]}
            >
                {content()}
            </View>
        </Modal>
    );
}

AlertPopUp.propTypes = {
    isVisible: PropTypes.bool,
};

const styles = EStyleSheet.create({
    container: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    popup:{
        backgroundColor:'$background',
        justifyContent: 'center',
        elevation: 1,
        borderRadius: 30,
    },

});

export default AlertPopUp;
