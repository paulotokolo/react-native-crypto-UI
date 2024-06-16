import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const diet = () => {
  return (
    <View>
      <Link href="/workouts"><Text className='text-blue-500'>Workouts</Text></Link>
    </View>
  )
}

export default diet

const styles = StyleSheet.create({})