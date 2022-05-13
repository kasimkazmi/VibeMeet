import React, {useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  KeyboardAvoidingView,
  Image,
} from 'react-native';
import Modal from 'react-native-modal';
import {TextInput} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {colors} from '../Constants';
import TextInputWithLable from './TextInputWithLabel';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {ButtonComponent} from '.';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
const EditProfileModal = ({isModalVisible, toggleModal, setName}) => {
  const [imageUri, setImageUri] = useState('');
  function camera() {
    launchCamera(
      {
        mediaType: 'mixed',
        includeBase64: true,
        maxHeight: 800,
        maxWidth: 800,
        quality: 0.8,
      },
      response => {
        console.warn('response Back', response);
        if (!response.didCancel) {
          setImageUri(response.assets[0].uri);
          console.log('response', JSON.stringify(response));
        }
      },
    );
  }
  function gallary() {
    launchImageLibrary(
      {
        mediaType: 'mixed',
        includeBase64: true,
        maxHeight: 800,
        maxWidth: 800,
        quality: 0.8,
      },
      response => {
        if (!response.didCancel) {
          setImageUri(response.assets[0].uri);
          console.log('response', JSON.stringify(response));
        }
      },
    );
  }

  return (
    <View style={{flex: 1}}>
      <Modal
        // backdropOpacity={0.1}
        animationOut={'fadeOut'}
        animationOutTiming={1000}
        isVisible={isModalVisible}>
        <View style={styles.modalView}>
          <KeyboardAwareScrollView  showsVerticalScrollIndicator={false}  extraHeight={-100}
            keyboardOpeningTime={10}>
            <View
              style={{
                // flex: 1,
              }}
              onPress={() => {}}>
              <TouchableOpacity
                onPress={() => {
                  camera();
                }}
                style={{
                  alignSelf: 'center',
                  height: '20%',
                  width: '30%',
                }}>
                {/* <Icon
                name="camera"
                color={colors.white}
                size={60}
                style={{alignSelf: 'center'}}
              /> */}
                <Image
                  style={{
                    height: 80,
                    width: 80,
                    borderRadius: 10,

                    alignSelf: 'center',
                  }}
                  resizeMode="center"
                  source={
                    imageUri == ''
                      ? require('../Assets/Images/addUser.png')
                      : {uri: imageUri}
                  }
                />
              </TouchableOpacity>
              <View style={{}}>
                <TextInputWithLable
                  label={'Name'}
                  onChangeText={val => setName(val)}
                />
                <TextInputWithLable label={'Location'} />
                <TextInputWithLable label={'Email'} />
              </View>
              <View style={{flexDirection: 'row'}}>
                <ButtonComponent name={'Submit'} onPress={toggleModal} />
              </View>
            </View>
          </KeyboardAwareScrollView>
        </View>
      </Modal>
    </View>
  );
};

export default EditProfileModal;

const styles = StyleSheet.create({
  modalView: {
    backgroundColor: colors.pink,
    borderRadius: 9,
    // height: '80%',
    flex:0.75,
    padding: 10,
    width: '100%',
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
    justifyContent: 'center',
    textAlign: 'center',
    fontWeight: '100',
  },
});
