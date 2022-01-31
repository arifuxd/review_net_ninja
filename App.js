import { useState } from 'react';
import Home from './screens/Home';
import {useFonts} from 'expo-font'
import AppLoading from 'expo-app-loading';
import Navigator from './routes/homeStack'
export default function App() {

  const [loaded] = useFonts({
    'nunito-regular' : require('./assets/fonts/Nunito-Regular.ttf'),
    'nunito-bold' : require('./assets/fonts/Nunito-Bold.ttf')
  })

  if(!loaded){
    return <AppLoading/>;
  }

return (
  <Navigator />
  )

}
