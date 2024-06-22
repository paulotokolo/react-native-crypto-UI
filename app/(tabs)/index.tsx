import { Text, View, ScrollView, Image, TouchableOpacity, Touchable  } from 'react-native';
import { SafeAreaView  } from 'react-native-safe-area-context';
import React, { useEffect } from 'react';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import bitcoin from '@/assets/images/bitcoin.png';
import tether from '@/assets/images/tether.png';
import ethereum from '@/assets/images/ethereum.png';
import avalanche from '@/assets/images/avalanche.png';
import polkadot from '@/assets/images/polkadot.png';
import shiba from '@/assets/images/shiba-inu.png';
import solana from '@/assets/images/solana.png';
import tron from '@/assets/images/tron.png';
import xrp from '@/assets/images/xrp.png';
import binance from '@/assets/images/binance.png';
import copy from '@/assets/images/copy.png';
import arrow from '@/assets/images/up-arrow.png';
import { router } from 'expo-router';

const Index = () => {
  const [fontsLoaded, fontError] = useFonts({
    'trebuc': require('../../fonts/trebuchet-ms-2/trebuc.ttf'),
  });

  useEffect(() => {
    if (!fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null; // Return null or a loading indicator if fonts are not loaded yet
  }

  return (
    <SafeAreaView>
      <ScrollView className='h-full w-full bg-black'>
        <View className='px-3'>
          {/* Balance Header */}
          <View>
            <Text className='text-white font-[trebuc]'>Balance</Text>
          </View>
          {/* Account Balance Section */}
          <TouchableOpacity onPress={() => router.push('/transfer')} className='flex-row items-center overflow-scroll'>
            <Text className='text-white font-[trebuc] py-3 text-[55px]'>$3,452.87</Text>
            <Text className='text-green-400 bg-gray-700 rounded-2xl font-[trebuc] ml-2 w-[55px] h-6'>+0.12% <Image source={arrow} className='w-10 h-10' /></Text>
          </TouchableOpacity>
          {/* Address Section */}
          <View className='p-4 bg-gray-700 h-[80px] rounded-2xl'>
            <View>
              <Text className='text-gray-400 font-[trebuc]'>Your address</Text>
            </View>
            <View className='flex-row justify-between'>
              <Text className='text-white font-[trebuc] py-3'>yx081trh116Fgrtrh116...hfUew</Text>
              <TouchableOpacity className='bg-gray-500 w-10 h-10 rounded-xl'><Image source={copy} className='my-2 mx-2 w-5 h-5' /></TouchableOpacity>
            </View>
          </View>
          {/* Assets & NFTs Section */}
          <View className='pt-7 pb-7 flex-row'>
            <TouchableOpacity className='bg-gray-700 rounded-2xl h-8 w-20 mr-2'>
              <Text className='text-white px-4 text-center py-1 font-[trebuc]'>Assets</Text>
            </TouchableOpacity>
            <TouchableOpacity className='border border-gray-700 rounded-2xl h-8 w-20 ml-2'>
              <Text className='text-white px-4 text-center py-1 font-[trebuc]'>NFTs</Text>
            </TouchableOpacity>
          </View>

          {/* bitcoin symbol section  */}
          <TouchableOpacity className='flex-row items-center pb-4'>
            <Image source={bitcoin} className='w-10 h-10 mr-2' />
            <View className='flex-1'>
              <View className='pb-1 flex-row justify-between'>
                <Text className='text-white font-[trebuc] text-[16px'>Bitcoin</Text>
                <Text className='text-white font-[trebuc] text-[16px'>$261,000.00</Text>
              </View>
              <View className='flex-row justify-between'>
                <Text className='text-white font-[trebuc] text-[16px'>BTC</Text>
                <Text className='text-white font-[trebuc] text-[16px'>32.45863</Text>
              </View>
            </View>
          </TouchableOpacity>

          {/* ethereum symbol section  */}
          <TouchableOpacity className='flex-row items-center pb-4'>
            <Image source={ethereum} className='w-10 h-10 mr-2' />
            <View className='flex-1'>
              <View className='pb-1 flex-row justify-between'>
                <Text className='text-white font-[trebuc] text-[16px'>Ethereum</Text>
                <Text className='text-white font-[trebuc] text-[16px'>$71,694.00</Text>
              </View>
              <View className='flex-row justify-between'>
                <Text className='text-white font-[trebuc] text-[16px'>ETH</Text>
                <Text className='text-white font-[trebuc] text-[16px'>13.40252</Text>
              </View>
            </View>
          </TouchableOpacity>

          {/* tether symbol section  */}
          <TouchableOpacity className='flex-row items-center pb-4'>
            <Image source={tether} className='w-10 h-10 mr-2' />
            <View className='flex-1'>
              <View className='pb-1 flex-row justify-between'>
                <Text className='text-white font-[trebuc] text-[16px'>Tether</Text>
                <Text className='text-white font-[trebuc] text-[16px'>$2,982.34</Text>
              </View>
              <View className='flex-row justify-between'>
                <Text className='text-white font-[trebuc] text-[16px'>USDT</Text>
                <Text className='text-white font-[trebuc] text-[16px'>3,4543.40</Text>
              </View>
            </View>
          </TouchableOpacity>

          {/* Polkadot symbol section  */}
          <TouchableOpacity className='flex-row items-center pb-4'>
            <Image source={polkadot} className='w-10 h-10 mr-2' />
            <View className='flex-1'>
              <View className='pb-1 flex-row justify-between'>
                <Text className='text-white font-[trebuc] text-[16px'>Polkadot</Text>
                <Text className='text-white font-[trebuc] text-[16px'>$15,652.48</Text>
              </View>
              <View className='flex-row justify-between'>
                <Text className='text-white font-[trebuc] text-[16px'>DOT</Text>
                <Text className='text-white font-[trebuc] text-[16px'>43,40</Text>
              </View>
            </View>
          </TouchableOpacity>

          {/* avalanche symbol section  */}
          <TouchableOpacity className='flex-row items-center pb-4'>
            <Image source={avalanche} className='w-10 h-10 mr-2' />
            <View className='flex-1'>
              <View className='pb-1 flex-row justify-between'>
                <Text className='text-white font-[trebuc] text-[16px'>Avalanche</Text>
                <Text className='text-white font-[trebuc] text-[16px'>$100,546.98</Text>
              </View>
              <View className='flex-row justify-between'>
                <Text className='text-white font-[trebuc] text-[16px'>AVAX</Text>
                <Text className='text-white font-[trebuc] text-[16px'>1,492.04</Text>
              </View>
            </View>
          </TouchableOpacity>

          {/* binance symbol section  */}
          <TouchableOpacity className='flex-row items-center pb-4'>
            <Image source={binance} className='w-10 h-10 mr-2' />
            <View className='flex-1'>
              <View className='pb-1 flex-row justify-between'>
                <Text className='text-white font-[trebuc] text-[16px'>Binance Coin</Text>
                <Text className='text-white font-[trebuc] text-[16px'>$154,675.65</Text>
              </View>
              <View className='flex-row justify-between'>
                <Text className='text-white font-[trebuc] text-[16px'>BNB</Text>
                <Text className='text-white font-[trebuc] text-[16px'>773,813</Text>
              </View>
            </View>
          </TouchableOpacity>

          {/* shiba symbol section  */}
          <TouchableOpacity className='flex-row items-center pb-4'>
            <Image source={shiba} className='w-10 h-10 mr-2' />
            <View className='flex-1'>
              <View className='pb-1 flex-row justify-between'>
                <Text className='text-white font-[trebuc] text-[16px'>Shiba Inu</Text>
                <Text className='text-white font-[trebuc] text-[16px'>$0.5454675.65</Text>
              </View>
              <View className='flex-row justify-between'>
                <Text className='text-white font-[trebuc] text-[16px'>SHIBA</Text>
                <Text className='text-white font-[trebuc] text-[16px'>2000</Text>
              </View>
            </View>
          </TouchableOpacity>

          {/* solana symbol section  */}
          <TouchableOpacity className='flex-row items-center pb-4'>
            <Image source={solana} className='w-10 h-10 mr-2' />
            <View className='flex-1'>
              <View className='pb-1 flex-row justify-between'>
                <Text className='text-white font-[trebuc] text-[16px'>Solana</Text>
                <Text className='text-white font-[trebuc] text-[16px'>$2,655</Text>
              </View>
              <View className='flex-row justify-between'>
                <Text className='text-white font-[trebuc] text-[16px'>SOL</Text>
                <Text className='text-white font-[trebuc] text-[16px'>5000</Text>
              </View>
            </View>
          </TouchableOpacity>

          {/* tron symbol section  */}
          <TouchableOpacity className='flex-row items-center pb-4'>
            <Image source={tron} className='w-10 h-10 mr-2' />
            <View className='flex-1'>
              <View className='pb-1 flex-row justify-between'>
                <Text className='text-white font-[trebuc] text-[16px'>Tron</Text>
                <Text className='text-white font-[trebuc] text-[16px'>$9,454</Text>
              </View>
              <View className='flex-row justify-between'>
                <Text className='text-white font-[trebuc] text-[16px'>TRON</Text>
                <Text className='text-white font-[trebuc] text-[16px'>900</Text>
              </View>
            </View>
          </TouchableOpacity>

          {/* XRP symbol section  */}
          <TouchableOpacity className='flex-row items-center pb-4'>
            <Image source={xrp} className='w-10 h-10 mr-2 bg-white rounded-3xl' />
            <View className='flex-1'>
              <View className='pb-1 flex-row justify-between'>
                <Text className='text-white font-[trebuc] text-[16px'>Ripple</Text>
                <Text className='text-white font-[trebuc] text-[16px'>$75,454</Text>
              </View>
              <View className='flex-row justify-between'>
                <Text className='text-white font-[trebuc] text-[16px'>XRP</Text>
                <Text className='text-white font-[trebuc] text-[16px'>9000</Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Index;
