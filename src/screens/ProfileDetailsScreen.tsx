import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, SafeAreaView, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../types/navigation'; // Adjust the import path as needed
import { StackNavigationProp } from '@react-navigation/stack';

type ProfileDetailsScreenProp = StackNavigationProp<RootStackParamList, 'ProfileDetails'>;

const ProfileDetailsScreen: React.FC = () => {
  const navigation = useNavigation<ProfileDetailsScreenProp>();

  const handleEditProfile = () => {
    navigation.navigate('EditProfile');
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.fixedHeader}>
        <TouchableOpacity style={styles.roundButton} onPress={() => navigation.goBack()}>
          <Image source={require('../../assets/icons/arriere.png')} style={styles.backIcon} />
        </TouchableOpacity>
        <View style={styles.titleRoundButton}>
          <Text style={styles.headerText}>Profile Details</Text>
        </View>
      </View>

      <ScrollView style={styles.scrollContainer}>
        {/* Profile Card */}
        <View style={styles.profileCard}>
          <Image source={require('../../assets/images/avatar.png')} style={styles.profilePic} />
          <View style={styles.profileInfo}>
            <Text style={styles.name}>John Doe</Text>
            <Text style={styles.email}>john.doe@example.com</Text>
            <Text style={styles.phone}>+123 456 7890</Text>
          </View>
        </View>

        {/* Additional User Information */}
        <View style={styles.infoCard}>
          <Text style={styles.infoTitle}>Credit Card Information</Text>
          <Text style={styles.infoText}>Card Type: Visa</Text>
          <Text style={styles.infoText}>Card Number: **** **** **** 1234</Text>
        </View>

        <View style={styles.infoCard}>
          <Text style={styles.infoTitle}>Personal Information</Text>
          <Text style={styles.infoText}>Birth Date: January 1, 1990</Text>
          <Text style={styles.infoText}>Gender: Male</Text>
        </View>

        <View style={styles.infoCard}>
          <Text style={styles.infoTitle}>Notifications</Text>
          <Text style={styles.infoText}>Receive Notifications: Enabled</Text>
        </View>

        {/* Edit Profile Button */}
        <TouchableOpacity style={styles.editButton} onPress={handleEditProfile}>
          <Text style={styles.editButtonText}>Edit Profile</Text>
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
  scrollContainer: {
    marginTop: 80,
    padding: 16,
  },
  profileCard: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderRadius: 10,
    backgroundColor: '#fff',
    marginBottom: 20,
    marginTop: 20,
    elevation: 5,
  },
  profilePic: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 16,
  },
  profileInfo: {
    flex: 1,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  email: {
    fontSize: 14,
    color: '#555',
  },
  phone: {
    fontSize: 14,
    color: '#555',
  },
  infoCard: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 16,
    marginBottom: 20,
    elevation: 5,
  },
  infoTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#A34400',
    marginBottom: 8,
  },
  infoText: {
    fontSize: 14,
    color: '#555',
  },
  editButton: {
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
  editButtonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  },
  backIcon: {
    width: 24,
    height: 24,
  },
});

export default ProfileDetailsScreen;
