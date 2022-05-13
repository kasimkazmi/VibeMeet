import React, {Component} from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

const TextInputWithLable = ({
  label,
  value,
  placheHolder,
  isSecure,
  onChangeText,
  ...props
}) => {
  return (
    <View style={{marginBottom: 16, backgroundColor:"pink"}}>
      <Text
        style={{
          fontSize: 16,
          marginBottom: 8,
          fontWeight: 'bold',
          color: 'pink',
        }}>
        {label}
      </Text>
      <TextInput
        value={value}
        placeholder={placheHolder}
        onChangeText={onChangeText}
        style={styles.inputStyle}
        placeholderTextColor="white"
        {...props}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputStyle: {
    height: 48,
    borderWidth: 0.6,
    borderRadius:9,
    borderColor: 'white',
    color: 'white',
    paddingHorizontal: 16,
  },
});

export default TextInputWithLable;
