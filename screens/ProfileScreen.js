import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import { COLORS } from '../constants/colors';

const ProfileScreen = ({ navigation, route }) => {
  const [image, setImage] = useState(null);
  const [name, setName] = useState('John Doe');

  useEffect(() => {
    if (route.params?.newName) {
      setName(route.params.newName);
    }
  }, [route.params?.newName]);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  const handleLogout = () => {
    navigation.navigate('Onboarding');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.profileHeader}>
        <TouchableOpacity onPress={pickImage}>
          {
            image ? (
              <Image source={{ uri: image }} style={styles.profileImage} />
            ) : (
              <Ionicons name="person-circle-outline" size={120} color={COLORS.primary} />
            )
          }
        </TouchableOpacity>
        <Text style={styles.name}>{name}</Text>
      </View>

      <View style={styles.infoContainer}>
        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>Contact Number</Text>
          <Text style={styles.infoValue}>+91 98765 43210</Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>Vessel ID</Text>
          <Text style={styles.infoValue}>IND-TN-01-MM-1234</Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>Home Port</Text>
          <Text style={styles.infoValue}>Kanyakumari</Text>
        </View>
      </View>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('EditProfile', { name: name })}>
        <Text style={styles.buttonText}>Edit Profile</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={pickImage}>
        <Text style={styles.buttonText}>Upload Photo</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <Text style={styles.logoutButtonText}>Logout</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    alignItems: 'center',
    padding: 20,
  },
  profileHeader: {
    alignItems: 'center',
    marginBottom: 30,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: COLORS.text,
    marginTop: 10,
  },
  infoContainer: {
    width: '100%',
    backgroundColor: COLORS.card,
    borderRadius: 10,
    padding: 20,
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.border,
  },
  infoLabel: {
    fontSize: 16,
    color: COLORS.lightText,
  },
  infoValue: {
    fontSize: 16,
    color: COLORS.text,
    fontWeight: '600',
  },
  button: {
    marginTop: 20,
    backgroundColor: COLORS.primary,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    width: 200,
    alignItems: 'center',
  },
  buttonText: {
    color: COLORS.white,
    fontSize: 16,
    fontWeight: 'bold',
  },
  logoutButton: {
    marginTop: 40,
    backgroundColor: COLORS.sos,
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 10,
  },
  logoutButtonText: {
    color: COLORS.white,
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default ProfileScreen;
