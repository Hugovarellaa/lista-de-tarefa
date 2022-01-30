import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Platform,
  FlatList,
} from "react-native";
import { Button } from "../components/Button";
import { SkillCard } from "../components/SkillCard";

export function Home() {
  const [newSkills, setNewSkills] = useState("");
  const [myskills, setMyskills] = useState([]);
  const [gretting, setGretting] = useState("");

  function handleAddSkill() {
    setMyskills((oldstate) => [...oldstate, newSkills]);
  }

  useEffect(() => {
    const currentHour = new Date().getHours();

    if (currentHour < 12) {
      setGretting("Good morning");
    } else if ((currentHour >= 12) & (currentHour <= 18)) {
      setGretting("Good afternoon");
    } else {
      setGretting("Good night");
    }
  }, []);

  return (
    <>
      <View style={style.container}>
        <Text style={style.title}>Welcome, Hugo</Text>
        <Text style={style.reading}>{gretting}</Text>
        <TextInput
          style={style.input}
          placeholder="New skill"
          placeholderTextColor="#555"
          onChangeText={setNewSkills}
        />

        <Button onPress={handleAddSkill} />

        <Text style={[style.title, { marginVertical: 50 }]}>My Skills</Text>

        <FlatList
          data={myskills}
          keyExtractor={(item) => item}
          renderItem={({ item }) => <SkillCard skill={item} />}
        />
      </View>
    </>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121015",
    paddingVertical: 70,
    paddingHorizontal: 30,
  },
  title: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
  },
  input: {
    backgroundColor: "#1f1e25",
    color: "#fff",
    fontSize: 18,
    padding: Platform.OS === "ios" ? 15 : 10,
    marginTop: 30,
    borderRadius: 10,
  },
  reading: {
    color: "#fff",
  },
});
