import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform } from 'react-native';
import { Link } from 'expo-router';


const Index = () => {
  const [emailFocused, setEmailFocused] = useState(false);
  const [passwordFocused, setPasswordFocused] = useState(false);
 

  function handleSubmit() {
    
  }

  return (
    <KeyboardAvoidingView 
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      className="flex-1"
    >
      <View className="flex-1 justify-center px-8 font-family-karla">
        {/* Login Section */}
        <View className="flex justify-center items-center pb-12">
          <TouchableOpacity className="bg-black p-4">
            <Text className="text-white font-bold text-xl">Logo</Text>
          </TouchableOpacity>
        </View>

        <View className="flex flex-col justify-center my-auto">
          <Text className="text-center text-3xl mb-4">Welcome.</Text>
          <View className="flex flex-col">
            <View className="flex flex-col pt-4">
              <Text className="text-lg">Email</Text>
              <TextInput 
                placeholder="your@email.com"
                className={`shadow border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none ${emailFocused ? 'border-black border-2' : 'border-gray-300'}`}
                keyboardType="email-address"
                autoCapitalize="none"
                onFocus={() => setEmailFocused(true)}
                onBlur={() => setEmailFocused(false)}
              />
            </View>

            <View className="flex flex-col pt-4">
              <Text className="text-lg">Password</Text>
              <TextInput 
                placeholder="Password"
                className={`shadow border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none ${passwordFocused ? 'border-black border-2' : 'border-gray-300'}`}
                secureTextEntry
                onFocus={() => setPasswordFocused(true)}
                onBlur={() => setPasswordFocused(false)}
              />
            </View>

            <TouchableOpacity className="bg-black p-2 mt-8" onPress={handleSubmit}>
              <Text className="text-white font-bold text-lg text-center">Log In</Text>
            </TouchableOpacity>
          </View>
          <View className="text-center pt-12 pb-12">
            <Text>Don't have an account? <Link href="/workouts"><Text className="underline font-semibold">Register here.</Text></Link></Text>
          </View>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default Index;
