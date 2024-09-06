import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TextInput, TouchableOpacity, Platform } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../types/navigation'; 

type ChatScreenNavigationProp = NavigationProp<RootStackParamList>;

const avatars = [
  require('../../assets/images/avatar1.png'),
  require('../../assets/images/avatar2.png'),
  require('../../assets/images/avatar3.png'),
  require('../../assets/images/avatar4.png'),
  
];

const ChatScreen: React.FC = () => {
  const navigation = useNavigation<ChatScreenNavigationProp>();

  const handleHotelPress = () => {
    navigation.navigate('ChatDetail', { hotel: { name: 'Hotel Eliminate Galian', location: 'Location', price: 100, reviews: '100 reviews' } });
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.fixedHeader}>
        <TouchableOpacity style={styles.roundButton} onPress={() => navigation.goBack()}>
          <Image source={require('../../assets/icons/arriere.png')} style={styles.icon} />
        </TouchableOpacity>
        <View style={styles.titleRoundButton}>
          <Text style={styles.headerText}>Messages</Text>
        </View>
        <TouchableOpacity style={styles.roundButton} onPress={() => console.log('Notifications pressed')}>
          <Image source={require('../../assets/icons/notification.png')} style={styles.icon} />
        </TouchableOpacity>
      </View>

      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <Image source={require('../../assets/icons/loop.png')} style={styles.searchIcon} />
        <TextInput
          style={styles.searchInput}
          placeholder="Search something..."
        />
        <Image source={require('../../assets/icons/filter.png')} style={styles.filterIcon} />
      </View>

      <ScrollView style={styles.scrollContainer}>
        {/* Recent Interactions */}
        <Text style={styles.sectionTitle}>Recent Interactions</Text>
        <View style={styles.activitiesContainer}>
          {['Luka', 'Kay', 'Cheryl', 'Jeen'].map((name, index) => (
            <View key={index} style={styles.activityItem}>
              <Image source={avatars[index % avatars.length]} style={styles.activityAvatar} />
              <Text style={styles.activityName}>{name}</Text>
            </View>
          ))}
        </View>

        {/* Messages */}
        <Text style={styles.sectionTitle}>Messages</Text>
        {[
          { name: 'Hotel Eliminate Galian', message: 'Your booking is confirmed for tomorrow.', time: '23 min', unreadCount: 2 },
          { name: 'Hotel Cerulean Temple', message: 'Your room is ready for check-in.', time: '40 min', unreadCount: 1 },
          { name: 'Hotel Double Oak', message: 'Reminder: Checkout is at 11 AM tomorrow.', time: '1 hr', unreadCount: 0 },
          { name: 'Hotel Jade Gem', message: 'Thank you for your stay with us.', time: '1 hr', unreadCount: 0 },
        ].map((msg, index) => (
          <TouchableOpacity 
            key={index} 
            style={styles.messageItem} 
            onPress={msg.name === 'Hotel Eliminate Galian' ? handleHotelPress : () => console.log(`${msg.name} pressed`)}
          >
            <Image source={avatars[index % avatars.length]} style={styles.messageAvatar} />
            <View style={styles.messageContent}>
              <Text style={styles.messageName}>{msg.name}</Text>
              <Text style={styles.messageText}>{msg.message}</Text>
            </View>
            <View style={styles.messageTimeContainer}>
              <Text style={styles.messageTime}>{msg.time}</Text>
              {msg.unreadCount > 0 && (
                <View style={styles.unreadBadge}>
                  <Text style={styles.unreadText}>{msg.unreadCount}</Text>
                </View>
              )}
            </View>
          </TouchableOpacity>
        ))}
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
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    marginTop: 10,
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
  titleRoundButton: {
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
  icon: {
    width: 22,
    height: 22,
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
    marginHorizontal: 16,
    marginTop: Platform.OS === 'android' ? 90 : 60,
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
  },
  filterIcon: {
    width: 20,
    height: 20,
    tintColor: 'gray',
  },
  scrollContainer: {
    flex: 1,
    paddingHorizontal: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 10,
  },
  activitiesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  activityItem: {
    alignItems: 'center',
  },
  activityAvatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginBottom: 5,
  },
  activityName: {
    fontSize: 14,
    color: 'black',
  },
  messageItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  messageAvatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  messageContent: {
    flex: 1,
    marginLeft: 10,
  },
  messageName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
  messageText: {
    fontSize: 14,
    color: 'gray',
  },
  messageTimeContainer: {
    alignItems: 'flex-end',
  },
  messageTime: {
    fontSize: 12,
    color: 'gray',
  },
  unreadBadge: {
    backgroundColor: 'red',
    borderRadius: 10,
    paddingHorizontal: 6,
    paddingVertical: 2,
    marginTop: 5,
  },
  unreadText: {
    color: 'white',
    fontSize: 12,
  },
});

export default ChatScreen;
