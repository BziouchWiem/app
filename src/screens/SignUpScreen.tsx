import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, TextInput, SafeAreaView, ScrollView } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../types/navigation';

type Props = StackScreenProps<RootStackParamList, 'SignUp'>;

const SignUpScreen: React.FC<Props> = ({ navigation }) => {
  const [fullName, setFullName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [isFormValid, setIsFormValid] = useState<boolean>(false);

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password: string, confirmPassword: string): boolean => {
    return password === confirmPassword && password.length > 4;
  };

  useEffect(() => {
    const isEmailValid = validateEmail(email);
    const isPasswordValid = validatePassword(password, confirmPassword);
    const isAllFieldsFilled = fullName !== '' && email !== '' && password !== '' && confirmPassword !== '';
    setIsFormValid(isEmailValid && isPasswordValid && isAllFieldsFilled);
  }, [fullName, email, password, confirmPassword]);

  return (
    <SafeAreaView style={styles.safeContainer}>
      <View style={styles.fixedImageContainer}>
        <Image
          source={require('../../assets/images/vue.png')}
          style={styles.image}
        />
      </View>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.container}>
          <View style={styles.formBox}>
            <View style={styles.formContainer}>
              <Text style={styles.title}>Sign up</Text>
              <TextInput
                style={[styles.input, styles.shadow]}
                placeholder="Full Name"
                placeholderTextColor="#aaa"
                value={fullName}
                onChangeText={setFullName}
              />
              <TextInput
                style={[styles.input, styles.shadow]}
                placeholder="Email"
                placeholderTextColor="#aaa"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
              />
              <TextInput
                style={[styles.input, styles.shadow]}
                placeholder="Password"
                placeholderTextColor="#aaa"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
              />
              <TextInput
                style={[styles.input, styles.shadow]}
                placeholder="Confirm Password"
                placeholderTextColor="#aaa"
                value={confirmPassword}
                onChangeText={setConfirmPassword}
                secureTextEntry
              />
              <TouchableOpacity
                style={[styles.button, styles.shadow, !isFormValid && { backgroundColor: '#ccc' }]}
                onPress={() => navigation.navigate('Main')}
                disabled={!isFormValid}
              >
                <Text style={styles.buttonText}>Sign up</Text>
              </TouchableOpacity>
              <View style={styles.loginContainer}>
                <Text style={styles.loginText}>
                  Already have an account?{' '}
                  <Text style={styles.loginLink} onPress={() => navigation.navigate('Login')}>
                    Log In
                  </Text>
                </Text>
              </View>
              <View style={styles.socialSignupContainer}>
                <Text style={styles.orText}>Or sign up with</Text>
                <View style={styles.socialContainer}>
                  <TouchableOpacity style={[styles.socialButton, styles.shadow]}>
                    <Image source={require('../../assets/icons/google.png')} style={styles.socialIcon} />
                  </TouchableOpacity>
                  <TouchableOpacity style={[styles.socialButton, styles.shadow]}>
                    <Image source={require('../../assets/icons/facebook.png')} style={styles.socialIcon} />
                  </TouchableOpacity>
                  <TouchableOpacity style={[styles.socialButton, styles.shadow]}>
                    <Image source={require('../../assets/icons/x.png')} style={styles.socialIcon} />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: '#F1F1F1',
  },
  fixedImageContainer: {
    height: 250,
    width: '100%',
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'space-between',
  },
  container: {
    flex: 1,
    justifyContent: 'space-between',
    paddingTop: 5,
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
    paddingBottom: 20,
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
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'left',
    marginBottom: 10,
  },
  input: {
    width: '100%',
    padding: 15,
    borderRadius: 10,
    backgroundColor: '#f1f1f1', 
    marginBottom: 15,
    color: '#333',
  },
  button: {
    backgroundColor: 'black',
    paddingVertical: 15,
    borderRadius: 10,
    width: '100%',
    alignItems: 'center',
    marginTop: 35,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  loginContainer: {
    alignItems: 'center',
    marginTop: 10,
  },
  loginText: {
    fontSize: 14,
    color: 'gray',
  },
  loginLink: {
    color: '#A34400',
    fontWeight: 'bold',
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
  shadow: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
});

export default SignUpScreen;
