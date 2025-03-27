import React, { useState, useEffect } from 'react';
import { 
  View, Text, Image, TextInput, TouchableOpacity, StyleSheet, 
  KeyboardAvoidingView, Platform, Keyboard, ScrollView 
} from 'react-native';

const PhoneNumberScreen = ({ navigation }) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isKeyboardVisible, setKeyboardVisible] = useState(false);

  useEffect(() => {
    const showSubscription = Keyboard.addListener('keyboardDidShow', () => {
      setKeyboardVisible(true);
    });
    const hideSubscription = Keyboard.addListener('keyboardDidHide', () => {
      setKeyboardVisible(false);
    });

    return () => {
      showSubscription.remove();
      hideSubscription.remove();
    };
  }, []);

  return (
    <KeyboardAvoidingView 
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <ScrollView 
        contentContainerStyle={styles.scrollContainer}
        keyboardShouldPersistTaps="handled"
      >
        {/* Nút quay lại */}
        <TouchableOpacity 
          onPress={() => navigation.goBack()} 
          style={[styles.backButton, isKeyboardVisible ? styles.backButtonKeyboardVisible : null]}
        >
          <Text style={styles.backText}>{'<'}</Text>
        </TouchableOpacity>

        <Text style={styles.title}>Enter your mobile number</Text>

        {/* Ô nhập số điện thoại */}
        <View style={styles.inputContainer}>
          <Image source={require('../assets/nuoc.jpg')} style={styles.flag} />
          <Text style={styles.countryCode}>+880</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter number"
            keyboardType="phone-pad"
            value={phoneNumber}
            onChangeText={(text) => {
              if (text.length <= 10) setPhoneNumber(text);
            }}
            onFocus={() => setKeyboardVisible(true)}
          />
        </View>
      </ScrollView>

      {/* Nút tiếp tục */}
      <TouchableOpacity 
        style={[styles.nextButton, isKeyboardVisible ? styles.nextButtonKeyboardVisible : null]}
        onPress={() => {
          if (phoneNumber.length === 10) {
            navigation.navigate('VerificationScreen', { phone: phoneNumber });
          } else {
            alert("Please enter a valid 10-digit phone number.");
          }
        }}
      >
        <Text style={styles.nextButtonText}>{'>'}</Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backButton: {
    position: 'absolute',
    top: 50,
    left: 20,
  },
  backButtonKeyboardVisible: {
    top: 20, // Khi bàn phím mở, đẩy nút lên trên
  },
  backText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 12,
    padding: 12,
    width: '100%',
    backgroundColor: '#f9f9f9',
  },
  flag: {
    width: 28,
    height: 18,
    marginRight: 10,
  },
  countryCode: {
    fontSize: 18,
    fontWeight: '500',
    marginRight: 10,
  },
  input: {
    flex: 1,
    fontSize: 16,
  },
  nextButton: {
    backgroundColor: '#4CAF50',
    padding: 15,
    borderRadius: 30,
    width: 60,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 5,
    position: 'absolute',
    bottom: 30,
    alignSelf: 'center',
  },
  nextButtonKeyboardVisible: {
    bottom: '10%',
  },
  nextButtonText: {
    fontSize: 24,
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default PhoneNumberScreen;