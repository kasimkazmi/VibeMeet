import React from 'react';
import {
  View,
  StyleSheet,
  SafeAreaView,
  Dimensions,
  Animated,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import CardComponent from './CardComponent';
import Interactable from './Interactable';

const {width, height} = Dimensions.get('window');
const φ = (1 + Math.sqrt(5)) / 2;
const deltaX = width / 2;
const w = width - 32;
const h = w * φ;
const α = Math.PI / 12;
const A = width * Math.cos(α) + height * Math.sin(α);

const profiles = [
  {
    id: '1',
    name: 'Caroline',
    age: 24,
    profile: require('../Assets/mid.png'),
  },
  {
    id: '2',
    name: 'Jack',
    age: 30,
    profile: require('../Assets/mid.png'),
  },
  {
    id: '3',
    name: 'Anet',
    age: 21,
    profile: require('../Assets/mid.png'),
  },
  {
    id: '4',
    name: 'John',
    age: 28,
    profile: require('../Assets/mid.png'),
  },
];

const ProfileComponent = () => {
  const [index, setindex] = useState(0);

  const onSnap = ({nativeEvent: {x}}) => {
    if (x !== 0) {
      setindex(index + 1);
    }
  };

  const x = new Value(0);
  const y = new Value(0);
  const profile = profiles[index];
  const rotateZ = concat(
    interpolate(x, {
      inputRange: [-1 * deltaX, deltaX],
      outputRange: [α, -1 * α],
      extrapolate: Extrapolate.CLAMP,
    }),
    'rad',
  );

  const likeOpacity = interpolate(x, {
    inputRange: [0, deltaX / 4],
    outputRange: [0, 1],
  });
  const nopeOpacity = interpolate(x, {
    inputRange: [(-1 * deltaX) / 4, 0],
    outputRange: [1, 0],
  });

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Feather name="user" size={32} color="gray" />
        <Feather name="message-circle" size={32} color="gray" />
      </View>
      <View style={styles.cards}>
        <Animated.View style={{backgroundColor:"pink"}}>
          <CardComponent  />
        </Animated.View>
        <Interactable
          key={index}
          snapPoints={[{x: -1 * A}, {x: 0}, {x: A}]}
          style={StyleSheet.absoluteFill}
          {...{onSnap, x, y}}
        />
      </View>
      <View style={styles.footer}>
        <View style={styles.circle}>
          <Feather name="x" size={32} color="#ec5288" />
        </View>
        <View style={styles.circle}>
          <Feather name="heart" size={32} color="#6ee3b4" />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ProfileComponent;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fbfaff',
    justifyContent: 'space-evenly',
  },
  header: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
  },
  cards: {
    width: w,
    height: h,
    marginLeft: 16,
  },
  footer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    padding: 16,
  },
  circle: {
    width: 64,
    height: 64,
    borderRadius: 32,
    padding: 12,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'pink',
    shadowColor: 'gray',
    shadowOffset: {width: 1, height: 1},
    shadowOpacity: 0.18,
    shadowRadius: 2,
  },
});
