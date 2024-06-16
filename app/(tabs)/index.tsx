import { Text, View, ScrollView, ImageBackground  } from 'react-native';
import React from 'react';
import { SafeAreaView  } from 'react-native-safe-area-context';
import TextComponent from '@/components/Text';


const Index = () => {
  return (
    <SafeAreaView className='bg-white'>
      <ScrollView>
        <View className='px-3 border'>
            <TextComponent>Balance:</TextComponent>
        </View>

        <View className='grid'>
            <View className='h-[40px] w-[40px] grid-cols-3 bg-black border-2 border-black' style={{ marginHorizontal: 20, marginVertical: 5, overflow: 'hidden' }}></View>
            <View className='h-[40px] w-[40px] grid-cols-3 bg-purple-600 border-2 border-black' style={{ marginHorizontal: 20, marginVertical: 5, overflow: 'hidden' }}></View>
        </View>
        
        <View className='border border-black rounded-lg h-32 flex justify-center items-center' style={{ marginHorizontal: 20, marginVertical: 5, overflow: 'hidden' }}>
            <ImageBackground source={{uri: 'https://athleanx.com/wp-content/uploads/2021/09/MAIN-IMAGE-300x169.png'}} style={{ width: '100%', height: '100%' }}>
                {/* <Text className='text-center text-white'>Tricep Workout</Text> */}
            </ImageBackground>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Index;
