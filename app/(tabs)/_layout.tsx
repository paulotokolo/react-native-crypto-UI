import { FontAwesome6 } from '@expo/vector-icons';
import { Tabs } from 'expo-router';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';

export default function TabLayout() {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: 'blue' }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Training',
          headerShown: false,
          tabBarIcon: ({ color }) => <MaterialIcons name="inbox" size={23} color={color} />,
        }}
      />
      <Tabs.Screen
        name="diet"
        options={{
          title: 'Diet',
          tabBarIcon: ({ color }) => <FontAwesome6 name="bowl-food" size={23} color={color} />,
        }}
      />
      <Tabs.Screen
        name="trade"
        options={{
          title: 'Trade',
          headerTitle: 'Trade',
          headerStyle: {
            backgroundColor: '#0078D7', // Set the header background color to blue
          },
          headerTintColor: '#fff', // Optionally, set the header text color to white
          tabBarIcon: ({ color }) => <FontAwesome size={23} name="bar-chart-o" color={color} />,
        }}
      />

      {/* hide this from the tab */}
      <Tabs.Screen
        name="profile"
        options={{
          href: null
        }}
      />
    </Tabs>
  );
}
