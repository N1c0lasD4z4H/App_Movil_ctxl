import { Text, TextInput, TouchableOpacity, View, StyleSheet, ScrollView, Alert } from 'react-native';
import { Link, router } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';

import { images } from '../../constants';
import FormField from '../../components/FormField';
import CustomButton  from  '../../components/CustomButton'
import { createUser } from '../../lib/appwrite';

const SignUp = () => {
  const [form, setForm] = useState({
    username: '',
    email: '',
    password: ''
  })

  const [isSubmitting, setisSubmitting] = useState(false)
  const  submit  = async () =>{
    if(!form.username ||  !form.email || !form.password){
      Alert.alert('Error', 'por favor Son necesarios todos los campos')
    }

    setisSubmitting(true)
    try {
      const result  = await createUser(form.email, form.password, form.username)

      router.replace('/home')
    } catch (error) {
      Alert.alert('Error', error.message)
    } finally{
      setisSubmitting(false)
    }
  }
  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView>
        <View className="w-full justify-center min-h-[85vh] px-4 my-6">
        <Image source={images.logo} resizeMode='contain' className="w-[115px] h-[35px]"/>
        <Text className="text-2xl text-white text-semibold mt-10 font-psemibold">Registrate</Text>
        </View>

        <FormField
        title="Username"
        value={form.username}
        handleChangeText={(e) => setForm({ ...form, username: e })}
        otherStyles="mt-10"
        />

        <FormField
        title="Email"
        value={form.email}
        handleChangeText={(e) => setForm({ ...form, email: e })}
        otherStyles="mt-7"
        keyboardType="email-address"
        />

        <FormField
        title="Password"
        value={form.password}
        handleChangeText={(e) => setForm({ ...form, password: e })}
        otherStyles="mt-7"
        />

        <CustomButton
        title= "Ingresa"
        handlePress={submit}
        containerStyles="mt-7"
        isLoading={isSubmitting}
        />

        <View className="justify-center pt-5 flex-row gap-2">

          <Text className="text-lg text-gray-100 font-pregular">
            ¿Ya tienes cuenta?
            </Text> 
            <Link href="/sign-in" className="text-lg font -psemibold 
            text-secondary"> Inicia Sesión</Link>
        </View>
      </ScrollView>

    </SafeAreaView>
  )
}

export default SignUp