import { Text, View, Image, StyleSheet } from 'react-native';
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView } from 'react-native-gesture-handler';
import { images } from '../constants';
import CustomButton from '../components/CustomButton'; 
import { Redirect, router } from 'expo-router';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0', // Replace with your desired primary color
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
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 5,
  },
  textHighlight: {
    color: '#8e44ad', // Purple color
  },
  textSubheading: {
    fontSize: 14,
    color: '#d3d3d3', // Light gray
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
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
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
            containerStyles={styles.buttonContainer} // Pass styles as an object
          />
        </View>
      </ScrollView>
      <StatusBar backgroundColor='#161622' style='light'/>
    </SafeAreaView>
  );
}
