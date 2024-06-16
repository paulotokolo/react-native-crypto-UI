import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import TextComponent from '@/components/Text'

const Trade = () => {
  return (
    <View>
      <View className='w-full p-2 border'>
        <TextComponent>Balance:</TextComponent>
        <Text className='text-[14.5px] font-bold py-1'>Balance:</Text>
        <Text className='text-[14.5px] font-bold py-1'>Equity:</Text>
        <Text className='text-[14.5px] font-bold py-1'>Free Margin:</Text>
        <Text className='text-[14.5px] font-bold py-1'>Margin Level (%):</Text>
        <Text className='text-[14.5px] font-bold py-1'>Margin:</Text>
      </View>
      <Link href="/modal">
        <Text>Present modal</Text>
      </Link>
    </View>
  )
}

export default Trade
