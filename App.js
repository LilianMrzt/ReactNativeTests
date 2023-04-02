import React from 'react';
import {
    SafeAreaView,
    Text,
    View,
} from 'react-native';
import I18n from '@app/i18n/i18n';
import EStyleSheet from 'react-native-extended-stylesheet';
import Icon from 'react-native-vector-icons/Ionicons';

const App = () => {

    return (
        <SafeAreaView style={styles.background}>
            <View>
                <Text style={styles.text}>
                    {I18n.t('Greeting')}
                </Text>
                <Icon name="home" size={60}/>
                <Text>
                    HAHAHAHA
                </Text>
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
    text: {
        color: '$textColor',
        fontSize: '1.5rem',
    },
});

EStyleSheet.build({ // always call EStyleSheet.build() even if you don't use global variables!
    $textColor: '#0275d8',
});

export default App;
