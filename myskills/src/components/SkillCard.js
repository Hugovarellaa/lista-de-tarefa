import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

export function SkillCard({skill}) {
  return (
    <TouchableOpacity style={[styles.buttonSkill, {marginTop: 10}]}>
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
