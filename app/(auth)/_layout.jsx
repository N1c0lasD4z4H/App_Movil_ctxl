import React from 'react';
import { View, Text } from 'react-native';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar'; // Importa solo desde 'expo-status-bar'

const AuthLayout = () => {
  return (
    <>
      <Stack>
        <Stack.Screen
          name="sign-in"
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name="sign-up"
          options={{
            headerShown: false
          }}
        />
      </Stack>

      <StatusBar
        backgroundColor="#161622" // Color de fondo de la barra de estado
        style="light" // Estilo del texto de la barra de estado
      />
    </>
  );
};

export default AuthLayout;
