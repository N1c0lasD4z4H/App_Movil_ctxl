import { Text, TextInput, TouchableOpacity, View, StyleSheet, ScrollView } from 'react-native';
import { Link } from 'expo-router';

const SignIn = () => {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.innerContainer}>
        <Text style={styles.title}>Inicia Sesión</Text>
        
        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="#B5B5B5"
        />
        <TextInput
          style={styles.input}
          placeholder="Contraseña"
          placeholderTextColor="#B5B5B5"
          secureTextEntry
        />

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Iniciar Sesión</Text>
        </TouchableOpacity>
        
        <View style={styles.footer}>
          <Text style={styles.footerText}>No tienes cuenta?</Text>
          <Link href="/(auth)/sign-up">
            <Text style={styles.footerLink}>Regístrate aquí!!</Text>
          </Link>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
  },
  innerContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    padding: 16,
  },
  title: {
    fontSize: 32,
    color: '#6A0D91',
    fontWeight: 'bold',
    marginBottom: 40,
    textAlign: 'center',
  },
  input: {
    width: '100%',
    padding: 15,
    borderRadius: 8,
    backgroundColor: '#333333',
    color: '#FFFFFF',
    marginBottom: 16,
  },
  button: {
    width: '100%',
    padding: 15,
    borderRadius: 8,
    backgroundColor: '#6A0D91',
    alignItems: 'center',
    marginTop: 16,
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  footer: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  footerText: {
    color: '#B5B5B5',
  },
  footerLink: {
    color: '#6A0D91',
    marginLeft: 5,
    fontWeight: 'bold',
  },
});

export default SignIn;
