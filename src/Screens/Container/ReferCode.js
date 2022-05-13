import React, {useRef} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Dimensions,
  TouchableOpacity,
  Button,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

var {width, height} = Dimensions.get('window');
const ReferCode = () => {
  const scrollRef = useRef(0);
  return (
    <View>
      <Text>Scroll</Text>
      <ScrollView
      // contentOffset={{x: 220, y: 33}    }
        horizontal
        onLayout={event => console.log(event.nativeEvent.layout)}
        ref={scrollRef}
        decelerationRate="normal"
        showsVerticalScrollIndicator={false}>
        <View style={styles.BOx1} />
        <View style={styles.BOx2} />
        <View style={styles.BOx3} />
        <View style={styles.BOx1} />
        <View style={styles.BOx2} />
        <View style={styles.BOx3} />
      </ScrollView>
      <TouchableOpacity onPress={() => scrollRef.current.scrollTo({ x:0, y:0, animated: true })}>
        <Icon
          name="arrow-left-circle-outline"
          color="#9d9d9d"
          size={50}
          style={{
            paddingLeft: 20,
            bottom: 40,
            position: 'absolute',
          
          }}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => scrollRef.current.scrollToEnd()}>
        <Icon
          name="arrow-right-circle-outline"
          color="#9d9d9d"
          size={50}
          style={{
            alignSelf: 'flex-end',
            paddingRight: 20,
            bottom: 40,
            position: 'absolute',
        
          }}
        />
      </TouchableOpacity>
      {/* <Button title="Click" onPress={() => scrollRef.current.scrollToEnd()} /> */}
    </View>
  );
};

const LADO = width;
const LADO1 = height;
const ALTURA = 518;

const styles = StyleSheet.create({
  BOx1: {
    height: LADO,
    width: LADO,
    backgroundColor: 'red',
  },
  BOx2: {
    height: LADO,
    width: LADO,
    backgroundColor: 'green',
  },
  BOx3: {
    height: LADO,
    width: LADO,
    backgroundColor: 'blue',
  },
});

export default ReferCode;
