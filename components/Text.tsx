import { Text } from 'react-native';
import React, { useEffect } from 'react';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

interface TextComponentProps {
  children: React.ReactNode; // Define the type for children
}

const TextComponent: React.FC<TextComponentProps> = ({ children }) => {
  const [fontsLoaded, fontError] = useFonts({
    'trebuc': require('../fonts/trebuchet-ms-2/trebuc.ttf'),
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
    <Text style={{ fontFamily: 'trebuc' }}>{children}</Text>
  );
};

export default TextComponent;
