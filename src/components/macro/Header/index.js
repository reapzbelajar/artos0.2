import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {colors, fonts} from '../../../utils';
import {Button, Gap} from '../../micro';

const Header = ({onPress, title, type}) => {
  return (
    <View style={styles.wrapper(type)}>
      <Button
        type="icon-only"
        icon={type === 'dark' ? 'back-light' : 'back-dark'}
        onPress={onPress}
      />
      <Text style={styles.text(type)}>{title}</Text>
      <Gap width={24} />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  wrapper: (type) => ({
    paddingHorizontal: 16,
    paddingVertical: 32,
    backgroundColor: type === 'dark' ? colors.secondary : colors.white,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomRightRadius: type === 'dark' ? 20 : 0,
    borderBottomLeftRadius: type === 'dark' ? 20 : 0,
  }),
  text: (type) => ({
    textAlign: 'center',
    flex: 1,
    fontSize: 20,
    color: type === 'dark' ? colors.white : colors.text.primary,
    fontFamily: fonts.primary[500],
  }),
});
