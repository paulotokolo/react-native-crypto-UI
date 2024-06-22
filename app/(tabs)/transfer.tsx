import { Image, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import profile from '@/assets/images/profile-1.jpg';

const transfer = () => {
  return (
    <View className='bg-black h-full'>
        <View className='justify-center align-middle self-center'>
            <Image source={profile} className='rounded-2xl h-20 w-20' />
        </View>
        <View>
            <Text className=' text-white text-lg text-center'>Michael Lockwood</Text>
        </View>
        <TextInput className='w-full h-20'></TextInput>
    </View>
  )
}

export default transfer
