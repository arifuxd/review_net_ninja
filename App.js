import { useState } from 'react';
import Home from './screens/Home';
import About from './screens/About';
import ReviewDetails from './screens/ReviewDetails'
import {useFonts} from 'expo-font'
import AppLoading from 'expo-app-loading';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { SafeAreaView } from 'react-native-web';


const Stack = createNativeStackNavigator();


export default function App() {

  const [loaded] = useFonts({
    'nunito-regular' : require('./assets/fonts/Nunito-Regular.ttf'),
    'nunito-bold' : require('./assets/fonts/Nunito-Bold.ttf')
  })

  if(!loaded){
    return <AppLoading/>;
  }

return (
  <NavigationContainer>
  <Stack.Navigator>
    <Stack.Screen name="Home" component={Home} options={{ title: 'Overview' }} />
    <Stack.Screen name="ReviewDetails" component={ReviewDetails} />
  </Stack.Navigator>
</NavigationContainer>
  )

}
