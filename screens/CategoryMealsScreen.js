import React from 'react'
import { Text, View, StyleSheet, Button, Platform } from 'react-native'

import { CATEGORIES } from '../data/dummy-data'
import Colors from '../constants/Colors'

const CategoryMealsScreen = props => {
  console.log('CategoryMealsScreen')
  const catId = props.navigation.getParam('categoryId')
  const selectedCategory = CATEGORIES.find(cat => cat.id === catId)

  return (
    <View style={styles.screen}>
      <Text>The CategoryMealsScreen Screen</Text>
      <Text>{selectedCategory.title}</Text>
      <View style={styles.button}>
        <Button
          title={catId}
          color={selectedCategory.color}
          onPress={() => {
            props.navigation.push({ routeName: 'MealDetails' })
          }}
        />
      </View>
    </View>
  )
}

CategoryMealsScreen.navigationOptions = navigationData => {
  const catId = navigationData.navigation.getParam('categoryId')

  const selectedCategory = CATEGORIES.find(cat => cat.id === catId)

  return {
    headerTitle: selectedCategory.title,
    headerStyle: {
      backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : ''
    },
    headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor
  }
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  button: {
    marginTop: '3%',
    width: '25%',
    borderColor: 'black',
    borderWidth: 3,
    borderRadius: 100
  }
})

export default CategoryMealsScreen
