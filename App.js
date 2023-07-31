import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { useEffect, useState } from "react";

import React from "react";
import axios from "axios";

export default function App() {
  const [message, setMessage] = useState("");
  useEffect(() => {
    axios({
      url: "http://192.168.0.91:8888/test",
      method: "get",
    })
      .then((res) => {
        console.log("axios 성공");
        setMessage(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <View style={styles.container}>
      <Text>expo 잘 되는지 실험</Text>
      <Text>{message}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
