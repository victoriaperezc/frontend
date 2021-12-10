import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react'
import { StackNavigator } from './src/navigator/StackNavigator';
import { useFonts } from 'expo-font';
import {
  WorkSans_100Thin,
  WorkSans_200ExtraLight,
  WorkSans_300Light,
  WorkSans_400Regular,
  WorkSans_500Medium,
  WorkSans_600SemiBold,
  WorkSans_700Bold,
  WorkSans_800ExtraBold,
  WorkSans_900Black,
  WorkSans_100Thin_Italic,
  WorkSans_200ExtraLight_Italic,
  WorkSans_300Light_Italic,
  WorkSans_400Regular_Italic,
  WorkSans_500Medium_Italic,
  WorkSans_600SemiBold_Italic,
  WorkSans_700Bold_Italic,
  WorkSans_800ExtraBold_Italic,
  WorkSans_900Black_Italic
} from '@expo-google-fonts/work-sans';
import {
  Montserrat_100Thin,
  Montserrat_100Thin_Italic,
  Montserrat_200ExtraLight,
  Montserrat_200ExtraLight_Italic,
  Montserrat_300Light,
  Montserrat_300Light_Italic,
  Montserrat_400Regular,
  Montserrat_400Regular_Italic,
  Montserrat_500Medium,
  Montserrat_500Medium_Italic,
  Montserrat_600SemiBold,
  Montserrat_600SemiBold_Italic,
  Montserrat_700Bold,
  Montserrat_700Bold_Italic,
  Montserrat_800ExtraBold,
  Montserrat_800ExtraBold_Italic,
  Montserrat_900Black,
  Montserrat_900Black_Italic
} from '@expo-google-fonts/montserrat';

import AppLoading from 'expo-app-loading';

export const App = () => {

  const [fontsLoader] = useFonts({
    MontserratThin: Montserrat_100Thin,
    MontserratExtraLight: Montserrat_200ExtraLight,
    MontserratLight: Montserrat_300Light,
    Montserrat: Montserrat_400Regular,
    MontserratBold: Montserrat_700Bold,
    MontserratSemiBold: Montserrat_600SemiBold,
    MontserratBoldItalic: Montserrat_700Bold_Italic,
    WorkSansThin: WorkSans_100Thin,
    WorkSansLight: WorkSans_300Light,    
    WorkSansExtraLight: WorkSans_200ExtraLight,
    WorkSans: WorkSans_400Regular,
    WorkSansBold: WorkSans_700Bold,
    WorkSansSemiBold: WorkSans_600SemiBold,
    WorkSansMedium: WorkSans_500Medium

  })

  return (
    <NavigationContainer>{
      <StackNavigator />
    }</NavigationContainer>

  )
}

export default App;
