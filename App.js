import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { COLORS } from './constants/colors';

// Screens
import OnboardingScreen from './screens/OnboardingScreen';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import TripPlanningScreen from './screens/TripPlanningScreen';
import HeatmapScreen from './screens/HeatmapScreen';
import TrackerScreen from './screens/TrackerScreen';
import SOSScreen from './screens/SOSScreen';
import NewsScreen from './screens/NewsScreen';
import CatchRecordScreen from './screens/CatchRecordScreen';
import ProfileScreen from './screens/ProfileScreen';
import CompassScreen from './screens/CompassScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const HomeStack = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: true,
      headerStyle: { backgroundColor: COLORS.primary },
      headerTintColor: COLORS.white,
      headerTitleStyle: { fontWeight: 'bold' },
    }}
  >
    <Stack.Screen name="Home" component={HomeScreen} />
    <Stack.Screen name="TripPlanning" component={TripPlanningScreen} />
    <Stack.Screen name="News" component={NewsScreen} />
    <Stack.Screen name="CatchRecord" component={CatchRecordScreen} />
  </Stack.Navigator>
);

const MainTabs = () => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      headerShown: true,
      headerStyle: { backgroundColor: COLORS.primary },
      headerTintColor: COLORS.white,
      headerTitleStyle: { fontWeight: 'bold' },
      tabBarStyle: { backgroundColor: COLORS.card, borderTopWidth: 1, borderTopColor: COLORS.border },
      tabBarActiveTintColor: COLORS.primary,
      tabBarInactiveTintColor: COLORS.lightText,
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;

        if (route.name === 'HomeTab') {
          iconName = focused ? 'home' : 'home-outline';
        } else if (route.name === 'Heatmap') {
          iconName = focused ? 'map' : 'map-outline';
        } else if (route.name === 'Tracker') {
          iconName = focused ? 'navigate' : 'navigate-outline';
        } else if (route.name === 'Compass') {
          iconName = focused ? 'compass' : 'compass-outline';
        } else if (route.name === 'SOS') {
          iconName = focused ? 'warning' : 'warning-outline';
        } else if (route.name === 'Profile') {
          iconName = focused ? 'person' : 'person-outline';
        }

        return <Ionicons name={iconName} size={size} color={color} />;
      },
    })}
  >
    <Tab.Screen name="HomeTab" component={HomeStack} options={{ title: 'Home', headerShown: false }} />
    <Tab.Screen name="Heatmap" component={HeatmapScreen} />
    <Tab.Screen name="Tracker" component={TrackerScreen} />
    <Tab.Screen name="Compass" component={CompassScreen} />
    <Tab.Screen name="SOS" component={SOSScreen} />
    <Tab.Screen name="Profile" component={ProfileScreen} />
  </Tab.Navigator>
);

const App = () => (
  <NavigationContainer>
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Onboarding" component={OnboardingScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Main" component={MainTabs} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default App;