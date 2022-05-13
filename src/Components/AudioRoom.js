import {array, date} from 'is_js';
import React, {useEffect, useState} from 'react';
import {Image, Text, View, StyleSheet} from 'react-native';
import {color} from 'react-native-reanimated';
import ImageBackground from 'react-native/Libraries/Image/ImageBackground';
import {colors, fonts, images} from '../Constants';
import BackArrow from './BackArrow';
import * as Animatable from 'react-native-animatable';

const time = Date.now();
console.log(' time...', time);

var today = new Date();
var dayOfMonth = today.getUTCDate();

console.log(' Day:...', dayOfMonth);

// const time2 = new Date();

// console.log(' time...', time2.getTime());
const AudioRoom = props => {
  const [currentDate, setCurrentDate] = useState(false);

  useEffect(() => {
    var TimeType, DayType;
    var date = new Date().getDate();
    console.log(date, 'TOdate');
    var day = new Date().getUTCDay();

    if (day == 1) {
      DayType = 'Monday';
    }
    if (day == 2) {
      DayType = 'Tuesday';
    }

    if (day == 3) {
      DayType = 'Wednesday';
    }
    if (day == 4) {
      DayType = 'Thusday';
    }
    if (day == 5) {
      DayType = 'Friday';
    }
    if (day == 6) {
      DayType = 'Starday';
    }
    if (day == 7) {
      DayType = 'Sunday';
    }
    console.log(day, 'Day:');

    var hours = new Date().getHours();
    if (hours <= 11) {
      TimeType = 'AM';
    } else {
      TimeType = 'PM';
    }

    if (hours > 12) {
      hours = hours - 12;
    }

    if (hours == 0) {
      hours = 12;
    }
    var min = new Date().getMinutes();
    var sec = new Date().getSeconds();
    var month = new Date().getMonth();
    console.log(date, 'TOdate');

    setCurrentDate(
      //   month +
      //     '/ ' +
      DayType +
        ' / ' +
        date +
        ' /' +
        ',' +
        ' Time :' +
        ' ' +
        hours +
        ' ' +
        TimeType +
        ' ' +
        min +
        ':' +
        ' Mins ' +
        sec +
        ':' +
        ' Sec',
    );
  }, []);

  return (
    <View style={styles.container}>
      {/* <View
        style={{
          alignItems: 'center',
          borderWidth: 0.8,
          borderRadius: 30,
          paddingVertical: 8,
          width: 220,
          borderColor: colors.pink,
          alignSelf: 'flex-end',
        }}>
        <Text style={{color: 'green', fontSize: 12}}>Current Date Time</Text>
        <Text style={{color: 'red', fontSize: 10}}>{currentDate}</Text>
      </View> */}

      <View style={{paddingLeft: 20}}>
        <ImageBackground
          imageStyle={{borderRadius: 10}}
          source={images.BG}
          style={{
            height: 170,
            width: 170,

            borderTopRightRadius: 8,
            borderTopLeftRadius: 8,
          }}>
          <Animatable.Image
            animation="tada"
            // delay={}
            iterationDelay={500}
            // infinite 
            iterationCount={"infinite"}             // duration={}
            duraton="200"

            source={images.live}
            style={{
              height: 40,
              alignSelf:"center",
              width: 40,
              flexDirection: 'row',
              // marginLeft: 120,
              
            }}
          />
          <View style={{ paddingLeft: 20, flex: 0.4}}>
            <View
              style={{
                backgroundColor: '#FFFFFF ',
                width: 45,
                borderRadius: 30,
                alignItems: 'center',
                height: 20,
                padding: 2,
              }}>
              <Text style={{fontSize: 12, color: colors.white}}>{'शानदार।'}</Text>
            </View>
            <Text
              style={{
                fontSize: 18,
                fontFamily: fonts.Hindi,
                color: colors.white,
              }}>{"Host name"}
            </Text>
            {/* <Image source={images.FB} style={{height:20,width:20}}/> */}
          </View>
        </ImageBackground>

    
      </View>
    </View>
  );
};

export default AudioRoom;

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 24,
    paddingTop: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'pink',
  },
  lable: {
    fontSize: 13,
    lineHeight: 18,
    padding: 8,
    color: 'black',
  },
  wraper: {
    flex: 1,
  },
});
