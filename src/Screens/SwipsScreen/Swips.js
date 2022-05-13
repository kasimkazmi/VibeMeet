import React from 'react';
import {
  Image,
  StatusBar,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Dimensions,
} from 'react-native';
import CardComponent from '../../Components/CardComponent';
import Swiper from 'react-native-deck-swiper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {Transitioning, Transition} from 'react-native-reanimated';
import data from '../../utility/data';
import {colors} from '../../Constants';

const {width} = Dimensions.get('window');

const stackSize = 4;

const ANIMATION_DURATION = 4200;

const transition = (
  <Transition.Sequence>
    <Transition.Out
      type="slide-bottom"
      durationMs={ANIMATION_DURATION}
      interpolation="easeIn"
    />
    <Transition.Together>
      <Transition.In
        type="fade"
        durationMs={ANIMATION_DURATION}
        delayMs={ANIMATION_DURATION / 2}
      />
      <Transition.In
        type="slide-bottom"
        durationMs={ANIMATION_DURATION}
        delayMs={ANIMATION_DURATION / 2}
        interpolation="easeOut"
      />
    </Transition.Together>
  </Transition.Sequence>
);

const swiperRef = React.createRef();
const transitionRef = React.createRef();

const Card = ({card}) => {
  return (
    <View style={styles.card}>
      <Image source={{uri: card.image}} style={styles.cardImage} />
    </View>
  );
};

const CardDetails = ({index}) => (
  <View key={data[index].id} style={{alignItems: 'center'}}>
    {/* <Text style={[styles.text, styles.heading]} numberOfLines={2}>
      {data[index].name}
    </Text> */}
    {/* <Text style={[styles.text, styles.price]}>{data[index].price}</Text> */}
  </View>
);

const Swips = () => {
  const [index, setIndex] = React.useState(0);
  const onSwiped = () => {
    transitionRef.current.animateNextTransition();
    setIndex((index + 1) % data.length);
  };

  return (
    <SafeAreaView style={styles.container}>
      {/*
      <CardComponent /> */}
      <>
        {/* <Swiper
        cards={['DO', 'MORE', 'OF', 'WHAT', 'MAKES', 'YOU', 'HAPPY']}
        renderCard={card => {
          return (
            <View style={styles.card}>
              <Text style={styles.text}>{card}</Text>
            </View>
          );
        }}
        onSwiped={cardIndex => {
          console.log(cardIndex);
        }}
        onSwipedAll={() => {
          console.log('onSwipedAll');
        }}
        cardIndex={0}
        backgroundColor={'#4FD0E9'}
        stackSize={13}>

      </Swiper> */}
      </>
      <View style={styles.swiperContainer}>
        <Swiper
          ref={swiperRef}
          cards={data}
          cardIndex={index}
          renderCard={card => <Card card={card} />}
          infinite
          backgroundColor={'transparent'}
          onSwiped={onSwiped}
          onTapCard={() => swiperRef.current.swipeLeft()}
          cardVerticalMargin={50}
          stackSize={stackSize}
          stackScale={10}
          stackSeparation={14}
          animateOverlayLabelsOpacity
          animateCardOpacity
          disableTopSwipe
          disableBottomSwipe
          overlayLabels={{
            left: {
              title: 'NOPE',
              style: {
                label: {
                  backgroundColor: colors.purple,
                  borderColor: colors.purple,
                  color: colors.white,
                  borderWidth: 1,
                  fontSize: 24,
                },
                wrapper: {
                  flexDirection: 'column',
                  alignItems: 'flex-end',
                  justifyContent: 'flex-start',
                  marginTop: 20,
                  marginLeft: -20,
                },
              },
            },
            right: {
              title: 'LIKE',
              style: {
                label: {
                  backgroundColor: colors.pink,
                  borderColor: colors.pink,
                  color: colors.white,
                  borderWidth: 1,
                  fontSize: 24,
                },
                wrapper: {
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                  justifyContent: 'flex-start',
                  marginTop: 20,
                  marginLeft: 20,
                },
              },
            },
          }}
        />
      </View>
      <View style={styles.bottomContainer}>
        <Transitioning.View
          ref={transitionRef}
          transition={transition}
          style={styles.bottomContainerMeta}>
          <CardDetails index={index} />
        </Transitioning.View>
        <View style={styles.bottomContainerButtons}>
          <Icon.Button
            name="close"
            size={64}
            backgroundColor="transparent"
            underlayColor="transparent"
            activeOpacity={0.3}
            color={colors.red}
            onPress={() => swiperRef.current.swipeLeft()}
          />
          <Icon.Button
            name="circle-outline"
            size={64}
            backgroundColor="transparent"
            underlayColor="transparent"
            activeOpacity={0.3}
            color={colors.blue}
            onPress={() => swiperRef.current.swipeRight()}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Swips;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.pink,
  },

  // title: {
  //   fontSize: 24,
  //   paddingTop: 20,
  //   fontWeight: 'bold',
  //   textAlign: 'center',
  //   color: 'pink',
  // },
  card: {
    flex: 1,
    borderRadius: 4,
    borderWidth: 2,
    borderColor: '#E8E8E8',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  text: {
    textAlign: 'center',
    fontSize: 50,
    backgroundColor: 'transparent',
  },
  card: {
    flex: 1,
    borderRadius: 4,
    borderWidth: 2,
    borderColor: '#E8E8E8',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  text: {
    textAlign: 'center',
    fontSize: 50,
    // backgroundColor: 'transparent',
  },
  swiperContainer: {
    flex:0.70,
  borderWidth:2,
  },


  bottomContainer: {
    // flex: 0,

    borderWidth:1,
    // justifyContent: 'space-evenly',
  },
  bottomContainerMeta: {alignContent: 'flex-end', alignItems: 'center'},
 
  bottomContainerButtons: {
    flexDirection: 'row',
    // borderWidth:2,
    marginHorizontal:30,
    borderRadius:50,
    // backgroundColor:colors.purple,
    justifyContent: 'space-evenly',
  },
  cardImage: {
    width: 200,
    height: 202,
    flex: 1,
    resizeMode: 'contain',
  },
  card: {
    flex: 0.5,
    borderRadius: 8,
    shadowRadius: 25,
    shadowColor: colors.black,
    shadowOpacity: 0.08,
    shadowOffset: {width: 1, height: 1},
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.white,
  },
  text: {
    textAlign: 'center',
    fontSize: 50,
    // backgroundColor: 'transparent'
  },
  done: {
    textAlign: 'center',
    fontSize: 30,
    color: colors.white,
    // backgroundColor: 'transparent'
  },
  text: {fontFamily: 'Courier'},
  heading: {fontSize: 24, marginBottom: 10, color: colors.black},
  price: {color: colors.black, fontSize: 32, fontWeight: '500'},
});
