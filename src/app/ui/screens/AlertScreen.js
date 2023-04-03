import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import I18n from '@app/assets/i18n/i18n';
import Icon from 'react-native-vector-icons/Ionicons';
import EStyleSheet from 'react-native-extended-stylesheet';

const AlertScreen = () => {
    return (
        <SafeAreaView style={styles.background}>
            <View style={styles.container}>
                <Text style={styles.text}>
                    {I18n.t('Greeting')}
                </Text>
                <Icon name="home" size={60}/>
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
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        color: '$onBackground',
        fontSize: '1.5rem',
    },
});

export default AlertScreen;
