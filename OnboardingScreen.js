import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';

const OnboardingScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ImageBackground 
        source={require('../assets/delivery-guy.jpg')}  
        style={styles.background}
        imageStyle={styles.imageStyle}
      >
        <View style={styles.overlay}>
          <Image source={require('../assets/carot.png')} style={styles.carrotIcon} />

          <Text style={styles.title}>Welcome{'\n'} <Text style={styles.bold}>to our store</Text></Text>
          <Text style={styles.subtitle}>Get your groceries in as fast as one hour</Text>

          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Home')}>
            <Text style={styles.buttonText}>Get Started</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  imageStyle: {
    resizeMode: 'cover',
    alignSelf: 'center',
  },
  overlay: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    padding: 20,
    paddingBottom: 100,
    backgroundColor: 'transparent',
    alignItems: 'center',
  },
  carrotIcon: {
    width: 40,
    height: 50,
    marginBottom: 10,
  },
  title: {
    fontSize: 48,
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  bold: {
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 16,
    color: 'white',
    textAlign: 'center',
    marginBottom: 50,
  },
  button: {
    backgroundColor: '#6DBE45',
    paddingVertical: 20,
    paddingHorizontal: 130,
    borderRadius: 120,
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
  },
});

export default OnboardingScreen;