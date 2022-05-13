import React, {useState} from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import Modal from 'react-native-modal';

const NearbyModal = ({isModalVisible, text, toggleModal}) => {
  console.log({isModalVisible});
  setTimeout(() => {
    toggleModal();
              }, 1000);

  return (
    <View style={{flex: 1}}>
      <Modal
        backdropOpacity={0.1}
        animationIn={'fadeIn'}
        animationInTiming={200}
        animationOut={'fadeOut'}
        animationOutTiming={1600}
        isVisible={isModalVisible}
        onBackdropPress={toggleModal}
        >
        <View style={styles.modalView}>
          <View
            style={{alignItems: 'center'}}
            activeOpacity={0.8}
            onPress={() => {}}>
            <Text
              style={[
                styles.modalcells,
                {
                  borderRadius: 10,
                  borderTopRightRadius: 20,
                  textAlign:"center"
                },
              ]}>
                {text}
            
              </Text>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default NearbyModal;

const styles = StyleSheet.create({
  modalView: {
    backgroundColor: 'black',
    borderRadius: 20,
    padding: 10,
    width: '60%',
    alignSelf: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },
  modalStyle: {
    width: '60%',
  },
  modalcells: {
    padding: 10,
    fontSize: 16,
    color: 'white',
    justifyContent:"center",
    textAlign: 'center',
    fontWeight: '100',
  },
});
