import React, { createContext, useState, ReactNode } from 'react';

interface ProfileData {
  name: string;
  phoneNumber: string;
  email: string;
  gender: string;
  address: string;
  birthDate: string;
  notifications: string;
  cardNumber: string;
  cardType: string;
}

interface ProfileContextProps {
  profileData: ProfileData;
  updateProfileData: (data: ProfileData) => void;
}

export const ProfileContext = createContext<ProfileContextProps | undefined>(undefined);

export const ProfileProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [profileData, setProfileData] = useState<ProfileData>({
    name: '',
    phoneNumber: '',
    email: '',
    gender: '',
    address: '',
    birthDate: '',
    notifications: 'Enabled',
    cardNumber: '',
    cardType: '',
  });

  const updateProfileData = (data: ProfileData) => {
    setProfileData(data);
  };

  return (
    <ProfileContext.Provider value={{ profileData, updateProfileData }}>
      {children}
    </ProfileContext.Provider>
  );
};
