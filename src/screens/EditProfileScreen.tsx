import React, { useState, useContext } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, SafeAreaView, ScrollView, Image, Platform } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useNavigation } from '@react-navigation/native';
import { ProfileContext } from '../context/ProfileContext';

const EditProfileScreen: React.FC = () => {
  const { profileData, updateProfileData } = useContext(ProfileContext);
  const navigation = useNavigation();

  const [name, setName] = useState(profileData.name || 'John Doe');
  const [email, setEmail] = useState(profileData.email || 'johndoe@example.com');
  const [phone, setPhone] = useState(profileData.phoneNumber || '123-456-7890');
  const [address, setAddress] = useState(profileData.address || '123 Main St, Springfield');
  const [birthDate, setBirthDate] = useState(profileData.birthDate || '01/01/1990');
  const [gender, setGender] = useState(profileData.gender || 'Male');
  const [notifications, setNotifications] = useState(profileData.notifications || 'Enabled');
  const [cardNumber, setCardNumber] = useState(profileData.cardNumber || '1234 5678 9012 3456');
  const [cardType, setCardType] = useState(profileData.cardType || 'Visa');

  const [isSaved, setIsSaved] = useState(false);

  const saveChanges = () => {
    updateProfileData({
      name,
      phoneNumber: phone,
      email,
      gender,
      address,
      birthDate,
      notifications,
      cardNumber,
      cardType,
    });
    setIsSaved(true);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.fixedHeader}>
        <TouchableOpacity
          style={styles.roundButton}   
          onPress={() => navigation.goBack()}
        >
          <Image
            source={require('../../assets/icons/arriere.png')}
            style={styles.icon}
          />
        </TouchableOpacity>
        <View style={styles.titleRoundButton}>
          <Text style={styles.headerText}>Edit Profile</Text>
        </View>
      </View>

      <ScrollView style={styles.scrollContainer}>
        <View style={styles.profileCard}>
          <Image source={require('../../assets/images/avatar.png')} style={styles.avatar} />
          <Text style={styles.username}>{name}</Text>
        </View>

        {/* Personal Information Section */}
        <View style={styles.inputSection}>
          <Text style={styles.sectionHeaderText}>Personal Information</Text>

          <Text style={styles.label}>Name</Text>
          <TextInput
            style={styles.input}
            value={name}
            onChangeText={setName}
          />

          <Text style={styles.label}>Email</Text>
          <TextInput
            style={styles.input}
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
          />

          <Text style={styles.label}>Phone</Text>
          <TextInput
            style={styles.input}
            value={phone}
            onChangeText={setPhone}
            keyboardType="phone-pad"
          />

          <Text style={styles.label}>Address</Text>
          <TextInput
            style={styles.input}
            value={address}
            onChangeText={setAddress}
          />

          <Text style={styles.label}>Birth Date</Text>
          <TextInput
            style={styles.input}
            value={birthDate}
            onChangeText={setBirthDate}
          />

          <Text style={styles.label}>Gender</Text>
          <View style={styles.pickerContainer}>
            <Picker
              selectedValue={gender}
              onValueChange={(itemValue) => setGender(itemValue)}
              style={styles.picker}
            >
              <Picker.Item label="Male" value="Male" />
              <Picker.Item label="Female" value="Female" />
              <Picker.Item label="Other" value="Other" />
            </Picker>
          </View>
        </View>

        {/* Credit Card Information Section */}
        <View style={styles.inputSection}>
          <Text style={styles.sectionHeaderText}>Credit Card Information</Text>

          <Text style={styles.label}>Card Number</Text>
          <TextInput
            style={styles.input}
            value={cardNumber}
            onChangeText={setCardNumber}
            keyboardType="numeric"
          />

          <Text style={styles.label}>Card Type</Text>
          <View style={styles.pickerContainer}>
            <Picker
              selectedValue={cardType}
              onValueChange={(itemValue) => setCardType(itemValue)}
              style={styles.picker}
            >
              <Picker.Item label="Visa" value="Visa" />
              <Picker.Item label="MasterCard" value="MasterCard" />
              <Picker.Item label="American Express" value="American Express" />
              <Picker.Item label="Discover" value="Discover" />
            </Picker>
          </View>
        </View>

        {/* Notifications Section */}
        <View style={styles.inputSection}>
          <Text style={styles.sectionHeaderText}>Notifications</Text>

          <View style={styles.pickerContainer}>
            <Picker
              selectedValue={notifications}
              onValueChange={(itemValue) => setNotifications(itemValue)}
              style={styles.picker}
            >
              <Picker.Item label="Enabled" value="Enabled" />
              <Picker.Item label="Disabled" value="Disabled" />
            </Picker>
          </View>
        </View>

        <TouchableOpacity style={styles.saveButton} onPress={saveChanges}>
          <Text style={styles.saveButtonText}>{isSaved ? 'Saved' : 'Save Changes'}</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  fixedHeader: {
    position: 'absolute',
    top: Platform.OS === 'android' ? 25 : 0,
    left: 0,
    right: 0,
    zIndex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    marginTop: 10,
  },
  roundButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
    position: 'absolute',
    left: 10,
  },
  titleRoundButton: {
    paddingHorizontal: 20,
    paddingVertical: 13,
    borderRadius: 25,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
  },
  headerText: {
    fontSize: 18,
    color: '#000',
    fontWeight: 'bold',
  },
  icon: {
    width: 24,
    height: 24,
  },
  scrollContainer: {
    flex: 1,
    paddingHorizontal: 16,
    marginTop: Platform.OS === 'android' ? 90 : 60,
  },
  profileCard: {
    alignItems: 'center',
    marginBottom: 20,
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
    marginTop:20,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 15,
    marginTop: 30,
  },
  username: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#A34400',
  },
  inputSection: {
    marginBottom: 20,
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  sectionHeaderText: {
    fontSize: 18,
    color: '#A34400',
    fontWeight: 'bold',
    marginBottom: 10,
  },
  label: {
    fontSize: 16,
    color: '#333',
    marginBottom: 5,
  },
  input: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    borderColor: '#ddd',
    borderWidth: 1,
  },
  pickerContainer: {
    borderRadius: 10,
    borderColor: '#ddd',
    borderWidth: 1,
    overflow: 'hidden',
    marginBottom: 15,
  },
  picker: {
    height: 50,
    width: '100%',
  },
  saveButton: {
    backgroundColor: 'black',
    paddingVertical: 15,
    borderRadius: 10,
    width: '90%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
    alignSelf: 'center',
    marginBottom: 40,
  },
  saveButtonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default EditProfileScreen;
