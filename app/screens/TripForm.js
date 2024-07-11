import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import { useContext } from 'react';
import { TripContext } from '../contexts/TripContext';
import { useNavigation } from '@react-navigation/native';
const TripForm = ({}) => {
    const navigation = useNavigation();
    const [tripName, setTripName] = useState('');
    const [destination, setDestination] = useState('');
    const [people, setPeople] = useState('');
    const {trips, addTrip } = useContext(TripContext);
    const handleTripNameChange = (text) => {
        setTripName(text);
    };

    const handleDestinationChange = (text) => {
        setDestination(text);
    };
    const handlePeopleChange = (text) => {
        setPeople(text);
    };
    const tripobject = {
        tripName: tripName,
        destination: destination,
        people: people,
    };
    const handleSubmit = () => {
        console.log(tripobject);
        if(tripName != '' || destination != '' || people != ''){
        addTrip(tripobject);
        Alert.alert(
            'Trip Added Successfully','Proceed to Trips', [
              {
                text: 'Ok',
                onPress: () => {navigation.navigate('Trips')},
              },
            ]);
        }
        setTripName('');
        setDestination('');
        setPeople('');
    };

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.textinput}
                mode='outlined'
                placeholder="Trip Name"
                value={tripName}
                onChangeText={handleTripNameChange}
            />
            <TextInput
                style={styles.textinput}
                mode='outlined'
                placeholder="Set the destination"
                value={destination}
                onChangeText={handleDestinationChange}
            />
            <TextInput
                style={styles.textinput}
                mode='outlined'
                placeholder="Number of People"
                value={people}
                onChangeText={handlePeopleChange}
            />
            <Button style={styles.button} mode="contained" title="Submit" onPress={handleSubmit}>
                Submit
            </Button>
        </View>
    );
};
const styles = StyleSheet.create({
    container:{
        display:'flex',
        backgroundColor:'#fff',
        alignItems:'center',
        justifyContent:'center',
    },
    button:{
        marginTop: 20,
        width: '50%',
    },
    textinput:{
        width: '90%',
        marginBottom: 10,
    },
});
export default TripForm;