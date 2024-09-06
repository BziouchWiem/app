import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, SafeAreaView, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../types/navigation';
import { StackNavigationProp } from '@react-navigation/stack';

type ProfileScreenProp = StackNavigationProp<RootStackParamList, 'Profile'>;

const ProfileScreen: React.FC = () => {
  const navigation = useNavigation<ProfileScreenProp>();

  const handleNavigateToDetails = () => {
    navigation.navigate('ProfileDetails');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.fixedHeader}>
        <TouchableOpacity style={styles.roundButton} onPress={() => navigation.goBack()}>
          <Image source={require('../../assets/icons/arriere.png')} style={styles.backIcon} />
        </TouchableOpacity>
        <View style={styles.titleRoundButton}>
          <Text style={styles.headerText}>My Profile</Text>
        </View>
      </View>

      <ScrollView style={styles.scrollContainer}>
        {/* Profile Card */}
        <View style={styles.profileCard}>
          <Image source={require('../../assets/images/avatar.png')} style={styles.profilePic} />
          <View style={styles.profileInfo}>
            <Text style={styles.name}>John Doe</Text>
            <Text style={styles.phone}>+123 456 7890</Text>
          </View>
          <TouchableOpacity onPress={handleNavigateToDetails}>
            <Image source={require('../../assets/icons/arrow.png')} style={styles.arrow} />
          </TouchableOpacity>
        </View>

        {/* Combined Cards */}
        <View style={styles.sectionBox}>
          {/* Transaction History and My Voucher */}
          <View style={styles.combinedCard}>
            <TouchableOpacity style={styles.card}>
              <Image source={require('../../assets/icons/transaction.png')} style={styles.icon} />
              <Text style={styles.cardText}>Transaction History</Text>
              <Image source={require('../../assets/icons/arrow.png')} style={styles.arrow} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.card}>
              <Image source={require('../../assets/icons/voucher.png')} style={styles.icon} />
              <Text style={styles.cardText}>My Voucher</Text>
              <Image source={require('../../assets/icons/arrow.png')} style={styles.arrow} />
            </TouchableOpacity>
          </View>

          {/* Help Centre, Settings, Terms and Conditions */}
          <View style={styles.combinedCard}>
            <TouchableOpacity style={styles.card}>
              <Image source={require('../../assets/icons/help.png')} style={styles.icon} />
              <Text style={styles.cardText}>Help Centre</Text>
              <Image source={require('../../assets/icons/arrow.png')} style={styles.arrow} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.card}>
              <Image source={require('../../assets/icons/settings.png')} style={styles.icon} />
              <Text style={styles.cardText}>Settings</Text>
              <Image source={require('../../assets/icons/arrow.png')} style={styles.arrow} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.card}>
              <Image source={require('../../assets/icons/terms.png')} style={styles.icon} />
              <Text style={styles.cardText}>Terms and Conditions</Text>
              <Image source={require('../../assets/icons/arrow.png')} style={styles.arrow} />
            </TouchableOpacity>
          </View>

          {/* Log Out */}
          <View style={styles.combinedCard}>
            <TouchableOpacity style={styles.card}>
              <Image source={require('../../assets/icons/logout.png')} style={styles.icon} />
              <Text style={[styles.cardText, { color: 'red' }]}>Log Out</Text>
              <Image source={require('../../assets/icons/arrow.png')} style={styles.arrow} />
            </TouchableOpacity>
          </View>
        </View>
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
    marginTop: 70, 
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
  phone: {
    fontSize: 14,
    color: '#555',
  },
  arrow: {
    width: 16,
    height: 16,
    tintColor: '#000',
  },
  sectionBox: {
    marginBottom: 20,
  },
  combinedCard: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    marginBottom: 20,
    elevation: 5,
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  icon: {
    width: 24,
    height: 24,
    marginRight: 16,
  },
  backIcon: {
    width: 24,
    height: 24,
  },
  cardText: {
    fontSize: 16,
    flex: 1,
  },
});

export default ProfileScreen;
