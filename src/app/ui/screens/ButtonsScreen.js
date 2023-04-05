import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import I18n from '@app/assets/i18n/i18n';
import EStyleSheet from 'react-native-extended-stylesheet';
import Material3Button from '@app/ui/components/Material3Button';
import Material3IconButton from "@app/ui/components/Material3IconButton";
import Material3FAB from "@app/ui/components/Material3FAB";
import Icons from "@app/assets/Icons"

const ButtonsScreen = () => {
  return (
      <SafeAreaView style={styles.background}>
          <View style={styles.container}>
              <View style={styles.buttonContainer}>
                  <Text style={styles.text}>
                      {I18n.t('Buttons')}
                  </Text>
                  <Material3Button text={'Click'}/>
                  <Material3IconButton text={'Enabled'} icon={Icons.add}/>
                  <Material3IconButton text={'Enabled'} icon={Icons.home}/>

              </View>
              <View style={{width:'100%', height: 130, position:'absolute', bottom: 0}}>
                  <View style={{flex:1}}>
                      <Material3FAB icon={Icons.edit}/>
                  </View>
                  <View style={{flex:1}}>
                      <Material3FAB icon={Icons.add}/>
                  </View>
              </View>

          </View>
      </SafeAreaView>
  );
};



const styles = EStyleSheet.create({
    background:{
        flex:1,
        backgroundColor: '$background',
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
    buttonContainer:{
        height: 300,
        backgroundColor: "$background",
        borderRadius: 16,
        width: "90%",
        //elevation: 1,
        alignItems: 'center',
        justifyContent: 'space-around',
        padding: 16,
    },
});

export default ButtonsScreen;
