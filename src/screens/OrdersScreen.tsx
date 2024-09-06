import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Platform, Image, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import OrderCard from '../components/OrderCard';
import { useNavigation } from '@react-navigation/native';
import moment from 'moment';

const OrdersScreen = () => {
  const navigation = useNavigation();
  const [selectedTab, setSelectedTab] = useState('Booked');
  const currentDate = moment();

  const allBookings = [
    {
      name: "Paradise Hotel",
      image: require('../../assets/images/Paradise_Hotel.png'),
      price: "$55 / Night",
      size: "850 sqft",
      location: "123 Paradise St, Tropicana",
      checkIn: "2024-09-20",
      checkOut: "2024-09-25"
    },
    {
      name: "Sunshine Resort",
      image: require('../../assets/images/Sunshine_Resort.png'),
      price: "$75 / Night",
      size: "950 sqft",
      location: "789 Sunshine Blvd, Happyville",
      checkIn: "2024-10-05",
      checkOut: "2024-10-10"
    },
    {
      name: "Goreng Hotel",
      image: require('../../assets/images/Goreng_Hotel.png'),
      price: "$48 / Night",
      size: "750 sqft",
      location: "507 Jengrawah St, Lenoh",
      checkIn: "2024-06-28",
      checkOut: "2024-06-30"
    },
    {
      name: "Olden Resort Hotel",
      image: require('../../assets/images/Olden_Resort.png'),
      price: "$55 / Night",
      size: "850 sqft",
      location: "507 Old St, Endicott",
      checkIn: "2024-05-01",
      checkOut: "2024-05-05"
    },
    {
      name: "Grand Plaza Hotel",
      image: require('../../assets/images/Grand_Plaza.png'),
      price: "$65 / Night",
      size: "950 sqft",
      location: "123 Plaza St, Lenoh",
      checkIn: "2024-04-10",
      checkOut: "2024-04-15"
    },
    {
      name: "Zeyzang Resort Hotel",
      image: require('../../assets/images/Zeyzang_Resort.png'),
      price: "$38 / Night",
      size: "1020 sqft",
      location: "507 University St, Endicott",
      checkIn: "2024-06-12",
      checkOut: "2024-06-17"
    },
  ];

  const filteredBookings = allBookings
    .filter(booking => moment(booking.checkOut).isAfter(currentDate))
    .sort((a, b) => moment(a.checkIn).diff(moment(b.checkIn)));

  const filteredHistory = allBookings
    .filter(booking => moment(booking.checkOut).isBefore(currentDate))
    .sort((a, b) => moment(b.checkIn).diff(moment(a.checkIn)));

  const handleTabPress = (tab) => {
    setSelectedTab(tab);
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
      <View style={styles.fixedHeader}>
        <TouchableOpacity style={styles.roundButton} onPress={() => navigation.goBack()}>
          <Image source={require('../../assets/icons/arriere.png')} style={styles.icon} />
        </TouchableOpacity>
        <View style={styles.MyOrdersRoundButton}>
          <Text style={styles.headerText}>My Orders</Text>
        </View>
        <TouchableOpacity style={styles.roundButton}>
          <Image source={require('../../assets/icons/filter2.png')} style={styles.icon} />
        </TouchableOpacity>
      </View>

      <View style={styles.tabContainer}>
        <View style={styles.tabButtonsWrapper}>
          <TouchableOpacity
            style={[styles.tabButton, selectedTab === 'Booked' && styles.activeTabButton]}
            onPress={() => handleTabPress('Booked')}
          >
            <Text style={[styles.tabButtonText, selectedTab === 'Booked' && styles.activeTabText]}>
              Booked
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.tabButton, selectedTab === 'History' && styles.activeTabButton]}
            onPress={() => handleTabPress('History')}
          >
            <Text style={[styles.tabButtonText, selectedTab === 'History' && styles.activeTabText]}>
              History
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView style={styles.container} contentContainerStyle={{ paddingTop: 10 }}>
        {selectedTab === 'Booked' && filteredBookings.map((booking, index) => (
          <OrderCard
            key={index}
            name={booking.name}
            image={booking.image}
            price={booking.price}
            size={booking.size}
            location={booking.location}
            checkIn={moment(booking.checkIn).format('DD MMM')}
            checkOut={moment(booking.checkOut).format('DD MMM')}
            onPress={() => console.log('Order card pressed')}
          />
        ))}

        {selectedTab === 'History' && filteredHistory.map((booking, index) => (
          <OrderCard
            key={index}
            name={booking.name}
            image={booking.image}
            price={booking.price}
            size={booking.size}
            location={booking.location}
            checkIn={moment(booking.checkIn).format('DD MMM')}
            checkOut={moment(booking.checkOut).format('DD MMM')}
            onPress={() => console.log('Order card pressed')}
            style={styles.pastBooking}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 16,
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
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: Platform.OS === 'android' ? 90 : 60,
    marginBottom: 10,
  },
  tabButtonsWrapper: {
    flexDirection: 'row',
    backgroundColor: '#f6f2f0',
    borderRadius: 20,
    padding: 8,
  },
  tabButton: {
    paddingHorizontal: 40,
    paddingVertical: 10,
    borderRadius: 15,
    marginHorizontal: 10,
    backgroundColor: 'white',
    elevation: 5,
  },
  activeTabButton: {
    backgroundColor: 'black',
  },
  tabButtonText: {
    fontSize: 16,
    color: 'gray',
  },
  activeTabText: {
    color: 'white',
    fontWeight: 'bold',
  },
  pastBooking: {
    opacity: 0.6,
  },
});

export default OrdersScreen;
