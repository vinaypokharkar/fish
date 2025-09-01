import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { COLORS } from '../constants/colors';

const ProfileScreen = ({ navigation }) => {
  const handleLogout = () => {
    navigation.navigate('Onboarding');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.profileHeader}>
        <Ionicons name="person-circle-outline" size={120} color={COLORS.primary} />
        <Text style={styles.name}>John Doe</Text>
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