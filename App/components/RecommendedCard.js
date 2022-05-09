import React from 'react';
import {
  StyleSheet,
  Text,
  ImageBackground,
  TouchableOpacity,
  Dimensions
} from 'react-native';
import {View} from 'react-native-ui-lib';
import Icon from 'react-native-vector-icons/MaterialIcons';
// Consts
import COLORS from '../consts/colors';
const {width} = Dimensions.get('screen');

const RecommendedCard = ({navigation, place}) => {
    return (
      <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => navigation.navigate('DetailsScreen', place)}>
      <ImageBackground style={style.rmCardImage} source={{uri: place.image, height: 200}} blurRadius={2}>
        <Text
          style={{
            color: COLORS.white,
            fontSize: 22,
            fontWeight: 'bold',
            marginTop: 10,
          }}>
          {place.name}
        </Text>
        <View
          style={{
            flex: 1,
            justifyContent: 'space-between',
            alignItems: 'flex-end',
          }}>
          <View style={{width: '100%', flexDirection: 'row', marginTop: 10}}>
            <View style={{flexDirection: 'row'}}>
              <Icon name="place" size={22} color={COLORS.white} />
              <Text style={{color: COLORS.white, marginLeft: 5}}>
                {place.location}
              </Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Icon name="star" size={22} color={COLORS.white} />
              <Text style={{color: COLORS.white, marginLeft: 5}}>5.0</Text>
            </View>
          </View>
          {/* <Text style={{color: COLORS.white, fontSize: 13}}>
            {place.details}
          </Text> */}
        </View>
      </ImageBackground>
      </TouchableOpacity>
    );
  };

  const style = StyleSheet.create({
    rmCardImage: {
      width: width - 20,
      height: 200,
      marginTop: 10,
      marginHorizontal: 10,
      borderRadius: 10,
      overflow: 'hidden',
      padding: 10,
    },
  });

export default RecommendedCard;