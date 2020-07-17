import React from 'react'
import { Text, View, StyleSheet, Button } from 'react-native'

const CategoriesScreen = props => {
  console.log('Props available: ')
  console.log(props)
  return (
    <View style={styles.screen}>
      <Text>The Categories Screen</Text>
      <View style={styles.button}>
        <Button
          title='Meals'
          onPress={() => {
            props.navigation.navigate({ routeName: 'CategoryMeals' })
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

export default CategoriesScreen
