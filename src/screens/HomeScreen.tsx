import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TextInput, ScrollView, SafeAreaView, FlatList, TouchableOpacity, Platform, Image } from 'react-native';
import * as Location from 'expo-location';
import HotelCard from '../components/HotelCard'; 
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../types/navigation';

type HomeScreenNavigationProp = NavigationProp<RootStackParamList>;

const HomeScreen: React.FC = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>();
  const [location, setLocation] = useState<{ latitude: number, longitude: number } | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      });
    })();
  }, []);

  const hotels = [
    {
      name: 'Bitung Resort',
      image: require('../../assets/images/Bitung_Resort.png'),
      price: '$500',
      night: '/night',
      location: 'Bitung, Sulawesi Utara',
      size: '1015 Sqft',
    },
    {
      name: 'Lembe Resort',
      image: require('../../assets/images/Lembeh_Resort.png'),
      price: '$1000',
      night: '/night',
      location: 'Bitung, Sulawesi Utara',
      size: '905 Sqft',
    },
  ];

  let text = 'Waiting..';
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = `${location.latitude}, ${location.longitude}`;
  }

  const handlePress = (hotel: any) => {
    navigation.navigate('HotelDetails', { hotel });
  };

  return (
    <SafeAreaView style={styles.safeContainer}>
      <ScrollView style={styles.container}>
        <View style={styles.headerContainer}>
          <Text style={styles.locationText}>Current Location</Text>
          <View style={styles.locationRow}>
            <Image source={require('../../assets/icons/localisation.png')} style={styles.icon} />
            <Text style={styles.location}>
              {location ? `${location.latitude}, ${location.longitude}` : 'Loading...'}
            </Text>
            <TouchableOpacity>
              <Image source={require('../../assets/icons/notification.png')} style={styles.icon} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.searchContainer}>
          <Image source={require('../../assets/icons/loop.png')} style={styles.icon} />
          <TextInput style={styles.searchInput} placeholder="  Search here..." />
          <TouchableOpacity>
            <Image source={require('../../assets/icons/filter.png')} style={styles.icon} />
          </TouchableOpacity>
        </View>
        <View style={styles.sectionContainer}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>House Near You</Text>
            <TouchableOpacity>
              <Text style={styles.viewAll}>View All</Text>
            </TouchableOpacity>
          </View>
          <FlatList
            horizontal
            data={hotels}
            renderItem={({ item }) => (
              <HotelCard
                name={item.name}
                image={item.image}
                price={item.price}
                night={item.night}
                location={item.location}
                size={item.size}
                onPress={() => handlePress(item)}
                style={styles.rowCard}
                type="row"
              />
            )}
            keyExtractor={(item) => item.name}
            showsHorizontalScrollIndicator={false}
          />
        </View>
        <View style={styles.sectionContainer}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Featured Listings</Text>
            <TouchableOpacity>
              <Text style={styles.viewAll}>View All</Text>
            </TouchableOpacity>
          </View>
          <HotelCard
            name="Japanese-Style Hotel"
            image={require('../../assets/images/Japanese.png')}
            price="$10,000"
            night="/night"
            location="Manado, Sulawesi Utara"
            size="905 Sqft"
            onPress={() => handlePress({
              name: "Japanese-Style Hotel",
              image: require('../../assets/images/Japanese.png'),
              price: "$10,000",
              night: "/night",
              location: "Manado, Sulawesi Utara",
              size: "2,000 Sqft"
            })}
            style={styles.columnCard}
            type="column"
          />
          <HotelCard
            name="Greek Island Retreat"
            image={require('../../assets/images/Greek.png')}
            price="$7,500"
            night="/night"
            location="Santorini, Greece"
            size="950 Sqft"
            onPress={() => handlePress({
              name: "Greek Island Retreat",
              image: require('../../assets/images/Greek.png'),
              price: "$7,500",
              night: "/night",
              location: "Santorini, Greece",
              size: "950 Sqft"
            })}
            style={styles.columnCard}
            type="column"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Platform.OS === 'android' ? 25 : 0,
  },
  container: {
    flex: 1,
    padding: 15,
  },
  headerContainer: {
    marginBottom: 20,
  },
  locationText: {
    fontSize: 12,
    color: 'gray',
  },
  locationRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  location: {
    fontSize: 16,
    flex: 1,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 20,
    paddingHorizontal: 10,
    height: 50,
  },
  searchInput: {
    flex: 1,
    height: 40,
  },
  sectionContainer: {
    marginBottom: 20,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  viewAll: {
    color: '#A34400',
    fontWeight: 'bold',
  },
  rowCard: {
    marginRight: 15,
  },
  columnCard: {
    marginBottom: 20,
  },
  icon: {
    width: 24,
    height: 24,
  },
});

export default HomeScreen;
