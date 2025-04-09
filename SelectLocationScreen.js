import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Platform,
  Modal,
  FlatList,
  TouchableWithoutFeedback,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const ZONES = ['Banasree', 'Gulshan', 'Dhanmondi'];
const AREAS = ['Residential', 'Commercial'];

const SelectLocationScreen = () => {
  const navigation = useNavigation();
  const [selectedZone, setSelectedZone] = useState('');
  const [selectedArea, setSelectedArea] = useState('');
  const [zoneModalVisible, setZoneModalVisible] = useState(false);
  const [areaModalVisible, setAreaModalVisible] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Text style={styles.backText}>{'<'}</Text>
      </TouchableOpacity>

      <View style={styles.content}>
        <Image source={require('../assets/location.png')} style={styles.image} />

        <Text style={styles.title}>Select Your Location</Text>
        <Text style={styles.subtitle}>
          Switch on your location to stay in tune with what’s happening in your area
        </Text>

        <Text style={styles.label}>Your Zone</Text>
        <TouchableOpacity style={styles.dropdownContainer} onPress={() => setZoneModalVisible(true)}>
          <Text
            style={[styles.dropdownText, !selectedZone && styles.placeholder]}
          >
            {selectedZone || 'Select your zone'}
          </Text>
          <Ionicons name="chevron-down" size={20} color="#999" />
        </TouchableOpacity>

        <Text style={styles.label}>Your Area</Text>
        <TouchableOpacity style={styles.dropdownContainer} onPress={() => setAreaModalVisible(true)}>
          <Text
            style={[styles.dropdownText, !selectedArea && styles.placeholder]}
          >
            {selectedArea || 'Types of your area'}
          </Text>
          <Ionicons name="chevron-down" size={20} color="#999" />
        </TouchableOpacity>
      </View>

      <TouchableOpacity
          style={styles.submitButton}
          onPress={() => {
            if (selectedZone && selectedArea) {
              navigation.navigate('LogInScreen');
            } else {
              alert('Please select both zone and area');
            }
          }}
      >
        <Text style={styles.submitText}>Submit</Text>
      </TouchableOpacity>

      {/* Zone Modal */}
      <Modal visible={zoneModalVisible} transparent animationType="slide">
        <TouchableWithoutFeedback onPress={() => setZoneModalVisible(false)}>
          <View style={styles.modalOverlay}>
            <View style={styles.modalContent}>
              {ZONES.map((zone) => (
                <TouchableOpacity
                  key={zone}
                  style={styles.modalItem}
                  onPress={() => {
                    setSelectedZone(zone);
                    setZoneModalVisible(false);
                  }}
                >
                  <Text style={styles.modalItemText}>{zone}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>

      {/* Area Modal */}
      <Modal visible={areaModalVisible} transparent animationType="slide">
        <TouchableWithoutFeedback onPress={() => setAreaModalVisible(false)}>
          <View style={styles.modalOverlay}>
            <View style={styles.modalContent}>
              {AREAS.map((area) => (
                <TouchableOpacity
                  key={area}
                  style={styles.modalItem}
                  onPress={() => {
                    setSelectedArea(area);
                    setAreaModalVisible(false);
                  }}
                >
                  <Text style={styles.modalItemText}>{area}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </SafeAreaView>
  );
};

export default SelectLocationScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
  },
  content: {
    flex: 1,
    paddingTop: Platform.OS === 'ios' ? 60 : 40,
  },
  backButton: {
    position: 'absolute',
    top: Platform.OS === 'ios' ? 60 : 40,
    left: 20,
    zIndex: 10,
  },
  backText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  image: {
    width: 224.69,
    height: 170.69,
    marginTop: 120,
    alignSelf: 'center',
    resizeMode: 'contain',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  subtitle: {
    textAlign: 'center',
    color: '#666',
    marginBottom: 30,
    paddingHorizontal: 20,
  },
  label: {
    fontSize: 14,
    color: '#999',
    marginBottom: 5,
    marginLeft: 5,
  },
  dropdownContainer: {
    borderBottomWidth: 1,
    borderColor: '#ccc',
    paddingVertical: 12,
    paddingHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  dropdownText: {
    fontSize: 16,
    color: '#333',
  },
  placeholder: {
    color: '#999',
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0,0,0,0.3)',
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: 20,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },
  modalItem: {
    paddingVertical: 15,
  },
  modalItemText: {
    fontSize: 16,
    color: '#333',
  },
  submitButton: {
    width: 364,
    height: 67,
    backgroundColor: '#4CAF50',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginBottom: 20,
  },
  submitText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});