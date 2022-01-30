import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";

export function SkillCard({ skill }) {
  return (
    <TouchableOpacity style={style.buttonSkill}>
      <Text style={style.textSkill}> {skill} </Text>
    </TouchableOpacity>
  );
}
const style = StyleSheet.create({
  buttonSkill: {
    backgroundColor: "#1a1e25",
    padding: 15,
    borderRadius: 50,
    alignItems: "center",
    marginVertical: 10,
  },
  textSkill: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "bold",
  },
});
