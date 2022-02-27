import React from 'react';
import {TouchableOpacity,TouchableOpacityProps ,Text, StyleSheet} from 'react-native';

interface IButtonProps extends TouchableOpacityProps {
  title: string
}


export function Button({title, onPress,... rest}:IButtonProps) {
  return (
    <TouchableOpacity
      style={styles.button}
      onPress={onPress}
      {...rest}
      >
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#a370f7',
    padding: 10,
    borderRadius: 7,
    alignItems: 'center',
    marginVertical: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
});
