import { StatusBar } from 'expo-status-bar';
import {Card, View, Text, Button} from 'react-native-ui-lib';

export default function App() {
  return (<>
    <StatusBar style="auto" />
    <View flex bg-grey70 useSafeArea={true}>
      <View marginH-15>
        
        <Card height={100} center padding-card marginB-s4>
          <Text body>This is an example card </Text>
        </Card>

        <Button label="Button" body bg-primaryColor square></Button>
        </View>
      </View>
      </>);
}
