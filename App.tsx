import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text, StyleSheet, Image } from 'react-native';
import WelcomeScreen from './src/screens/WelcomeScreen';
import SignUpScreen from './src/screens/SignUpScreen';
import LoginScreen from './src/screens/LoginScreen';
import HomeScreen from './src/screens/HomeScreen';
import HotelDetailsScreen from './src/screens/HotelDetailsScreen';
import OrdersScreen from './src/screens/OrdersScreen';
import SaveScreen from './src/screens/SaveScreen';
import ChatScreen from './src/screens/ChatScreen';
import ChatDetailScreen from './src/screens/ChatDetailScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import EditProfileScreen from './src/screens/EditProfileScreen';
import ProfileDetailsScreen from './src/screens/ProfileDetailsScreen';
import { ProfileProvider } from './src/context/ProfileContext';


type Hotel = {
  id: string;
  name: string;
  location: string;
  
};

export type RootStackParamList = {
  
  Welcome: undefined;
  SignUp: undefined;
  Login: undefined;
  Main: undefined;
  Search: { filters: { priceRange: number[]; instantBook: boolean; location: string; facilities: { freeWifi: boolean; swimmingPool: boolean; tv: boolean; laundry: boolean; }; rating: number; } };
  Filter: undefined;
  HotelDetails: { hotel: Hotel };
  Chat: undefined;
  ChatDetail: { hotel: Hotel };
  Profile: undefined;
  EditProfile: undefined;
  ProfileDetails: undefined;
  ProfileDetailsScreen: {
    name: string;
    email: string;
    phone: string;
    address: string;
    birthDate: string;
    gender: string;
    notifications: string;
    cardNumber: string;
    cardType: string;
  };
};

const Stack = createStackNavigator<RootStackParamList>();

export type BottomTabParamList = {
  Home: undefined;
  Orders: undefined;
  Save: undefined;
  Chat: undefined;
  Profile: undefined;
};

const Tab = createBottomTabNavigator<BottomTabParamList>();

const icons = {
  Home: { active: require('./assets/icons/home-active.png'), inactive: require('./assets/icons/home.png') },
  Orders: { active: require('./assets/icons/orders-active.png'), inactive: require('./assets/icons/orders.png') },
  Save: { active: require('./assets/icons/save-active.png'), inactive: require('./assets/icons/save.png') },
  Chat: { active: require('./assets/icons/chat-active.png'), inactive: require('./assets/icons/chat.png') },
  Profile: { active: require('./assets/icons/profile-active.png'), inactive: require('./assets/icons/profile.png') },
};

const MainTabs: React.FC = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size, focused }) => {
          const iconSource = focused ? icons[route.name].active : icons[route.name].inactive;
          return <Image source={iconSource} style={{ width: size, height: size }} />;
        },
        tabBarLabel: ({ focused, color }) => (
          <Text style={{ color, fontWeight: focused ? 'bold' : 'normal' }}>
            {route.name}
          </Text>
        ),
        tabBarActiveTintColor: 'black',
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: {
          height: 65,
          paddingBottom: 10,
          paddingTop: 10,
          paddingLeft: 8,
          paddingRight: 8,
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
      <Tab.Screen name="Orders" component={OrdersScreen} options={{ headerShown: false }} />
      <Tab.Screen name="Save" component={SaveScreen} options={{ headerShown: false }} />
      <Tab.Screen name="Chat" component={ChatScreen} options={{ headerShown: false }} />
      <Tab.Screen name="Profile" component={ProfileScreen} options={{ headerShown: false }} />
    </Tab.Navigator>
  );
};

const App: React.FC = () => {
  return (
    <ProfileProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Welcome">
          <Stack.Screen 
            name="Welcome" 
            component={WelcomeScreen} 
            options={{ headerShown: false }} 
          />
          <Stack.Screen 
            name="SignUp" 
            component={SignUpScreen} 
            options={{ headerShown: false }} 
          />
          <Stack.Screen 
            name="Login" 
            component={LoginScreen} 
            options={{ headerShown: false }} 
          />
          <Stack.Screen 
            name="Main" 
            component={MainTabs} 
            options={{ headerShown: false }} 
          />
          <Stack.Screen 
            name="HotelDetails"
            component={HotelDetailsScreen}
            options={{ headerShown: false }} 
          />
          <Stack.Screen 
            name="Chat" 
            component={ChatScreen}
            options={{ headerShown: false }} 
          />
          <Stack.Screen 
            name="ChatDetail"  
            component={ChatDetailScreen} 
            options={{ headerShown: false }} 
          />
          <Stack.Screen 
            name="EditProfile"  
            component={EditProfileScreen} 
            options={{ headerShown: false }} 
          />
          <Stack.Screen 
            name="ProfileDetails"  
            component={ProfileDetailsScreen} 
            options={{ headerShown: false }} 
          />
          <Stack.Screen 
            name="Profile"
            component={ProfileScreen}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </ProfileProvider>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
