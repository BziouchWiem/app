import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Platform } from 'react-native';

interface HotelCardProps {
  name: string;
  image: any;
  price: string;
  night: string;
  location: string;
  size: string;
  onPress: () => void;
  style?: object;
  type?: 'row' | 'column';
  
}

const HotelCard: React.FC<HotelCardProps> = ({ name, image, price, night, location, size, onPress, style, type }) => {
  return (
    <TouchableOpacity style={[styles.card, style]} onPress={onPress}>
      <View style={styles.shadowContainer}>
        <View style={[styles.imageContainer, type === 'row' ? styles.rowImage : styles.columnImage]}>
          <Image
            style={styles.image}
            source={image}
            accessibilityLabel={`${name} Hotel`}
            resizeMode="cover"
          />
        </View>
      </View>
      <View style={styles.detailsContainer}>
        <View style={styles.nameContainer}>
          <Text style={styles.name}>{name}</Text>
          {type === 'column' && (
            <View style={styles.columnPriceNightContainer}>
              <Text style={styles.price}>{price}</Text>
              <Text style={styles.night}>{night}</Text>
            </View>
          )}
        </View>
        {type === 'row' && (
          <View style={styles.priceNightContainer}>
            <Text style={styles.price}>{price}</Text>
            <Text style={styles.night}>{night}</Text>
          </View>
        )}
        <View style={styles.locationRow}>
          <Image source={require('../../assets/icons/graylocalisation.png')} style={styles.icon} />
          <Text style={styles.location}>{location}</Text>
        </View>
        <View style={styles.locationRow}>
          <Image source={require('../../assets/icons/layers.png')} style={styles.icon} />
          <Text style={styles.size}>{size}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    borderRadius: 16,
    marginBottom: 15,
    overflow: 'hidden',
  },
  shadowContainer: {
    ...Platform.select({
      ios: {
        shadowOffset: { width: 2, height: 2 },
        shadowColor: '#333',
        shadowOpacity: 0.3,
        shadowRadius: 4,
      },
      android: {
        elevation: 5,
      },
    }),
  },
  imageContainer: {
    width: '100%',
    borderRadius: 16,
    overflow: 'hidden',
  },
  rowImage: {
    height: 100,
  },
  columnImage: {
    height: 150,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  detailsContainer: {
    padding: 15,
  },
  nameContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  priceNightContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  columnPriceNightContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 'auto',
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#A34400',
  },
  night: {
    fontSize: 14,
    color: 'black',
    marginLeft: 5,
  },
  locationRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  icon: {
    width: 16,
    height: 16,
    marginRight: 5,
  },
  location: {
    fontSize: 14,
    color: 'black',
  },
  size: {
    fontSize: 14,
    color: 'black',
  },
});

export default HotelCard;