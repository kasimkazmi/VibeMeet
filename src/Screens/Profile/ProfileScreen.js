import React, {useState, useEffect} from 'react';
import {
  View,
  SafeAreaView,
  StyleSheet,
  Image,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import * as Animatable from 'react-native-animatable';

import {
  Avatar,
  Title,
  Caption,
  Text,
  Switch,
  TouchableRipple,
} from 'react-native-paper';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon2 from 'react-native-vector-icons/Fontisto';
import Icon3 from 'react-native-vector-icons/FontAwesome5';

import Share from 'react-native-share';
import files from '../../Assets/filesBase64';
import {colors, fonts, images, strings} from '../../Constants';
import EditProfileModal from '../../Components/EditProfileModal';
import Shareit from 'react-native-vector-icons/FontAwesome';

import {ScrollView} from 'react-native-gesture-handler';
// import strings from '../../Constants/strings';

const ProfileScreen = props => {
  const [switchValue, setSwitchValue] = useState(false);

  const [isModalVisible, setModalVisible] = useState(false);
  const [name, setName] = useState('');

  useEffect(() => {
    setName('User Name ');
  }, []);
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const toggleSwitch = value => {
    //To handle switch toggle
    setSwitchValue(value);
    //State changes according to switch
  };
  const myCustomShare = async () => {
    const shareOptions = {
      message: "App. I'v on it.",
      // url: files.appLogo,
      // urls: [files.image1, files.image2]
    };

    try {
      const ShareResponse = await Share.open(shareOptions);
      console.log(JSON.stringify(ShareResponse));
    } catch (error) {
      console.log('Error => ', error);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Animatable.View style={styles.TopView} animation="slideInDown">
          <View style={{flexDirection: 'row'}}>
            <View style={{paddingRight: 10}}>
              <ImageBackground source={images.DP} style={styles.img}>
                <Image
                  source={images.Verified}
                  style={{
                    position: 'absolute',
                    height: 30,
                    width: 30,
                    resizeMode: 'contain',
                    left: '75%',
                    top: 0,
                  }}
                />
              </ImageBackground>
            </View>

            <View style={{}}>
              <View style={{flexDirection: 'row'}}>
                <View style={{flex: 1}}>
                  <Title
                    style={[
                      styles.user,
                      {
                        color: colors.white,
                        marginBottom: 5,
                      },
                    ]}>
                    {name}
                  </Title>
                </View>

                <TouchableOpacity
                  onPress={() => {
                    toggleModal();
                  }}
                  style={{}}>
                  <Icon
                    name="account-edit-outline"
                    color={colors.white}
                    size={25}
                  />
                </TouchableOpacity>
              </View>

              <View style={styles.row}>
                <Icon name="map-marker-radius" color={colors.white} size={20} />
                <Text style={{color: '#ffff', paddingLeft: 8}}>
                  Ludhiana,Punjab
                </Text>
              </View>
              <View style={styles.row}>
                <Icon name="phone" color={colors.white} size={20} />
                <Text style={{color: '#ffff', paddingLeft: 8}}>
                  +91-8427763810
                </Text>
              </View>
              <View style={styles.row}>
                <Icon name="email" color={colors.white} size={20} />
                <Text style={{color: '#ffff', paddingLeft: 8}}>
                  Kasimkazmi27@gmail.com
                </Text>
              </View>
            </View>
          </View>

          {/* Play Audio Msg Section Start  */}
          <View
            style={{
              flexDirection: 'row',
              minHeight: 20,
              width: 300,
            }}>
              <View style={{backgroundColor:colors.white,borderRadius:30,paddingHorizontal:20, alignItems:"center" ,flexDirection:"row"}}>

            <Icon2
              name="play"
              color={colors.pink}
              size={18}
              style={{
                padding: 8,
                marginRight:10,
              }}
            />
            <Text>
              Play
            </Text>
              </View>

<View style={{alignItems: 'flex-end',flex: 1, }}> 

              <TouchableRipple onPress={myCustomShare} >
                  <Shareit
                    name="share-square-o"
                    color={colors.white}
                    size={20}
                    style={{
                      padding: 8,
                    }}
                  />
                  {/* <Text style={styles.menuItemText}>Tell Your Friends</Text> */}
              </TouchableRipple>
              </View>

          </View>

          {/* End Here  */}
        </Animatable.View>

        {/* Middle View Content Start */}
        <>
          <View style={styles.MiddleView}>
            <View
              style={[
                styles.referPointView,
                {
                  borderRightColor: '#dddddd',
                  borderRightWidth: 1,
                },
              ]}>
              <Icon2
                name="wallet"
                color={colors.purple}
                size={30}
                style={{
                  padding: 8,
                }}
              />
              <Caption style={{fontSize: 14}}>My Points :( )</Caption>
            </View>
            <View style={styles.referPointView}>
              {/* <Icon3
                name="slideshare"
                color={colors.purple}
                size={30}
                style={{
                  padding: 8,
                }}
              /> */}
              <View style={{}}>
                <Image
                  source={images.referIcon}
                  style={{height: 40, width: 40, tintColor: colors.purple}}
                />
              </View>

              <Caption style={{paddingTop: 6, fontSize: 14}}>
                Refer & Earn : ( )
              </Caption>
            </View>
          </View>
        </>

        {/* End Here  */}

        <View
          style={{
            marginTop: 20,
            paddingHorizontal: 20,
            flex: 1,
          }}>
          <Title style={{paddingBottom: 8}}>Social</Title>
          <View
            style={{
              flexDirection: 'row',
              padding: 8,
              borderColor: colors.pink,
              borderBottomColor: colors.purple,
              alignItems: 'center',
            }}>
            <Icon
              name="facebook"
              color={colors.blue}
              size={30}
              style={{flex: 1}}
            />
            <Caption
              style={{paddingRight: '50%', color: colors.blue, fontSize: 16}}>
              Facebook
            </Caption>

            <Switch
              onValueChange={toggleSwitch}
              value={switchValue}
              color={colors.purple}
              thumbColor={colors.purple}
              style={{justifyContent: 'flex-end', flex: 1}}
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              padding: 8,
              alignItems: 'center',
              borderBottomColor: colors.pink,
            }}>
            <Icon
              name="instagram"
              color={colors.pink}
              size={30}
              style={{flex: 1}}
            />

            <Caption
              style={{paddingRight: '50%', fontSize: 16, color: colors.pink}}>
              Instagram
            </Caption>

            <Switch
              onValueChange={toggleSwitch}
              value={switchValue}
              color={colors.pink}
              thumbColor={colors.pink}
              style={{justifyContent: 'flex-end', flex: 1}}
            />
          </View>
        </View>
        <View
          style={{
            marginTop: 20,
            paddingHorizontal: 20,
            flex: 1,
          }}>
          <Title style={{paddingBottom: 8}}>About</Title>
          <View
            style={{
              flexDirection: 'row',
              borderTopWidth: 0.2,
              padding: 8,
              flex: 1,
              minHeight: 50,

              borderColor: colors.pink,
              borderBottomColor: colors.purple,
              alignItems: 'center',
              borderBottomWidth: 0.2,
            }}>
            <Caption>{strings.about} </Caption>
            {/* <Icon
              name="facebook"
              color={colors.blue}
              size={30}
              style={{flex: 1}}
            /> */}
          </View>
        </View>
        <>
          <View style={{paddingTop: 20}}>
            <TouchableRipple onPress={() => {}}>
              <View style={styles.menuItem}>
                <Icon name="heart-outline" color={colors.pink} size={25} />
                <Text style={styles.menuItemText}>Your Match</Text>
              </View>
            </TouchableRipple>
            <TouchableRipple onPress={() => {}}>
              <View style={styles.menuItem}>
                <Icon name="credit-card" color={colors.pink} size={25} />
                <Text style={styles.menuItemText}>Donate</Text>
              </View>
            </TouchableRipple>
            <TouchableRipple onPress={myCustomShare}>
              <View style={styles.menuItem}>
                <Icon name="share-outline" color={colors.pink} size={25} />
                <Text style={styles.menuItemText}>Tell Your Friends</Text>
              </View>
            </TouchableRipple>
            <TouchableRipple onPress={() => {}}>
              <View style={styles.menuItem}>
                <Icon
                  name="account-check-outline"
                  color={colors.pink}
                  size={25}
                />
                <Text style={styles.menuItemText}>Support</Text>
              </View>
            </TouchableRipple>
            <TouchableRipple onPress={() => {}}>
              <View style={styles.menuItem}>
                <Icon
                  name="account-check-outline"
                  color={colors.pink}
                  size={25}
                />
                <Text style={styles.menuItemText}>Settings</Text>
              </View>
            </TouchableRipple>
          </View>
          <EditProfileModal
            isModalVisible={isModalVisible}
            setName={setName}
            toggleModal={toggleModal}
          />
        </>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  TopView: {
    height: 200,
    alignItems: 'center',
    paddingTop: 20,
    marginBottom: 15,
    backgroundColor: colors.pink,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  user: {
    fontSize: 18,
    fontWeight: 'bold',
  },

  row: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  MiddleView: {
    flexDirection: 'row',
    height: 80,
    borderBottomColor: colors.pink,
    borderTopColor: colors.pink,
  },
  referPointView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  img: {
    borderRadius: 8,
    height: 120,
    backgroundColor: colors.white,
    width: 120,
    resizeMode: 'contain',
  },
  menuItem: {
    flexDirection: 'row',
    paddingVertical: 15,
    borderBottomWidth: 0.4,
    paddingHorizontal: 30,
  },
  menuItemText: {
    color: colors.purple,
    marginLeft: 20,
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 26,
  },
});
