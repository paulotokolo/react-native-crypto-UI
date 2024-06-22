import { Tabs } from 'expo-router';
import bank from '@/assets/images/bank.png';
import home from '@/assets/images/home.png';
import message from '@/assets/images/email.png';
import profile from '@/assets/images/user.png';
import fullscreen from '@/assets/images/back.png';
import { Image, TouchableOpacity } from 'react-native';

export default function TabLayout() {
  return (
    <Tabs screenOptions={{ headerStyle: { backgroundColor: 'black' }, tabBarStyle: { backgroundColor: 'black', borderColor: 'black' }, tabBarActiveTintColor: 'white' }} >
      <Tabs.Screen
        name="index"
        options={{
          tabBarShowLabel: false,
          title: '',
          headerShown: false,
          tabBarIcon: ({ focused }) => <Image source={home} className='w-6 h-6' />,
        }}
      />
      <Tabs.Screen
        name="bank"
        options={{
          tabBarShowLabel: false,
          title: '',
          headerShown: false,
          tabBarIcon: ({ focused }) => <Image source={bank} className='w-6 h-6' />,
        }}
      />
      <Tabs.Screen
        name="message"
        options={{
          tabBarShowLabel: false,
          title: '',
          headerShown: false,
          tabBarIcon: ({ focused }) => <Image source={message} className='w-6 h-6' />,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          tabBarShowLabel: false,
          title: '',
          headerShown: false,
          tabBarIcon: ({ focused }) => <Image source={profile} className='w-6 h-6' />,
        }}
      />

      <Tabs.Screen
        name="transfer"
        options={{
          href: null,
          title: 'Transfer',
          headerTintColor: 'white',
          headerTitleAlign: 'center',
          headerRight: () => (
            <TouchableOpacity className='bg-gray-500 w-10 h-10 rounded-xl'><Image source={fullscreen} className='my-2 mx-2 w-5 h-5' /></TouchableOpacity>
          )
        }}
      />
    </Tabs>
  );
}
