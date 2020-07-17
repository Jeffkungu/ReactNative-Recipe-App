import React, { useState } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import * as Font from 'expo-font'
import { AppLoading } from 'expo'

import MealsNavigator from './navigation/MealsNavigator'

const fetchFonts = () => {
  return Font.loadAsync({
    'roboto-regular': require('./assets/fonts/Roboto-Regular.ttf'),
    'roboto-bold': require('./assets/fonts/Roboto-Bold.ttf')
  })
}

export default function App () {
  const [fontsLoaded, setFontLoaded] = useState(false)

  if (!fontsLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setFontLoaded(true)}
      />
    )
  }

  return <MealsNavigator />
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
