import React from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import {colors} from '../../../utils';

const Input = ({placeholder, secureTextEntry}) => {
  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  input: {
    borderRadius: 5,
    borderWidth: 1,
    borderColor: colors.border,
    padding: 12,
  },
});
