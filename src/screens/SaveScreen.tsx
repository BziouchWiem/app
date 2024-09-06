import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TextInput, TouchableOpacity, Platform } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import SaveCard from '../components/SaveCard';
import { useNavigation } from '@react-navigation/native';

interface Hotel {
  name: string;
  location: string;
  size: string;
  image: any;
}

const SaveScreen: React.FC = () => {
  const navigation = useNavigation();

  const savedHotels: Hotel[] = [
    {
      name: "Eliminate Galian Hotel",
      location: "Chestnut Street, Rome",
      size: "850 sqft",
      image: require('../../assets/images/hotel1.png'), 
    },
    {
      name: "Cerulean Temple Hotel",
      location: "Chestnut Street, Rome",
      size: "950 sqft",
      image: require('../../assets/images/hotel2.png'),
    },
    {
      name: "Double Oak Hotel",
      location: "Chestnut Street, Rome",
      size: "750 sqft",
      image: require('../../assets/images/hotel3.png'),
    },
    {
      name: "Jade Gem Resort",
      location: "Chestnut Street, Rome",
      size: "1020 sqft",
      image: require('../../assets/images/hotel4.png'),
    },
  ];

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
      <View style={styles.fixedHeader}>
        <TouchableOpacity style={styles.roundButton} onPress={() => navigation.goBack()}>
          <Image source={require('../../assets/icons/arriere.png')} style={styles.icon} />
        </TouchableOpacity>
        <View style={styles.MyOrdersRoundButton}>
          <Text style={styles.headerText}>Saved Hotels</Text>
        </View>
        <TouchableOpacity style={styles.roundButton}>
          <Image source={require('../../assets/icons/filter2.png')} style={styles.icon} />
        </TouchableOpacity>
      </View>

      <View style={styles.searchContainer}>
        <Image source={require('../../assets/icons/loop.png')} style={styles.searchIcon} />
        <TextInput
          style={styles.searchInput}
          placeholder="Search your hotel..."
        />
        <Image source={require('../../assets/icons/filter.png')} style={styles.filterIcon} />
      </View>

      <ScrollView style={styles.container} contentContainerStyle={{ paddingTop: 10 }}>
        <View style={styles.grid}>
          {savedHotels.map((hotel, index) => (
            <View key={index} style={styles.gridItem}>
              <SaveCard
                name={hotel.name}
                location={hotel.location}
                size={hotel.size}
                image={hotel.image} // Pass the image
                onPress={() => console.log('Saved card pressed')}
              />
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 16,
  },
  fixedHeader: {
    position: 'absolute',
    top: Platform.OS === 'android' ? 25 : 0,
    left: 0,
    right: 0,
    zIndex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    marginTop: 10,
  },
  icon: {
    width: 22,
    height: 22,
  },
  roundButton: {
    width: 50,
    height: 50,
    borderRadius: 30,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
  },
  MyOrdersRoundButton: {
    paddingHorizontal: 20,
    paddingVertical: 13,
    borderRadius: 30,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
  },
  headerText: {
    fontSize: 18,
    color: 'black',
    fontWeight: 'bold',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 20,
    paddingHorizontal: 10,
    height: 50,
    marginHorizontal: 16,
    marginTop: 80,
  },
  searchIcon: {
    width: 20,
    height: 20,
    tintColor: 'gray',
  },
  searchInput: {
    flex: 1,
    height: 40,
    marginLeft: 10,
    color: 'black',
  },
  filterIcon: {
    width: 20,
    height: 20,
    tintColor: 'gray',
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  gridItem: {
    width: '48%',
    marginVertical: 10,
  },
});

export default SaveScreen;
