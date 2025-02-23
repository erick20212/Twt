import React from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router';
import Colors from '@/constants/Colors';
import { useColorScheme } from '@/components/useColorScheme';

function TabBarIcon(props: { name: React.ComponentProps<typeof FontAwesome>['name']; color: string; }) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
      }}
    >
      {/* Pestaña 1: Inicio */}
      <Tabs.Screen
        name="index"
        options={{
          title: 'Inicio',
          tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
        }}
      />

      {/* Pestaña 2: Búsqueda (Asegúrate de que el archivo sea home.tsx en minúsculas) */}
      <Tabs.Screen
        name="Home"
        options={{
          title: 'Buscar',
          tabBarIcon: ({ color }) => <TabBarIcon name="search" color={color} />,
        }}
      />
      

      {/* Pestaña 3: Perfil (Asegúrate de que el archivo sea profile.tsx en minúsculas) */}
      <Tabs.Screen
        name="Profile"
        options={{
          title: 'Perfil',
          tabBarIcon: ({ color }) => <TabBarIcon name="user" color={color} />,
        }}
      />
      {/**BUSQUEDA CON IA */}
      <Tabs.Screen
  name="Ia"
  options={{
    title: 'IA',
    tabBarIcon: ({ color }) => <TabBarIcon name="microchip" color={color} />,
  }}
/>


      
    </Tabs>
  );
}
