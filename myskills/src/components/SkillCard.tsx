import React from 'react';
import {StyleSheet, Text, TouchableOpacity,TouchableOpacityProps} from 'react-native';

interface ISkillCard extends TouchableOpacityProps {
  skill: string;
}

export function SkillCard({skill , ...rest} :ISkillCard) {
  return (
    <TouchableOpacity style={[styles.buttonSkill, {marginTop: 10}]} {...rest}>
      <Text style={styles.textSkill}>{skill}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  buttonSkill: {
    backgroundColor: '#1f1e25',
    padding: 15,
    borderRadius: 50,
    alignItems: 'center',
  },
  textSkill: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
  },
});
