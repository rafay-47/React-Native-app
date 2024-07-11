
import { StyleSheet, Text, View } from "react-native";
import { Button } from 'react-native-paper';
import React from "react";
import { useNavigation } from "@react-navigation/native";
const color = "#E89452";

const Footer = ({ }) => {
    
    const navigation = useNavigation();
  return (
    <>
      <View style={styles.footer}>
        <Button
          icon="home" mode="contained"
          style={styles.button}
          onPress={() => navigation.navigate("Home")}
        >
          <Text style={{fontSize: 17, }}>
            Home
          </Text>
        </Button>
        <Button 
        icon="airballoon" mode="contained"
          onPress={() => navigation.navigate("Trips")}>
          <Text style={{ fontSize: 17, }}>
            Trips
          </Text>
        </Button>
        <Button
            icon="book" mode="contained"
          onPress={() => navigation.navigate("Summary",{tripName:'null'})}
        >
          <Text
            style={{
              fontSize: 17,
            }}
          >
            Summary
          </Text>
        </Button>
      </View>
    </ >
  );
};
const styles = StyleSheet.create({
  footer: {
    position: "absolute",
    bottom: 0,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    color: "white",
    backgroundColor: "#ffffff",
    width: "100%",
    height: 50,
  },
  // Button Properties
  button: {
    width: "30%",
  },
});
export default Footer;