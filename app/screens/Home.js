import React from 'react';
import { View, Text,StyleSheet,Alert } from 'react-native';
// import { Button } from 'react-native-paper';
import Footer from './BottomNav';
import TripForm from './TripForm';

const HomeScreen=({})=> {
    
    return (
        <>
        <View style={styles.container}>
            <Text style={styles.heading}>Welcome to the Home Screen!</Text>
            <Text style={styles.subheading}>Plan your trip here</Text>
            <View style={{width:"100%",height:"auto"}}>
                <TripForm/>
            </View>
        </View>
        <Footer/>
        </>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff',
        alignItems:'center',
        justifyContent:'center',
    },
    heading:{
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    subheading:{
        fontSize: 16,
        color: 'grey',
        marginBottom: 20,
    }
});
export default HomeScreen;