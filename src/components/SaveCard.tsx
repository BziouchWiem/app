import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

interface SaveCardProps {
  name: string;
  location: string;
  size: string;
  image: any;
  onPress: () => void;
}

const SaveCard: React.FC<SaveCardProps> = ({ name, location, size, image, onPress }) => {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <View style={styles.imageContainer}>
        <Image source={image} style={styles.image} />
      </View>
      <View style={styles.cardContent}>
        <Text style={styles.hotelName}>{name}</Text>
        <View style={styles.locationContainer}>
          <Image source={require('../../assets/icons/graylocalisation.png')} style={styles.icon} />
          <Text style={styles.hotelLocation}>{location}</Text>
        </View>
        <View style={styles.sizeContainer}>
          <Image source={require('../../assets/icons/layers.png')} style={styles.icon} />
          <Text style={styles.hotelSize}>{size}</Text>
        </View>
      </View>
      <Image source={require('../../assets/icons/heart.png')} style={styles.heartIcon} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'column',
    backgroundColor: 'white',
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 10,
  },
  imageContainer: {
    width: '100%',
    height: 120,
    borderRadius: 10,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 5,
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
  },
  cardContent: {
    flex: 1,
    marginTop: 10,
    alignItems: 'flex-start',
    width: '100%',
  },
  hotelName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  sizeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  icon: {
    width: 20,
    height: 20,
    marginRight: 5,
  },
  hotelLocation: {
    fontSize: 14,
    color: 'gray',
    flexShrink: 1, 
  },
  hotelSize: {
    fontSize: 14,
    color: 'gray',
  },
  heartIcon: {
    width: 24,
    height: 24,
    tintColor: 'red',
    position: 'absolute',
    top: 10,
    right: 10,
  },
});

export default SaveCard;
