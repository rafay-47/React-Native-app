import 'react-native-gesture-handler'; // Ensure this is at the top
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { PaperProvider } from 'react-native-paper';
import HomeScreen from './app/screens/Home';
import OngoingTrips from './app/screens/OngoingTrips';
import Summary from './app/screens/Summary';
import { TripProvider } from './app/contexts/TripContext';
import { GestureHandlerRootView } from 'react-native-gesture-handler'; // Ensure this import

const Stack = createStackNavigator();

function MyStack() {
  return (
    <PaperProvider>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Trips" component={OngoingTrips} />
        <Stack.Screen name="Summary" component={Summary} />
      </Stack.Navigator>
    </PaperProvider>
  );
}

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <TripProvider>
        <NavigationContainer>
          <MyStack />
        </NavigationContainer>
      </TripProvider>
    </GestureHandlerRootView>
  );
}
