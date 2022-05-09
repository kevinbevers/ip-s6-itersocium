// import { StatusBar } from 'expo-status-bar';
// import {Card, View, Text, Button} from 'react-native-ui-lib';

// export default function HomeScreen() {
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
  StyleSheet,
  Text,
  FlatList,
  Dimensions,
} from 'react-native';
import {View} from 'react-native-ui-lib';
import { StatusBar } from 'expo-status-bar';
import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../consts/colors';
import places from '../consts/places';
import RecommendedCard from '../components/RecommendedCard';
const {width} = Dimensions.get('screen');
import { useQuery, gql } from 'urql';

const TestQuery = gql`
query TestQuery {
  test {
    description
    tableID
  }
}
`;


const HomeScreen = ({navigation}) => {
  const [result] = useQuery({
    query: TestQuery,
  });

  const { data, fetching, error } = result;

  if (fetching) {
    return <View flex center useSafeArea={true}><Text>Loading ....</Text></View>;
  }
  if (error) {
    return <View flex center useSafeArea={true}><Text>Oh no... {error.message}</Text></View>;
  }
  
  return (<>
  <View backgroundColor={COLORS.primary} useSafeArea={true}>
    <StatusBar style="auto" backgroundColor={COLORS.primary} />
    </View>
    <View flex useSafeArea={true}>
        <View paddingB-10 paddingH-20 style={{backgroundColor: COLORS.primary}}>
            <Text style={style.headerTitle}>Popular travels</Text>
        </View>
        <View backgroundColor={COLORS.white}>
          <FlatList
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={true}
            data={places}
            renderItem={({item}) => <RecommendedCard navigation={navigation} place={item} />}
          />
        </View>
    </View>
    </>);
};

const style = StyleSheet.create({
  headerTitle: {
    color: COLORS.white,
    fontWeight: 'bold',
    fontSize: 23,
  },
});
export default HomeScreen;

