import React,{useState,useContext, useEffect} from 'react';
import { View, Text,StyleSheet } from 'react-native';
import { Button,TextInput } from 'react-native-paper';
import { TripContext } from '../contexts/TripContext';
import Footer from './BottomNav';
const Summary=({route})=> {
    const {tripName} = route.params;
    const name=tripName;
    const[summary,setSummary]=useState('');
    const [submitted,setSubmitted]=useState(false);
    const {CompletedTrips, addCompletedTrip, removeCompletedTrip} = useContext(TripContext);
    const handleSummaryChange=(text)=>{
        setSummary(text);
    };
    const tripobject={
        tripName: name,
        summary: summary,
    };
    const handleSubmit=()=>{
        addCompletedTrip(tripobject);
        setSummary('');
        setSubmitted(true);
    }
    const removeTriphandle=(tripName)=>{
        removeCompletedTrip(tripName);
    }
    useEffect(() => {
    }, [tripName]);
    return (
        <>
        <View style={styles.headingContainer}>
        <Text style={styles.heading}>Welcome to the Summary Trips Screen!</Text>
        <Text style={styles.subheading}>Write a summary or delete all of your completed trips here.</Text>
        </View>
        <View style={styles.container}>
            <View style={styles.summarycontainer}>
                {!submitted&&name!='null'?
                <><Text style={styles.heading}>Summary for {name}</Text>
                <TextInput
                style={styles.textinput}
                mode='outlined'
                placeholder="Write a Summary"
                value={summary}
                onChangeText={handleSummaryChange}
                />
                <Button
                    style={styles.button}
                    mode='contained'
                    onPress={handleSubmit}
                >
                Save Summary
                </Button>
                </>
                :<></>}
                
            </View>
            <View>
            {CompletedTrips.map((trip) => (
                <View key={trip.id} style={styles.trip}>
                    <View style={styles.tripDetails}>
                        <Text style={styles.text}>Trip Name: {trip.tripName}</Text>
                        <Text style={styles.text}>Summary: {trip.summary}</Text>
                    </View>
                    <Button
                    style={styles.deleteButton}
                    icon="delete"
                    mode="contained"
                    onPress={() => removeTriphandle(trip.tripName)}
                    >
                    Remove
                    </Button>
                </View>
            ))}
            </View>
        </View>
        <Footer/>
        </>
    );
}

const styles = StyleSheet.create({
    headingContainer: {
      display: "flex",
      backgroundColor: "#fff",
      alignItems: "center",
      paddingTop: 60,
    },
    textinput:{
        width: '90%',
        marginBottom: 10,
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
    },
    text: {
      marginBottom: 5,
    },
    summarycontainer:{
        display:'flex',
        backgroundColor:'#fff',
        alignItems:'center',
        justifyContent:'center',
        width:'100%',
    },
});
export default Summary;