import React, {useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  ImageBackground,
  Image,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import styles from 'react-native-indicators/src/components/ball-indicator/styles';
import {TextComponent, BackArrow} from '../../Components';
import {images, colors, fonts} from '../../Constants';

const data = [
  {id: 1, title: 'Meet Mode', des: 'Send your query by email'},
  {
    id: 2,
    title: 'Second ?',
    des: 'You will start being charged once the service provider has parked and made contact with you',
  },
  {
    id: 3,
    title: 'Third?',
    des: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
  },
  {
    id: 4,
    title: 'Forth?',
    des: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
  },
  {
    id: 5,
    title: 'Meet Mode',
    des: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
  },
  {
    id: 6,
    title: 'Sixth ?',
    des: 'You will start being charged once the service provider has parked and made contact with you',
  },
];

const Faq = props => {
  // console.log(props,"")
  const [selected, setSelected] = useState([]);

  const handleSelected = id => {
    if (selected.includes(id)) {
      setSelected(selected => selected.filter(s => s !== id));
    } else {
      setSelected(selected => [...selected, id]);
    }
  };

  return (
    <ImageBackground source={images.BG} style={innerStyle.wrapper}>
      <BackArrow route={props.navigation} children={'FAQs'} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            backgroundColor: colors.white,
            height: 160,
            justifyContent: 'center',
          }}>
          <TextComponent
            children={'Frequently Asked Questions'}
            style={innerStyle.subtiitle}
          />
        </View>
        {data.map((item, i) => {
          return (
            <TouchableOpacity
              key={i}
              style={innerStyle.list}
              onPress={() => handleSelected(item.id)}
              activeOpacity={0.7}>
              <View style={innerStyle.row}>
                <View style={innerStyle.col1}>
                  <TextComponent
                    children={item.title}
                    style={innerStyle.lable}
                  />
                </View>
                <View style={innerStyle.col2}>
                  <Image
                    source={
                      selected.includes(item.id)
                        ? images.downArrow
                        : images.arrow
                    }
                    style={innerStyle.downarrow}
                  />
                </View>
              </View>
              {selected.includes(item.id) ? (
                <View>
                  {item.des != '' && (
                    <Text children={item.des} style={innerStyle.des} />
                  )}
                </View>
              ) : null}
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </ImageBackground>
  );
};
// define your styles
const innerStyle = StyleSheet.create({
  wrapper: {
    flex: 1,
  },

  subtiitle: {
    fontSize: 60,
    lineHeight: 60,
    textAlign: 'right',
    color: colors.pink,
  },

  lable: {
    fontSize: 18,
    letterSpacing: 3,
    lineHeight: 18,
    padding: 10,
    color: colors.white,
  },
  list: {
    paddingBottom: 10,
    paddingRight: 20,
    paddingLeft: 20,
    paddingTop: 10,
    borderBottomWidth: 0.3,
    borderColor: '#d3d3d3',
  },
  row: {flexDirection: 'row'},
  downarrow: {
    resizeMode: 'center',
    height: 13,
    width: 13,
  },
  col1: {flex: 1, justifyContent: 'center'},
  col2: {justifyContent: 'center'},
  des: {fontSize: 16, color: colors.black},
});

export default Faq;
