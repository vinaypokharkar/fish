import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Animated } from 'react-native';
import * as Location from 'expo-location';
import { COLORS } from '../constants/colors';

const CompassScreen = () => {
  const [location, setLocation] = useState(null);
  const [heading, setHeading] = useState(0);
  const [errorMsg, setErrorMsg] = useState(null);
  const rotation = new Animated.Value(0);

  useEffect(() => {
    const setupLocation = async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      const enabled = await Location.hasServicesEnabledAsync();
      if (!enabled) {
        setErrorMsg('Location services are not enabled. Please enable them in your settings.');
        return;
      }

      Location.watchPositionAsync({ accuracy: Location.Accuracy.High, timeInterval: 1000, distanceInterval: 1 }, (loc) => {
        setLocation(loc.coords);
      });

      Location.watchHeadingAsync((head) => {
        setHeading(head.magHeading);
        Animated.spring(rotation, {
          toValue: head.magHeading,
          speed: 6,
          bounciness: 10,
          useNativeDriver: true,
        }).start();
      });
    };

    setupLocation();

    return () => {
      Location.stopLocationUpdatesAsync();
      Location.stopHeadingUpdatesAsync();
    };
  }, []);

  const rotationStyle = {
    transform: [{ rotate: rotation.interpolate({ inputRange: [0, 360], outputRange: ['-360deg', '0deg'] }) }],
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Compass</Text>
      <View style={styles.compassContainer}>
        <View style={styles.marker} />
        <Animated.View style={[styles.compass, rotationStyle]}>
          <Text style={[styles.direction, styles.north]}>N</Text>
          <Text style={[styles.direction, styles.east]}>E</Text>
          <Text style={[styles.direction, styles.south]}>S</Text>
          <Text style={[styles.direction, styles.west]}>W</Text>
        </Animated.View>
      </View>
      <Text style={styles.headingText}>{Math.round(heading)}°</Text>
      <View style={styles.locationContainer}>
        {location ? (
          <>
            <Text style={styles.locationText}>Latitude: {location.latitude.toFixed(6)}</Text>
            <Text style={styles.locationText}>Longitude: {location.longitude.toFixed(6)}</Text>
          </>
        ) : (
          <Text style={styles.locationText}>{errorMsg || 'Fetching location...'}</Text>
        )}
      </View>
    </View>
  );
};

const COMPASS_SIZE = 280;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    color: COLORS.primary,
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 30,
  },
  compassContainer: {
    width: COMPASS_SIZE,
    height: COMPASS_SIZE,
    alignItems: 'center',
    justifyContent: 'center',
  },
  marker: {
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderLeftWidth: 10,
    borderRightWidth: 10,
    borderBottomWidth: 20,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: COLORS.sos,
    position: 'absolute',
    top: -25,
    zIndex: 1,
  },
  compass: {
    width: COMPASS_SIZE,
    height: COMPASS_SIZE,
    borderRadius: COMPASS_SIZE / 2,
    borderWidth: 2,
    borderColor: COLORS.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  direction: {
    fontSize: 24,
    fontWeight: 'bold',
    color: COLORS.primary,
    position: 'absolute',
  },
  north: { top: 10 },
  south: { bottom: 10 },
  east: { right: 10 },
  west: { left: 10 },
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: COLORS.text,
    marginTop: 30,
  },
  locationContainer: {
    marginTop: 20,
    padding: 20,
  },
  locationText: {
    color: COLORS.text,
    fontSize: 18,
    textAlign: 'center',
  },
});

export default CompassScreen;