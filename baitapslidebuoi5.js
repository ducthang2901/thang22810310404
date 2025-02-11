import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Alert } from "react-native";

const baitapslidebuoi5 = () => {
  const [backgroundColor, setBackgroundColor] = useState("green");

  const handlePress = (color) => {
    setBackgroundColor(color);
    Alert.alert("Color Changed", `Màu nền đã thay đổi thành ${color.toUpperCase()}`);
  };

  return (
    <View style={[styles.container, { backgroundColor }]}> 
      <TouchableOpacity onPress={() => handlePress("green")} style={[styles.button, { backgroundColor: "green" }]}>
        <Text style={styles.buttonText}>GREEN</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handlePress("blue")} style={[styles.button, { backgroundColor: "blue" }]}>
        <Text style={styles.buttonText}>BLUE</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handlePress("brown")} style={[styles.button, { backgroundColor: "brown" }]}>
        <Text style={styles.buttonText}>BROWN</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handlePress("yellow")} style={[styles.button, { backgroundColor: "yellow" }]}>
        <Text style={[styles.buttonText, { color: "black" }]}>YELLOW</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handlePress("red")} style={[styles.button, { backgroundColor: "red" }]}>
        <Text style={styles.buttonText}>RED</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handlePress("black")} style={[styles.button, { backgroundColor: "black" }]}>
        <Text style={styles.buttonText}>BLACK</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  button: {
    width: "80%",
    padding: 15,
    borderRadius: 5,
    alignItems: "center",
    marginVertical: 5,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default baitapslidebuoi5;