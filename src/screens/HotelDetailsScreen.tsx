import React from 'react';
import { Dimensions, Text, View, StyleSheet, Image, SafeAreaView, TouchableOpacity, Platform, ScrollView } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import { NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from '../types/navigation';

interface HotelDetailsScreenProps {
  navigation: NavigationProp<RootStackParamList>;
}

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const HotelDetailsScreen: React.FC<HotelDetailsScreenProps> = ({ navigation }) => {
  const images = [
    require('../../assets/images/image1.png'),
    require('../../assets/images/image2.png'),
    require('../../assets/images/image3.png'),
    require('../../assets/images/image4.png')
  ];

  const renderItem = ({ item }: { item: any }) => (
    <View style={styles.imageContainer}>
      <Image source={item} style={styles.image} />
    </View>
  );

  return (
    <SafeAreaView style={styles.safeContainer}>
      <View style={styles.fixedHeader}>
        <TouchableOpacity style={styles.roundButton} onPress={() => navigation.goBack()}>
          <Image source={require('../../assets/icons/arriere.png')} style={styles.icon} />
        </TouchableOpacity>
        <View style={styles.detailButtonContainer}>
          <Text style={styles.headerTitle}>Details</Text>
        </View>
        <TouchableOpacity style={styles.roundButton}>
          <Image source={require('../../assets/icons/heart-outline.png')} style={styles.icon} />
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.carouselContainer}>
          <Carousel
            loop
            width={width}
            height={height * 0.7}
            autoPlay={false}
            data={images}
            scrollAnimationDuration={1000}
            onSnapToItem={(index) => console.log('current index:', index)}
            renderItem={renderItem}
          />
        </View>

        <View style={styles.detailsContainer}>
          <View style={styles.header}>
            <Text style={styles.hotelName}>Japanese-Style Hotel</Text>
            <TouchableOpacity style={styles.shareButton}>
              <Image source={require('../../assets/icons/share.png')} style={styles.icon} />
              <Text style={styles.shareText}>Share</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.locationRow}>
            <Image source={require('../../assets/icons/graylocalisation.png')} style={styles.icon} />
            <Text style={styles.location}>Bitung, Sulawesi Utara</Text>
          </View>
          <View style={styles.ownerRow}>
            <Image source={require('../../assets/icons/grayprofile.png')} style={styles.icon} />
            <Text style={styles.owner}>James Warren </Text>
            <Image source={require('../../assets/icons/verifier.png')} style={styles.icon} />
          </View>

          <View style={styles.amenitiesContainer}>
            <View style={styles.amenity}>
              <Image source={require('../../assets/icons/bed.png')} style={styles.amenityIcon} />
              <Text style={styles.amenityText}>4 Bedroom</Text>
            </View>
            <View style={styles.amenity}>
              <Image source={require('../../assets/icons/bathroom.png')} style={styles.amenityIcon} />
              <Text style={styles.amenityText}>3 Bathroom</Text>
            </View>
            <View style={styles.amenity}>
              <Image source={require('../../assets/icons/orangelayers.png')} style={styles.amenityIcon} />
              <Text style={styles.amenityText}>1,805 Sqft</Text>
            </View>
          </View>

          <Text style={styles.description}>
            Warm and Cozy Old Vintage House in Bitung, Sulawesi Utara with the most Affordable price. Perfect for small or big family, this house close to near supermarket, Mall, Public Facilities, Transportation and Police Station. One of the best house in the world class architecture with the best construction.
          </Text>
        </View>
      </ScrollView>

      <View style={styles.fixedFooter}>
        <View style={styles.priceContainer}>
          <Text style={styles.price}>$10,000</Text>
          <Text style={styles.night}>/night</Text>
        </View>
        <TouchableOpacity style={styles.reserveButton}>
          <Text style={styles.reserveButtonText}>Reserve Now</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: '#fff',
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
  detailButtonContainer: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 30,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
  },
  headerTitle: {
    fontSize: 18,
    color: 'black',
    fontWeight: 'bold',
  },
  scrollView: {
    flex: 1,
  },
  scrollViewContent: {
    paddingBottom: 100,
  },
  carouselContainer: {
    height: height * 0.5,  
  },
  imageContainer: {
    width: width,
    height: height * 0.5, 
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'stretch' 
  },
  detailsContainer: {
    padding: 15,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  hotelName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom:15,
  },
  locationRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  location: {
    fontSize: 16,
    marginLeft: 5,
    color: 'black',
    fontWeight:'bold',
  },
  ownerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
    marginBottom: 20,
  },
  owner: {
    fontSize: 16,
    color: 'black',
    marginLeft: 5,
    fontWeight:'bold',
  },
  amenitiesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
    backgroundColor: '#f6f2f0',
    borderRadius: 20,
    padding: 15,
    width: '100%',
    height: '20%',
  },
  amenity: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  amenityText: {
    marginLeft: 5,
    fontSize: 14,
    color: 'black',
    textAlign: 'center',
  },
  amenityIcon: {
    width: 24,
    height: 24,
  },
  description: {
    fontSize: 14,
    color: 'gray',
  },
  fixedFooter: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 15,
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#ddd',
  },
  shareButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 30,
    backgroundColor: 'white',
    elevation: 2,
  },
  shareText: {
    marginLeft: 5,
    fontSize: 14,
    color: 'black',
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'baseline',
  },
  price: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#A34400',
  },
  night: {
    fontSize: 14,
    color: 'gray',
  },
  reserveButton: {
    backgroundColor: 'black',
    paddingVertical: 15,
    paddingHorizontal: 25,
    borderRadius: 13,
    width: '60%',
  },
  reserveButtonText: {
    textAlign: 'center',
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  icon: {
    width: 20,
    height: 20,
  },
});

export default HotelDetailsScreen;
