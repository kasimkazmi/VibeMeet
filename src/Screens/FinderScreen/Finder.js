import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import PinIcon from 'react-native-vector-icons/MaterialIcons';
import ModeModal from '../../Components/ModeModal';

import {images, colors, fonts} from '../../Constants';
import * as Animatable from 'react-native-animatable';
import {TextComponent} from '../../Components';
import NearbyModal from '../../Components/NearbyModal';
import LinearGradient from 'react-native-linear-gradient';

const Finder = () => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [isModalVisible2, setModalVisible2] = useState(false);
  // const [mode, setmode] = useState(false);
  const [active, setactive] = useState({
    leftBtn: false,
    rightBtn: false,
  });

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const NearbytoggleModal = () => {
    setModalVisible2(false);
  };

  const leftbtn = () => {
    toggleModal();
    setactive({
      leftBtn: !active.leftBtn,
      rightBtn: active.rightBtn,
    });
  };
  const rightbtn = () => {
    setactive({
      leftBtn: active.leftBtn,
      rightBtn: !active.rightBtn,
    });

    setModalVisible2(true);
  };
  return (
    <View style={styles.container}>
      <ImageBackground source={images.BG} style={{flex: 1}}>
        {/* <LinearGradient colors={['#4c669f', '#3b5998', '#192f6a']}> */}

        <Animatable.View
          animation="slideInDown"
          style={{
            width: '100%',
            height: '25%',
            position: 'absolute',
            backgroundColor: colors.white,
            borderBottomLeftRadius: 20,
            borderBottomRightRadius: 20,
          }}>
          <TextComponent style={styles.userName}>Hey, User !</TextComponent>
          <TextComponent
            style={{
              paddingHorizontal: 20,
              paddingTop: 15,
              fontSize: 18,
              textAlign: 'center',
            }}>
            Start Meeting People By Clicking on Meet Button.
          </TextComponent>
          <View
            style={{
              flexDirection: 'row',
              paddingHorizontal: 20,
              paddingTop: 15,
              alignItems: 'center',
            }}>
            <View style={{ borderRadius: 50, padding: 8}}>
              <Image
                source={active.rightBtn ? images.nearby : images.heartIcon}
                resizeMode="center"
                style={{height: 25, width: 25}}
              />
            </View>

            <TextComponent
              style={{
                paddingLeft: 10,
                fontSize: 20,
                lineHeight: 20,
                fontWeight:"bold",
                color: colors.black,
              }}>
              {active.rightBtn
                ? 'Nearby Mode Activated'
                : 'Normal Mode Activate'}
            </TextComponent>
          </View>
        </Animatable.View>
        {/* </LinearGradient> */}

        {/* Mode Code  Start */}

        <View
          style={{
            flex: 1,
          }}>
          <View
            style={{
              flexDirection: 'row',
              height: '80%',
              width: '100%',
              // backgroundColor:"white",
              position: 'absolute',
            }}>
            <Animatable.View
              style={{flex: 1, justifyContent: 'flex-end', paddingRight: '20%'}}
              animation="slideInLeft">
              <TouchableOpacity
                activeOpacity={0.6}
                style={[
                  styles.leftBtn,
                  {
                    backgroundColor: active.leftBtn ? colors.black : 'white',
                  },
                ]}
                onPress={() => leftbtn()}>
                <Icon
                  name="timer-outline"
                  color={active.leftBtn ? colors.white : colors.pink}
                  size={30}
                />
              </TouchableOpacity>
            </Animatable.View>

            <Animatable.View
              style={{flex: 1, paddingLeft: '20%', justifyContent: 'flex-end'}}
              animation="lightSpeedIn">
              <TouchableOpacity
                activeOpacity={0.6}
                style={[
                  styles.rightBtn,
                  {
                    backgroundColor: active.rightBtn ? colors.black : 'white',
                  },
                ]}
                onPress={() => rightbtn()}>
                <Image
                  source={images.locationPin}
                  style={{
                    resizeMode: 'center',
                    height: 30,
                    tintColor: active.rightBtn ? colors.white : colors.pink,
                    width: 30,
                  }}
                />
              </TouchableOpacity>
            </Animatable.View>
          </View>
          <NearbyModal
            isModalVisible={isModalVisible2}
            text={
              active.rightBtn
                ? 'Nearby Mode is Activated Now You will be active and your radious of rador is 1KM'
                : 'Nearby Mode De-Active'
            }
            toggleModal={NearbytoggleModal}
          />
          <ModeModal
            isModalVisible={isModalVisible}
            toggleModal={toggleModal}
          />
        </View>

        {/* Mode Code End  */}
      </ImageBackground>
    </View>
  );
};

export default Finder;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 24,
    paddingTop: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  userName: {
    fontSize: 30,
    fontWeight: '600',
    color: colors.black,
    paddingTop: 20,
    textAlign: 'center',
    paddingLeft: 10,
  },
  rightBtn: {
    backgroundColor: colors.white,
    borderRadius: 50,
    alignSelf: 'center',
    padding: 10,
  },
  leftBtn: {
    borderRadius: 50,
    alignSelf: 'center',
    padding: 10,
  },
});
