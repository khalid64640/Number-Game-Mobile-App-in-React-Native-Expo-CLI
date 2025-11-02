import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Text } from "react-native";



export default function App() {

  // const [fontsloaded] = useFonts({
  //   'bahij-nazanin': require('./assets/fonts/bahij-nazanin.ttf'),
  //   'bahij-nazanin-bold': require('./assets/fonts/bahijbold.ttf')
  // });

  // if(!fontsloaded){
  //   return <AppLoading />
  // }



  return (
    <View style = {styles.container}>
      <Text>Hello World!!!!!</Text>
      <StatusBar style="auto" /> 
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }

});


