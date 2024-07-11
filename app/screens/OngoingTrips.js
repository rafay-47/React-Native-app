import React, { useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import Footer from "./BottomNav";
import { useContext } from "react";
import { TripContext } from "../contexts/TripContext";
import { Button } from "react-native-paper";

const OngoingTrips = ({ navigation }) => {
  const { trips, removeTrip } = useContext(TripContext);
  const removeTriphandle = (tripName) => {
    removeTrip(tripName);
  };
  const completeTriphandle = (tripName) => {
    removeTrip(tripName);
    navigation.navigate("Summary",{tripName:tripName});
  };
  useEffect(() => {
    console.log(trips);
  }, [trips]);

  return (
    <>
      <View style={styles.headingContainer}>
        <Text style={styles.heading}>Welcome to the Ongoing Trips Screen!</Text>
        <Text style={styles.subheading}>Remove or Complete all your current ongoing trips here.</Text>
      </View>
      <View style={styles.container}>
        {trips.map((trip) => (
          <View key={trip.id} style={styles.trip}>
            <View style={styles.tripDetails}>
              <Text style={styles.text}>Trip Name: {trip.tripName}</Text>
              <Text style={styles.text}>Destination: {trip.destination}</Text>
              <Text style={styles.text}>People: {trip.people}</Text>
            </View>
            <View styles={{display:"flex",flexDirection:"column"}}>
            <Button
              style={styles.deleteButton}
              icon="delete"
              mode="contained"
              onPress={() => removeTriphandle(trip.tripName)}
            >
              Remove
            </Button>
            <Button
              style={styles.deleteButton}
              icon="check-bold"
              mode="contained"
              onPress={() => completeTriphandle(trip.tripName)}
            >
              Complete
            </Button>
            </View>
          </View>
        ))}
        <Footer />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  headingContainer: {
    display: "flex",
    backgroundColor: "#fff",
    alignItems: "center",
    paddingTop: 60,
  },
  container: {
    display: "flex",
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  trip: {
    width: "90%",
    padding: 10,
    borderWidth: 1,
    marginBottom: 10,
    borderColor: "#ccc",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  tripDetails: {
    flex: 1,
  },
  heading: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
  subheading: {
    fontSize: 16,
    color: "grey",
    marginBottom: 20,
    width: "80%",
    flexWrap: "wrap",
    textAlign: "center",
  },
  deleteButton: {
    marginLeft: 10,
    marginBottom: 5,
  },
  text: {
    marginBottom: 5,
  },
});

export default OngoingTrips;
