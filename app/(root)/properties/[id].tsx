import { View, Text } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router/build/hooks'

const Property = () => {
    const {id} = useLocalSearchParams()
  return (
    <View>
      <Text>{id}</Text>
    </View>
  )
}

export default Property