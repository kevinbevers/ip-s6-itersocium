// import { StatusBar } from 'expo-status-bar';
// import {Card, View, Text, Button} from 'react-native-ui-lib';

// export default function App() {
//   return (<>
//     <StatusBar style="auto" />
//     <View flex bg-grey70 useSafeArea={true}>
//       <View marginH-15>
        
//         <Card height={100} center padding-card marginB-s4>
//           <Text body>This is an example card </Text>
//         </Card>

//         <Button label="Button" body bg-primaryColor square></Button>
//         </View>
//       </View>
//       </>);
// }

import React from 'react';
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  ImageBackground,
  FlatList,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import {View} from 'react-native-ui-lib';
import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from './consts/colors';
import places from './consts/places';
const {width} = Dimensions.get('screen');
const HomeScreen = ({navigation}) => {

  const Card = ({place}) => {
    return (
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => navigation.navigate('DetailsScreen', place)}>
        <ImageBackground style={style.cardImage} source={place.image}>
          <Text
            style={{
              color: COLORS.white,
              fontSize: 20,
              fontWeight: 'bold',
              marginTop: 10,
            }}>
            {place.name}
          </Text>
          <View
            style={{
              flex: 1,
              justifyContent: 'space-between',
              flexDirection: 'row',
              alignItems: 'flex-end',
            }}>
            <View style={{flexDirection: 'row'}}>
              <Icon name="place" size={20} color={COLORS.white} />
              <Text style={{marginLeft: 5, color: COLORS.white}}>
                {place.location}
              </Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Icon name="star" size={20} color={COLORS.white} />
              <Text style={{marginLeft: 5, color: COLORS.white}}>5.0</Text>
            </View>
          </View>
        </ImageBackground>
      </TouchableOpacity>
    );
  };

  const RecommendedCard = ({place}) => {
    return (
      <ImageBackground style={style.rmCardImage} source={place.image} blurRadius={2}>
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
    );
  };
  
  return (<>
  <View backgroundColor={COLORS.primary} useSafeArea={true}>
    <StatusBar style="auto" backgroundColor={COLORS.primary} />
    </View>
    <View flex useSafeArea={true}>
        <View paddingB-20 paddingH-20 style={{backgroundColor: COLORS.primary}}>
            <Text style={style.headerTitle}>Popular travels</Text>
        </View>
        <View>
          {/* <FlatList
            contentContainerStyle={{paddingLeft: 20}}
            horizontal
            showsHorizontalScrollIndicator={false}
            data={places}
            renderItem={({item}) => <Card place={item} />}
          /> */}
          <FlatList
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={true}
            data={places}
            renderItem={({item}) => <RecommendedCard place={item} />}
          />
        </View>
    </View>
    </>);
};

const style = StyleSheet.create({
  header: {
    paddingVertical: 20,
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: COLORS.primary,
  },
  headerTitle: {
    color: COLORS.white,
    fontWeight: 'bold',
    fontSize: 23,
  },
  cardImage: {
    height: 220,
    width: width / 2,
    marginRight: 20,
    padding: 10,
    overflow: 'hidden',
    borderRadius: 10,
  },
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
export default HomeScreen;

