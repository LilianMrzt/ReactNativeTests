import React from "react";
import Modal from "react-native-modal";
import {View} from "react-native";
import PropTypes from 'prop-types';
import EStyleSheet from "react-native-extended-stylesheet";

const BottomPopUp = ({isVisible, closeModal, height, content}) => {

    return (
        <Modal
            isVisible={isVisible}
            style={{margin: 0}}
            onBackdropPress={()=>{closeModal()}}
            onBackButtonPress={()=>{closeModal()}}
            transparent={true}
            backdropOpacity={0.2}
            avoidKeyboard={true}>
            <View
                style={[styles.popup, {height: height}]}
            >
                {content()}
            </View>
        </Modal>
    );
}

BottomPopUp.propTypes = {
    isVisible: PropTypes.bool,
};

const styles = EStyleSheet.create({
    container: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    popup:{
        marginTop: 'auto',
        backgroundColor:'$background',
        justifyContent: 'center',
        elevation: 1,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
    },

});

export default BottomPopUp;
