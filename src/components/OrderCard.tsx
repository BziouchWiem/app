import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Platform } from 'react-native';

interface OrderCardProps {
  name: string;
  image: any;
  price: string;
  size: string;
  location: string;
  checkIn: string;
  checkOut: string;
  onPress: () => void;
  style?: object;
}

const OrderCard: React.FC<OrderCardProps> = ({ name, image, price, size, location, checkIn, checkOut, onPress, style }) => {
  return (
    <TouchableOpacity style={[styles.card, styles.shadowContainer, style]} onPress={onPress}>
      <View style={styles.row}>
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={image}
            accessibilityLabel={`${name} Order`}
            resizeMode="cover"
          />
        </View>
        <View style={styles.detailsContainer}>
          <View style={styles.nameContainer}>
            <Text style={styles.name}>{name}</Text>
          </View>
          <View style={styles.locationRow}>
            <Image source={require('../../assets/icons/graylocalisation.png')} style={styles.locationIcon} />
            <Text style={styles.location}>{location}</Text>
          </View>
          <View style={styles.priceNightContainer}>
            <Text style={styles.price}>{price.split(" / ")[0]}</Text>
            <Text style={styles.night}>{` / ${price.split(" / ")[1]}`}</Text>
          </View>
          <View style={styles.sizeContainer}>
            <Image source={require('../../assets/icons/layers.png')} style={styles.layersIcon} />
            <Text style={styles.reviews}>{size}</Text>
          </View>
        </View>
      </View>
      <View style={styles.dateContainer}>
        <View style={styles.dateBox}>
          <Text style={styles.dateText}>Check in</Text>
          <Text style={styles.date}>{checkIn}</Text>
        </View>
        <Image source={require('../../assets/icons/to.png')} style={styles.arrow} />
        <View style={styles.dateBox}>
          <Text style={styles.dateText}>Check out</Text>
          <Text style={styles.date}>{checkOut}</Text>
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
    marginTop: 5,
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#A34400',
  },
  night: {
    fontSize: 14,
    color: 'black',
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
  dateContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 15,
    paddingVertical: 5,
    borderTopWidth: 1,
    borderTopColor: '#e5e5e5',
  },
  dateBox: {
    alignItems: 'center',
  },
  dateText: {
    fontSize: 14,
    color: '#888888',
  },
  date: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  arrow: {
    width: 20,
    height: 20,
  },
});

export default OrderCard;
