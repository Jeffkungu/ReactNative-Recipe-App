import React from 'react'
import { Text, View, StyleSheet, Button } from 'react-native'

const CategoryMealsScreen = props => {
  console.log(props)
  return (
    <View style={styles.screen}>
      <Text>The CategoryMealsScreen Screen</Text>
      <View style={styles.button}>
        <Button
          title='Details'
          onPress={() => {
            props.navigation.push({ routeName: 'MealDetails' })
          }}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  button: {
    marginTop: '3%',
    borderColor: 'black',
    borderWidth: 3,
    borderRadius: 100
  }
})

export default CategoryMealsScreen
