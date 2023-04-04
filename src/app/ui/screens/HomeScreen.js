import React from 'react';
import {SafeAreaView, ScrollView, Text, View} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import SquareCard from "@app/ui/components/SquareCard";
import I18n from "@app/assets/i18n/i18n";
import PropTypes from 'prop-types';
import RectangleCard from "@app/ui/components/RectangleCard";
import BigText from "@app/ui/components/BigText";

const HomeScreen = ({navigation}) => {
  return (
      <SafeAreaView style={styles.background}>
          <ScrollView contentContainerStyle={{paddingBottom: 16}}>

              <BigText text={'Explore the App'}/>



                  <View style={styles.row}>
                      <SquareCard
                          text={I18n.t('Buttons')}
                          iconName={'radio-button-on'}
                          onCardPressed={()=>{navigation.navigate('Buttons')}}/>

                      <SquareCard
                          text={I18n.t('Alert')}
                          iconName={'alert-circle-outline'}
                          onCardPressed={()=>{navigation.navigate('Alert')}}/>
                  </View>
                  <View style={styles.row}>
                      <SquareCard
                          text={I18n.t('Buttons')}
                          iconName={'radio-button-on'}
                          onCardPressed={()=>{navigation.navigate('Buttons')}}/>

                      <SquareCard
                          text={I18n.t('Alert')}
                          iconName={'alert-circle-outline'}
                          onCardPressed={()=>{navigation.navigate('Alert')}}/>
                  </View>



              <BigText text={'Explore the components'}/>

              <ScrollView
                  showsHorizontalScrollIndicator={false}
                  horizontal={true}
                  style={styles.scrollView}
                  contentContainerStyle={{paddingHorizontal: 10}}>
                  <RectangleCard/>
                  <RectangleCard/>
                  <RectangleCard/>
                  <RectangleCard/>
                  <RectangleCard/>
              </ScrollView>

              <BigText text={'More components'}/>

              <View style={styles.column2}>
                  <View style={styles.row}>
                      <SquareCard
                          text={I18n.t('Buttons')}
                          iconName={'radio-button-on'}
                          onCardPressed={()=>{navigation.navigate('Buttons')}}/>
                      <SquareCard
                          text={I18n.t('Alert')}
                          iconName={'alert-circle-outline'}
                          onCardPressed={()=>{navigation.navigate('Alert')}}/>
                  </View>
              </View>

          </ScrollView>
      </SafeAreaView>
  );
};

HomeScreen.propTypes = {
    navigation: PropTypes.shape({
        navigate: PropTypes.func.isRequired,
    }).isRequired,
};

const styles = EStyleSheet.create({
    background:{
        flex:1,
        backgroundColor: '$background',
    },
    text: {
        color: '$onBackground',
        fontSize: '1.5rem',
    },
    row: {
        width: "100%",
        aspectRatio: 2.3,
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 20,
    },
    cardStyle: {
        backgroundColor:'$primaryContainer',
        height: "100%",
        aspectRatio: 1,
        borderRadius: 20,
        marginRight: 20,
        marginLeft: 10,
    },
    scrollView: {
        height: 150,
        marginBottom: 16,
    },
});

export default HomeScreen;
