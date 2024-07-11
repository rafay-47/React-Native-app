import React, { createContext, useState,useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
// Create a new context
export const TripContext = createContext();

// Create a provider component
export const TripProvider = ({ children }) => {
    // State to hold the trip details
    const [trips, setTrips] = useState([]);

    // Function to add a new trip
    const addTrip = async (newTrip) => {
        try {
            // Save the new trip to AsyncStorage
            await AsyncStorage.setItem('trips', JSON.stringify([...trips, newTrip]));
            setTrips([...trips, newTrip]);
        } catch (error) {
            console.log('Error saving trip:', error);
        }
    };

    // Function to remove a trip
    const removeTrip = async (tripName) => {
        try {
            // Remove the trip from AsyncStorage
            const updatedTrips = trips.filter(trip => trip.tripName !== tripName);
            await AsyncStorage.setItem('trips', JSON.stringify(updatedTrips));
            setTrips(updatedTrips);
        } catch (error) {
            console.log('Error removing trip:', error);
        }
    };

    // Function to get trips from AsyncStorage
    const getTrips = async () => {
        try {
            const tripsData = await AsyncStorage.getItem('trips');
            if (tripsData) {
                setTrips(JSON.parse(tripsData));
            }
        } catch (error) {
            console.log('Error getting trips:', error);
        }
    };
    const [CompletedTrips, setCompletedTrips] = useState([]);

    // Function to add a new CompletedTrip
    const addCompletedTrip = async (newCompletedTrip) => {
        try {
            // Save the new CompletedTrip to AsyncStorage
            await AsyncStorage.setItem('CompletedTrips', JSON.stringify([...CompletedTrips, newCompletedTrip]));
            setCompletedTrips([...CompletedTrips, newCompletedTrip]);
        } catch (error) {
            console.log('Error saving CompletedTrip:', error);
        }
    };

    // Function to remove a CompletedTrip
    const removeCompletedTrip = async (CompletedTripName) => {
        try {
            // Remove the CompletedTrip from AsyncStorage
            const updatedCompletedTrips = CompletedTrips.filter(CompletedTrip => CompletedTrip.tripName !== CompletedTripName);
            await AsyncStorage.setItem('CompletedTrips', JSON.stringify(updatedCompletedTrips));
            setCompletedTrips(updatedCompletedTrips);
        } catch (error) {
            console.log('Error removing CompletedTrip:', error);
        }
    };

    // Function to get CompletedTrips from AsyncStorage
    const getCompletedTrips = async () => {
        try {
            const CompletedTripsData = await AsyncStorage.getItem('CompletedTrips');
            if (CompletedTripsData) {
                setCompletedTrips(JSON.parse(CompletedTripsData));
            }
        } catch (error) {
            console.log('Error getting CompletedTrips:', error);
        }
    };

    // Call getCompletedTrips when the component mounts
    useEffect(() => {
        getTrips();
        getCompletedTrips();
    }, []);

    // Value object to be provided by the context
    const value = {
        trips,
        addTrip,
        removeTrip,
        CompletedTrips,
        addCompletedTrip,
        removeCompletedTrip,
    };

    // Render the provider with the provided value
    return (
        <TripContext.Provider value={value}>
            {children}
        </TripContext.Provider>
    );
};