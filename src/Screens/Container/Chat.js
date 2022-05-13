import React, {useState, useCallback, useEffect, useRef} from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
  Dimensions,
  ImageBackground,
  ImageStore,
  NativeScrollEvent,
  NativeSyntheticEvent,
} from 'react-native';
import {
  useTheme,
  Avatar,
  Title,
  Caption,
  Paragraph,
  Drawer,
  TouchableRipple,
  Switch,
} from 'react-native-paper';
import {colors, images} from '../../Constants';
import ParallaxScrollView from 'react-native-parallax-scroll-view';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {even} from 'is_js';
import {event} from 'react-native-reanimated';

const {height, width} = Dimensions.get('window');

// console.log(height);

const DATA = [
  {
    title: 'Jaya Sharma',
    img: images.DP,
    img2: images.logo,
  },
  {
    title: 'Shushma Verma',
    img: images.DP,
    img2: images.logo,
  },
  {
    title: 'Hemma Jain',
    img: images.DP,
    img2: images.logo,
  },
  {
    title: 'Hemma Jain',
    img: images.DP,
    img2: images.logo,
  },
  {
    title: 'Hemma Jain',
    img: images.DP,
    img2: images.logo,
  },
  {
    title: 'Hemma Jain',
    img: images.DP,
    img2: images.logo,
  },
  {
    title: 'Hemma Jain',
    img: images.DP,
    img2: images.logo,
  },
  {
    title: 'Hemma Jain',
    img: images.DP,
    img2: images.logo,
  },
  {
    title: 'Hemma Jain',
    img: images.DP,
    img2: images.logo,
  },
  {
    title: 'Hemma Jain',
    img: images.DP,
    img2: images.logo,
  },
  {
    title: 'Hemma Jain',
    img: images.DP,
    img2: images.logo,
  },
  {
    title: 'Hemma Jain',
    img: images.DP,
    img2: images.logo,
  },
];

const Chat = ({navigation}) => {
  const [messages, setMessages] = useState([]);
  const [color, setcolor] = useState(false);
  const [status, setstatus] = useState(false);
  const [ShowButton, setShowButton] = useState(false);

  const scrollRef = useRef();
  const receviceRequest = () => {
    setcolor(false);
    setstatus(false);
  };
  const SendRequest = () => {
    setcolor(true);
    setstatus(true);
  };

  const next = () => {
    navigation.navigate('IndividualChat');
  };
  const ScrollToTop = () => {};
 
  return (
    <ParallaxScrollView
      backgroundColor={colors.white}
      contentBackgroundColor={colors.white}
      parallaxHeaderHeight={300}
      renderForeground={() => (
        <View
          style={{
            height: 300,
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <View style={styles.wrapper}>
            <View style={styles.BoxWrapper}>
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => receviceRequest()}
                disabled={!color}
                style={[
                  styles.infoBox,
                  {
                    borderColor: color ? colors.black : colors.purple,
                  },
                ]}>
                <Title
                  style={{
                    padding: 10,
                    color: color ? colors.black : colors.pink,
                    textAlign: 'center',
                  }}>
                  Receive
                </Title>
                {/* <Caption>SubText</Caption> */}
              </TouchableOpacity>
              <View style={{padding: 4}} />
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => SendRequest()}
                disabled={color}
                style={[
                  styles.infoBox2,
                  {
                    borderColor: color ? colors.purple : colors.black,
                  },
                ]}>
                <Title
                  style={{
                    padding: 10,
                    color: color ? colors.pink : colors.black,
                    textAlign: 'center',
                  }}>
                  Sent
                </Title>
                {/* <Caption>SubText</Caption> */}
              </TouchableOpacity>
            </View>
          </View>
          <View style={{paddingHorizontal: 10, flex: 0.7}}>
            <ImageBackground source={images.BG} imageStyle={{borderRadius: 20}}>
              <View style={{padding: 10}}>
                <ScrollView
                  style={{flexGrow: 1, alignSelf: 'center'}}
                  horizontal
                  showsHorizontalScrollIndicator={false}>
                  {DATA.map((data, index) => (
                    <View
                      key={index}
                      style={{
                        paddingHorizontal: 6,
                      }}>
                      <TouchableOpacity
                        onPress={() => next()}
                        style={{
                          marginTop: 15,
                          alignItems: 'center',
                        }}>
                        <Avatar.Image
                          size={60}
                          source={status ? data.img : data.img2}
                          style={styles.img}
                        />
                        <View>
                          <Caption style={[styles.lable]}>{data.title}</Caption>
                        </View>
                      </TouchableOpacity>
                    </View>
                  ))}
                </ScrollView>
              </View>
            </ImageBackground>
          </View>
        </View>
      )}>
      {/* Active Chat Section  */}

      <ScrollView
        style={styles.chatView}
        ref={scrollRef}
        onLayout={event => {
          console.log(event.nativeEvent.layout, 'Layout call');
        }}>
        <Text
          style={{
            fontSize: 24,
            fontWeight: 'bold',
            lineHeight: 24,
            color: colors.pink,
            paddingTop: 20,
            paddingLeft: 20,
          }}>
          Active Chats
        </Text>

        {DATA.map((data, index) => (
          <TouchableOpacity key={index} onPress={{}}>
            <View style={styles.buttomChat}>
              <Avatar.Image size={40} source={images.logo} style={styles.img} />
              <View style={{paddingLeft: 8}}>
                <Caption style={{fontWeight: '800', fontSize: 18}}>
                  Kasim kazmi
                </Caption>
                <Title style={styles.caption}>Some Text</Title>
              </View>
            </View>
          </TouchableOpacity>
        ))}
        <TouchableOpacity
          onPress={() =>
            scrollRef.current.scrollToEnd({
              x: 0,
              y: 0,
              animated: true,
            })

            // scrollRef.current.scrollToOffset({ offset: 0, animated: true })

          }>
          <Icon
            name="send-circle"
            color="#9d9d9d"
            size={50}
            style={{
              alignSelf: 'flex-end',
              paddingRight: 20,
              bottom: 40,
              position: 'absolute',
              // font-size: 3rem,
              // z-index: 1,
              // cursor: pointer,
            }}
          />
        </TouchableOpacity>
      </ScrollView>
    </ParallaxScrollView>
  );
};

export default Chat;
const LADO = width;

const styles = StyleSheet.create({


  container: {
    flex: 1,
  },
  wrapper: {
    paddingTop: ' 8%',
    paddingBottom: '8%',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'pink',
  },
  lable: {
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
    color: colors.white,
    paddingTop: 8,
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
  },
  chatView: {
    borderColor: colors.purple,
    borderTopWidth: 0.6,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    flexGrow: 1,
    elevation: 0,
    paddingTop: 8,
  },
  img: {
    // resizeMode:"center",
    // backgroundColor:"#ffff"
  },
  BoxWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    // height: 65,
    // backgroundColor:"pink"
  },

  shadow: {
    shadowColor: '#7F5DF0',
    shadowOffset: {
      width: 2,
      height: 13,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.2,
    elevation: 7,
  },
  buttomChat: {
    flexDirection: 'row',
    marginTop: 15,
    borderBottomWidth: 0.2,
    borderBottomEndRadius: 30,
    borderBottomStartRadius: 30,
    paddingBottom: 14,
    borderColor: colors.darkGray,
    paddingHorizontal: 20,
  },
  infoBox: {
    borderLeftWidth: 30,
    borderRightWidth: 30,
    width: '45%',
    borderTopRightRadius: 65,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 75,
    borderBottomRightRadius: 20,
    borderTopWidth: 0.4,
    borderBottomWidth: 0.4,
  },
  infoBox2: {
    width: '45%',
    borderLeftWidth: 30,
    borderRightWidth: 30,
    borderBottomRightRadius: 55,
    borderBottomLeftRadius: 15,
    borderTopWidth: 0.4,
    borderBottomWidth: 0.4,
    borderTopLeftRadius: 55,
    borderTopRightRadius: 15,
  },
});
