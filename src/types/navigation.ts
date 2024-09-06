export type RootStackParamList = {
    Welcome: undefined;
    SignUp: undefined;
    Login: undefined;
    Main: undefined;
    Search: { filters: { priceRange: number[]; instantBook: boolean; location: string; facilities: { freeWifi: boolean; swimmingPool: boolean; tv: boolean; laundry: boolean; }; rating: number; } };
    Filter: undefined;
    HotelDetails: { hotel: any };
    Chat: undefined;
    ChatDetail: { hotel: any };
    Profile: undefined;
    EditProfile: undefined;
    ProfileDetails : undefined;
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
  
  export type BottomTabParamList = {
    Home: undefined;
    Orders: undefined;
    Save: undefined;
    Chat: undefined;
    Profile: undefined;
  };
  