import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import { COLORS } from '../constants/colors';
import HomeButton from '../components/HomeButton';
import WeatherWidget from '../components/WeatherWidget';

const HomeScreen = ({ navigation }) => (
  <SafeAreaView style={styles.container}>
    <ScrollView>
      <View style={styles.headerContainer}>
        <Text style={styles.greeting}>Good Morning, Fisherman!</Text>
        <Text style={styles.header}>Home Dashboard</Text>
      </View>
      <WeatherWidget />
      <View style={styles.grid}>
        <HomeButton title="Plan Trip" icon="calendar-outline" onPress={() => navigation.navigate('TripPlanning')} />
        <HomeButton title="Heatmap" icon="map-outline" onPress={() => navigation.navigate('Heatmap')} />
        <HomeButton title="My Tracker" icon="navigate-outline" onPress={() => navigation.navigate('Tracker')} />
        <HomeButton title="News & Alerts" icon="notifications-outline" onPress={() => navigation.navigate('News')} />
        <HomeButton title="SOS" icon="warning-outline" onPress={() => navigation.navigate('SOS')} />
        <HomeButton title="Record Catch" icon="camera-outline" onPress={() => navigation.navigate('CatchRecord')} />
      </View>
    </ScrollView>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  headerContainer: {
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  greeting: {
    fontSize: 18,
    color: COLORS.lightText,
    textAlign: 'center',
  },
  header: {
    color: COLORS.primary,
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginTop: 10,
    paddingHorizontal: 10,
  },
});

export default HomeScreen;