import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const Message = () => {
  return (
    <SafeAreaView>
      <View>
        <Text className='text-blue-500'>message</Text>
      </View>
    </SafeAreaView>
  )
}

export default Message
