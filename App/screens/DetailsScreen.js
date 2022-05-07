import React from 'react';
import {
  ImageBackground,
  StyleSheet,
  Text,
} from 'react-native';
import {View} from 'react-native-ui-lib';
import { StatusBar } from 'expo-status-bar';
import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../consts/colors';

const DetailsScreen = ({navigation, route}) => {
  const place = route.params;
  return (<>
  <View flex backgroundColor={COLORS.white}>
    <View backgroundColor={COLORS.primary} useSafeArea={true}>
    <StatusBar style="auto" backgroundColor={COLORS.primary} />
    <View paddingB-10 style={style.header}>
          <Icon
            name="arrow-back-ios"
            size={28}
            color={COLORS.white}
            onPress={navigation.goBack}
          />
          <Icon name="more-vert" size={28} color={COLORS.white} />
        </View>
    </View>
      <ImageBackground style={{flex: 0.7}} source={place.image}>
        <View style={style.imageDetails}>
          <Text
            style={{
              width: '70%',
              fontSize: 30,
              fontWeight: 'bold',
              color: COLORS.white,
              marginBottom: 20,
            }}>
            {place.name}
          </Text>
          <View style={{flexDirection: 'row'}}>
            <Icon name="star" size={30} color={COLORS.orange} />
            <Text
              style={{color: COLORS.white, fontWeight: 'bold', fontSize: 20}}>
              5.0
            </Text>
          </View>
        </View>
      </ImageBackground>
      <View style={style.detailsContainer}>
        <View style={style.iconContainer}>
          <Icon name="favorite" color={COLORS.red} size={30} />
        </View>
        <View flexDirection={'row'} alignItems={'center'}>
          <Icon name="place" size={28} color={COLORS.primary} />
          <Text
            style={{
              marginLeft: 5,
              fontSize: 20,
              fontWeight: 'bold',
              color: COLORS.primary,
            }}>
            {place.location}
          </Text>
        </View>
        <Text style={{marginTop: 20, fontWeight: 'bold', fontSize: 20}}>
          About the trip
        </Text>
        <Text style={{marginTop: 20, lineHeight: 22}}>{place.details}</Text>
      </View>
      </View>
    </>);
};
const style = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  iconContainer: {
    height: 60,
    width: 60,
    position: 'absolute',
    top: -30,
    backgroundColor: COLORS.white,
    borderRadius: 30,
    right: 20,
    elevation: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  detailsContainer: {
    top: -30,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingVertical: 40,
    paddingBottom: 70,
    paddingHorizontal: 20,
    backgroundColor: COLORS.white,
    flex: 0.3,
  },
  imageDetails: {
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    position: 'absolute',
    bottom: 30,
  },
});

export default DetailsScreen;
