import { Text, View, Image, StyleSheet } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView } from 'react-native-gesture-handler';
import { images } from '../constants';
import CustomButton from '../components/CustomButton'; 
import { router } from 'expo-router';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000', // Fondo negro como en SignIn
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  image: {
    resizeMode: 'contain',
  },
  logo: {
    width: 130,
    height: 84,
  },
  cards: {
    maxWidth: 380,
    width: '100%',
    height: 300,
  },
  textHeading: {
    fontSize: 24,
    color: '#FFFFFF', // Blanco como en SignIn
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 5,
  },
  textHighlight: {
    color: '#6A0D91', // Morado como en SignIn
  },
  textSubheading: {
    fontSize: 14,
    color: '#B5B5B5', // Gris claro como en SignIn
    textAlign: 'center',
    marginTop: 7,
  },
  imagePath: {
    width: 136,
    height: 15,
    position: 'absolute',
    bottom: -2,
    right: -8,
  },
  buttonContainer: {
    width: '100%',
    marginTop: 7,
  },
});

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaView style={styles.container}>
        <StatusBar style="light" backgroundColor="#000000" />
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
          <View style={styles.centeredView}>
            <Image
              source={images.logo}
              style={[styles.image, styles.logo]}
            />
            <Image
              source={images.cards}
              style={[styles.image, styles.cards]}
            />
            <View style={{ position: 'relative', marginTop: 5 }}>
              <Text style={styles.textHeading}>
                Descubre Todo de Tipo de Uniformes Confeccionados!!{' '}
                <Text style={styles.textHighlight}>Textiles la Y</Text>
              </Text>
              <Image
                source={images.path}
                style={styles.imagePath}
              />
            </View>
            <Text style={styles.textSubheading}>
              Donde las mejores Prendas Textiles son Fabricadas!!
            </Text>
            <CustomButton
              handlePress={() => router.push('/sign-in')}
              containerStyles={styles.buttonContainer} // Ajusta según sea necesario
            />
          </View>
        </ScrollView>
        <StatusBar backgroundColor='#000000' style='light'/>
      </SafeAreaView>
    </GestureHandlerRootView>
  );
}
