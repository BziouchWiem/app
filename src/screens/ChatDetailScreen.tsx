import React from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity, ScrollView, Platform } from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../types/navigation';

type ChatDetailScreenRouteProp = RouteProp<RootStackParamList, 'ChatDetail'>;

const ChatDetailScreen: React.FC<{ route: ChatDetailScreenRouteProp }> = ({ route }) => {
  const { hotel } = route.params;

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => console.log('Go back')}>
          <Image source={require('../../assets/icons/arriere.png')} style={styles.backIcon} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Message</Text>
        <TouchableOpacity onPress={() => console.log('Notifications pressed')}>
          <Image source={require('../../assets/icons/notification.png')} style={styles.notificationIcon} />
        </TouchableOpacity>
      </View>

      {/* Hotel Card */}
      <View style={[styles.card, styles.shadowContainer]}>
        <View style={styles.row}>
          <View style={styles.imageContainer}>
            <Image
              style={styles.image}
              source={require('../../assets/images/Grand_Plaza.png')}
              accessibilityLabel={hotel.name}
            />
          </View>
          <View style={styles.detailsContainer}>
            <Text style={styles.name}>{hotel.name}</Text> 
            <View style={styles.locationRow}>
              <Image source={require('../../assets/icons/graylocalisation.png')} style={styles.locationIcon} />
              <Text style={styles.location}>{hotel.location}</Text>
            </View>
            <Text style={styles.price}>${hotel.price} / Night</Text> 
            <View style={styles.sizeContainer}>
              <Image source={require('../../assets/icons/layers.png')} style={styles.layersIcon} />
              <Text style={styles.reviews}>{hotel.reviews}</Text> 
            </View>
          </View>
        </View>
      </View>

      {/* Chat Section */}
      <ScrollView style={styles.chatContainer}>
        <View style={styles.messageContainer}>
          <Text style={styles.userMessage}>Hi, for this hotel with a king suite room are there still any vacancies?</Text>
          <Text style={styles.messageTime}>10:15 AM</Text>
        </View>
        <View style={styles.hotelResponseContainer}>
          <Text style={styles.hotelMessage}>Hi Ahmir</Text>
          <Text style={styles.messageTime}>10:30 AM</Text>
        </View>
        <View style={styles.hotelResponseContainer}>
          <Text style={styles.hotelMessage}>Yes, the room is available, so you can make an order.</Text>
          <Text style={styles.messageTime}>10:31 AM</Text>
        </View>
      </ScrollView>

      {/* Message Input */}
      <View style={styles.messageInputContainer}>
        <TextInput
          placeholder="Type message..."
          style={styles.messageInput}
        />
        <TouchableOpacity style={styles.sendButton}>
          <Image source={require('../../assets/icons/send.png')} style={styles.sendIcon} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
  },
  backIcon: {
    width: 24,
    height: 24,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
  notificationIcon: {
    width: 24,
    height: 24,
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 16,
    marginBottom: 15,
    overflow: 'hidden',
    padding: 10,
  },
  shadowContainer: {
    ...Platform.select({
      ios: {
        shadowOffset: { width: 0, height: 2 },
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowRadius: 3,
      },
      android: {
        elevation: 5,
      },
    }),
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  imageContainer: {
    width: 130,
    height: 110,
    borderRadius: 16,
    overflow: 'hidden',
    marginRight: 10,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  detailsContainer: {
    flex: 1,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  locationRow: {
    flexDirection: 'row',
    marginTop: 5,
  },
  locationIcon: {
    width: 20,
    height: 20,
    marginRight: 5,
  },
  location: {
    fontSize: 14,
    color: 'gray',
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#A34400',
    marginTop: 5,
  },
  sizeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  layersIcon: {
    width: 16,
    height: 16,
    marginRight: 5,
  },
  reviews: {
    fontSize: 14,
    color: 'gray',
  },
  chatContainer: {
    flex: 1,
  },
  messageContainer: {
    backgroundColor: '#DCF8C6',
    borderRadius: 10,
    padding: 10,
    marginBottom: 5,
    alignSelf: 'flex-start',
  },
  userMessage: {
    fontSize: 16,
  },
  hotelResponseContainer: {
    backgroundColor: '#E4E6EB',
    borderRadius: 10,
    padding: 10,
    marginBottom: 5,
    alignSelf: 'flex-start',
  },
  hotelMessage: {
    fontSize: 16,
  },
  messageTime: {
    fontSize: 12,
    color: 'gray',
    alignSelf: 'flex-end',
    marginTop: 5,
  },
  messageInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderTopWidth: 1,
    borderTopColor: '#e5e5e5',
  },
  messageInput: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    borderRadius: 20,
    paddingHorizontal: 15,
    paddingVertical: 10,
    fontSize: 16,
  },
  sendButton: {
    marginLeft: 10,
  },
  sendIcon: {
    width: 24,
    height: 24,
  },
});

export default ChatDetailScreen;
