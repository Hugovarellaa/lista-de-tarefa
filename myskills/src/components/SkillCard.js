import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

export function SkillCard(props) {
  return (
    <TouchableOpacity
      style={[styles.buttonSkill, {marginTop: 10}]}
      key={props.skill}>
      <Text style={styles.textSkill}>{props.skill}</Text>
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
