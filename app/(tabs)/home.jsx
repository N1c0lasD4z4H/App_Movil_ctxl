import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Provider as PaperProvider, Button, ActivityIndicator } from 'react-native-paper';
import CustomButton from '../../components/CustomButton'; // Asegúrate de tener tu CustomButton en el mismo directorio

const Drawer = createDrawerNavigator();

const HomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.title}>Estadísticas</Text>
        {/* Aquí puedes agregar tus estadísticas */}
        <Text style={styles.stats}>Estadística 1: 123</Text>
        <Text style={styles.stats}>Estadística 2: 456</Text>

        <CustomButton 
          title="Ver Inventarios"
          handlePress={() => navigation.navigate('Inventarios')}
          containerStyles={styles.button}
        />

        <CustomButton 
          title="Ver Pedidos"
          handlePress={() => navigation.navigate('Pedidos')}
          containerStyles={styles.button}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

const InventariosScreen = () => (
  <SafeAreaView style={styles.container}>
    <Text style={styles.title}>Inventarios de Telas</Text>
    {/* Aquí puedes agregar detalles de inventarios */}
  </SafeAreaView>
);

const PedidosScreen = () => (
  <SafeAreaView style={styles.container}>
    <Text style={styles.title}>Pedidos</Text>
    {/* Aquí puedes agregar detalles de pedidos */}
  </SafeAreaView>
);

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Drawer.Navigator>
          <Drawer.Screen name="Inicio" component={HomeScreen} />
          <Drawer.Screen name="Inventarios" component={InventariosScreen} />
          <Drawer.Screen name="Pedidos" component={PedidosScreen} />
        </Drawer.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  content: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  stats: {
    fontSize: 18,
    marginVertical: 8,
  },
  button: {
    marginVertical: 10,
  },
});
