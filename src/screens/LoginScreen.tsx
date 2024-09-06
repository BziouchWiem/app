import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, TextInput, SafeAreaView } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../types/navigation';

type Props = StackScreenProps<RootStackParamList, 'Login'>;

const LoginScreen: React.FC<Props> = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.safeContainer}>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image
            source={require('../../assets/images/vue.png')}
            style={styles.image}
          />
        </View>
        <View style={styles.formBox}>
          <View style={styles.formContainer}>
            <Text style={styles.title}>Login</Text>
            <TextInput style={[styles.input, styles.shadow]} placeholder="Email" placeholderTextColor="#aaa" />
            <TextInput style={[styles.input, styles.shadow]} placeholder="Password" placeholderTextColor="#aaa" secureTextEntry />
            <TouchableOpacity style={[styles.button, styles.shadow]} onPress={() => navigation.navigate('Main')}>
              <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
            <View style={styles.loginContainer}>
              <Text style={styles.loginText}>
                Forgot Password?{' '}
                <Text style={styles.loginLink} onPress={() => navigation.navigate('SignUp')}>
                  Sign up
                </Text>
              </Text>
            </View>
          </View>
          <View style={styles.socialSignupContainer}>
                <Text style={styles.orText}>Or Login with</Text>
                <View style={styles.socialContainer}>
                  <TouchableOpacity style={[styles.socialButton, styles.shadowI]}>
                    <Image source={require('../../assets/icons/google.png')} style={styles.socialIcon} />
                  </TouchableOpacity>
                  <TouchableOpacity style={[styles.socialButton, styles.shadowI]}>
                    <Image source={require('../../assets/icons/facebook.png')} style={styles.socialIcon} />
                  </TouchableOpacity>
                  <TouchableOpacity style={[styles.socialButton, styles.shadowI]}>
                    <Image source={require('../../assets/icons/x.png')} style={styles.socialIcon} />
                  </TouchableOpacity>
                </View>
              </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: '#F1F1F1',
  },
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  imageContainer: {
    height: 280,
    width: '100%',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  formBox: {
    flex: 2,
    backgroundColor: 'white',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 20,
    paddingBottom: 40,
    elevation: 5,
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 5,
    marginRight: 5,
  },
  formContainer: {
    width: '100%',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'left',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    padding: 15,
    borderRadius: 10,
    backgroundColor: '#f1f1f1',
    marginBottom: 20,
    color: '#333',
  },
  button: {
    backgroundColor: 'black',
    paddingVertical: 15,
    borderRadius: 10,
    width: '100%',
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  loginContainer: {
    alignItems: 'center',
    marginTop: 5,
  },
  loginText: {
    fontSize: 14,
    color: 'gray',
  },
  loginLink: {
    color: '#A34400',
    fontWeight: 'bold',
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  socialSignupContainer: {
    marginTop: 15,
  },
  orText: {
    textAlign: 'center',
    fontSize: 15,
    color: 'black',
    fontWeight: 'bold',
  },
  socialContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingVertical: 10,
    marginTop: 10,
  },
  socialButton: {
    marginHorizontal: 15,
    borderRadius: 10,
    overflow: 'hidden',
  },
  socialIcon: {
    width: 50,
    height: 50,
  },
  shadowI: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
});

export default LoginScreen;
