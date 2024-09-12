import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

const SignIn = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.innerContainer}>
        <Text style={styles.title}>Sign In</Text>
        
        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="#B5B5B5" // Placeholder color
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#B5B5B5" // Placeholder color
          secureTextEntry
        />

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Sign In</Text>
        </TouchableOpacity>
        
        <View style={styles.footer}>
          <Text style={styles.footerText}>Don't have an account?</Text>
          <TouchableOpacity>
            <Text style={styles.footerLink}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000', // Fondo negro
  },
  innerContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    padding: 16,
  },
  title: {
    fontSize: 32,
    color: '#6A0D91', // Color morado
    fontWeight: 'bold',
    marginBottom: 40,
    textAlign: 'center',
  },
  input: {
    width: '100%',
    padding: 15,
    borderRadius: 8,
    backgroundColor: '#333333', // Fondo gris oscuro para los inputs
    color: '#FFFFFF', // Texto blanco en los inputs
    marginBottom: 16,
  },
  button: {
    width: '100%',
    padding: 15,
    borderRadius: 8,
    backgroundColor: '#6A0D91', // Color morado
    alignItems: 'center',
    marginTop: 16,
  },
  buttonText: {
    color: '#FFFFFF', // Texto blanco en el botón
    fontWeight: 'bold',
  },
  footer: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  footerText: {
    color: '#B5B5B5', // Color gris claro
  },
  footerLink: {
    color: '#6A0D91', // Color morado
    marginLeft: 5,
    fontWeight: 'bold',
  },
});

export default SignIn;
