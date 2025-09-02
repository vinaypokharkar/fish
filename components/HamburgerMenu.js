
import React, { useState } from 'react';
import { View, TouchableOpacity, Modal, Text, StyleSheet, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { COLORS } from '../constants/colors';

const HamburgerMenu = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View>
      <TouchableOpacity onPress={() => setModalVisible(!modalVisible)} style={styles.hamburgerIcon}>
        <Ionicons name="menu" size={32} color={COLORS.white} />
      </TouchableOpacity>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <ScrollView>
              <TouchableOpacity
                style={styles.modalButton}
                onPress={() => {
                  setModalVisible(!modalVisible);
                  navigation.navigate('NoFishingZone');
                }}
              >
                <Text style={styles.modalText}>No Fishing Zone</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.modalButton}
                onPress={() => {
                  setModalVisible(!modalVisible);
                  navigation.navigate('PotentialFishingZone');
                }}
              >
                <Text style={styles.modalText}>Potential Fishing Zone</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.modalButton}
                onPress={() => {
                  setModalVisible(!modalVisible);
                  navigation.navigate('GpsNavigation');
                }}
              >
                <Text style={styles.modalText}>GPS and Navigation</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.modalButton}
                onPress={() => {
                  setModalVisible(!modalVisible);
                  navigation.navigate('DisasterAlert');
                }}
              >
                <Text style={styles.modalText}>Disaster Alert</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.modalButton}
                onPress={() => {
                  setModalVisible(!modalVisible);
                  navigation.navigate('ImportantContacts');
                }}
              >
                <Text style={styles.modalText}>Important Contacts</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.modalButton}
                onPress={() => {
                  setModalVisible(!modalVisible);
                  navigation.navigate('IBLAlerts');
                }}
              >
                <Text style={styles.modalText}>IBL Alerts</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.modalButton}
                onPress={() => {
                  setModalVisible(!modalVisible);
                  navigation.navigate('OtherServices');
                }}
              >
                <Text style={styles.modalText}>Other Services</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.modalButton}
                onPress={() => {
                  setModalVisible(!modalVisible);
                  navigation.navigate('SeaSafetyLivelihood');
                }}
              >
                <Text style={styles.modalText}>Sea Safety and Livelihood</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.modalButton}
                onPress={() => {
                  setModalVisible(!modalVisible);
                  navigation.navigate('Settings');
                }}
              >
                <Text style={styles.modalText}>Settings</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.modalButton}
                onPress={() => {
                  setModalVisible(!modalVisible);
                  navigation.navigate('About');
                }}
              >
                <Text style={styles.modalText}>About</Text>
              </TouchableOpacity>
            </ScrollView>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  hamburgerIcon: {
    marginRight: 15,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalButton: {
    backgroundColor: COLORS.primary,
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    marginBottom: 10,
    width: 150,
    alignItems: 'center',
  },
  modalText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default HamburgerMenu;
