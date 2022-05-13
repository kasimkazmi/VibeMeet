import React, {useState} from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import Modal from 'react-native-modal';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {colors} from '../Constants';

const ModeModal = ({isModalVisible, toggleModal}) => {
  console.log(isModalVisible);

  return (
    <View style={{flex: 1}}>
      <Modal
        backdropOpacity={0.8}
        isVisible={isModalVisible}
        onBackdropPress={toggleModal}>
        <View style={styles.modalStyle}>
          <View
            style={[
              styles.modalcells,
              {
                marginVertical: 8,
                alignItems: 'center',
                paddingVertical: 20,
                backgroundColor: colors.pink,
              },
            ]}>
            <Text
              style={[
                {
                  fontSize: 20,
                  textAlign: 'center',
                  color: 'white',
                  lineHeight: 20,
                },
              ]}>
              {' How Long You Are Availiable ?'}
            </Text>
            <Text
              style={[
                {
                  paddingTop: 10,
                  fontSize: 16,
                  color: 'white',
                  textAlign: 'center',
                },
              ]}>
              {' Set time for active your status for Blind Date.'}
            </Text>
          </View>
          <View
            style={{
              backgroundColor: '#e6e6e6',
              borderRadius: 8,
              paddingTop: 4,
            }}>
            <TouchableOpacity  onPress={() => {}}>
              <View
                style={[
                  styles.modalcellsL,
                  {
                    flexDirection: 'row',
                    alignItems: 'center',
                    backgroundColor: '#fff',
                  },
                ]}>
                <Icon style={{}} name="timer-outline" color={'red'} size={20} />
                <Text
                  style={[
                    {
                      paddingLeft: 8,
                      color: 'red',
                      fontSize: 16,
                    },
                  ]}>
                  {'Available for 30 minutes'}
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={{}}>
              <View
                style={[
                  styles.modalcellR,
                  {
                    flexDirection: 'row',
                    alignItems: 'center',
                    backgroundColor: '#fff',
                  },
                ]}>
                <Icon style={{}} name="timer-outline" color={'red'} size={20} />
                <Text
                  style={[
                    {
                      fontSize: 16,
                      paddingLeft: 8,
                      color: 'red',
                    },
                  ]}>
                  {'Available for 30 minutes'}
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity  onPress={{}}>
              <View
                style={[
                  styles.modalcellsL,
                  {
                    flexDirection: 'row',
                    alignItems: 'flex-end',

                    backgroundColor: '#fff',
                  },
                ]}>
                <Icon style={{}} name="timer-outline" color={'red'} size={20} />
                <Text
                  style={[
                    {
                      paddingLeft: 8,
                      fontSize: 16,
                      color: 'red',
                    },
                  ]}>
                  {' Available for 30 minutes'}
                </Text>
              </View>
            </TouchableOpacity>
           
          </View>
           <TouchableOpacity onPress={toggleModal} activeOpacity={0.85}>
              <View
                style={[
                  styles.modalcells,
                  {
                    flexDirection: 'row',
                    backgroundColor: colors.pink,
                    marginTop:8,
                    alignItems: 'center',
                    justifyContent: 'center',
                  },
                ]}>
                <Text style={[{color: 'white'}]}>Cancel</Text>
              </View>
            </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};

export default ModeModal;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 24,
    paddingTop: 20,
    textAlign: 'center',
    color: 'pink',
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },
  modalStyle: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    zIndex: 20,
  },
  modalcells: {
    padding: 12,
    borderRadius: 8,
    // backgroundColor: '#e6e6e6',
  },
  modalcellR: {
    padding: 12,
    borderRadius: 8,
    alignSelf: 'flex-start',
    marginVertical: 8,
    // backgroundColor: '#e6e6e6',
  },
  modalcellsL: {
    padding: 12,
    borderRadius: 8,
    alignSelf: 'flex-end',
    marginVertical: 8,
    // backgroundColor: '#e6e6e6',
  },
});
