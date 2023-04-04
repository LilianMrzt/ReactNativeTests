import React, {useState} from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import Material3Button from "@app/ui/components/Material3Button";
import BottomPopUp from "@app/ui/components/BottomPopUp";
import Modal from "react-native-modal";
import BigText from "@app/ui/components/BigText";
import AlertPopUp from "@app/ui/components/AlertPopUp";

const AlertScreen = () => {
    const [isModalVisible, setModalVisible] = useState(false);
    const [isAlertVisible, setAlertVisible] = useState(false);
    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };

    const toggleAlert = () => {
        setAlertVisible(!isAlertVisible);
    };

    return (
        <SafeAreaView style={styles.background}>
            <View style={styles.container}>
                <View style={{height: 300, justifyContent: 'space-around', alignItems: 'center'}}>
                    <Material3Button text={'Show Modal'} onButtonPressed={toggleModal}/>
                    <Material3Button text={'Show Alert'} onButtonPressed={toggleAlert}/>
                    <Material3Button text={'Show Toast'} onButtonPressed={toggleAlert}/>
                </View>


                <BottomPopUp
                    isVisible={isModalVisible}
                    closeModal={() => setModalVisible(false)}
                    height={'40%'}
                    content={()=>{
                        return (
                            <View style={styles.modalContent}>
                                <BigText text={"I am the modal content!"}/>
                                <Material3Button text={'close'} onButtonPressed={()=>{setModalVisible(false)}}/>
                            </View>
                        );
                    }}
                />

                <AlertPopUp
                    isVisible={isAlertVisible}
                    closeModal={() => setAlertVisible(false)}
                    height={'30%'}
                    content={()=>{
                        return (
                            <View style={styles.modalContent}>
                                <BigText text={"I am the modal content!"}/>
                                <Material3Button text={'close'} onButtonPressed={()=>{setAlertVisible(false)}}/>
                            </View>
                        );
                    }}
                />
            </View>
        </SafeAreaView>
    );
};



const styles = EStyleSheet.create({
    background:{
        flex:1,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
    },
    container: {
        flex:1,
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    text: {
        color: '$onBackground',
        fontSize: '1.5rem',
    },
    modalContent:{
        flex: 1,
        padding: 16,
        justifyContent: 'center',
        alignItems: 'center',
    }
});

export default AlertScreen;
