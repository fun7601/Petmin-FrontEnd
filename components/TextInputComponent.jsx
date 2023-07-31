import React, { useState } from "react";
import { StyleSheet, View, Text, TextInput } from "react-native";

function TextInputComponent({
  lable = {},
  text = {},
  placeholder = {},
  onChangeText = {},
}) {
  // const [text, onChangeText] = useState("");
  // const [lable, setLable] = useState("");
  // const [placeholder, setPlaceholder] = useState("");
  return (
    <View style={styles.container}>
      <Text style={styles.lable}>{lable}</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
        placeholder={placeholder}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
  },
  input: {
    height: 40,
    width: 313,
    margin: 12,
    padding: 10,
    borderBottomColor: "gray",
    borderBottomWidth: 1,
    color: "gray",
  },
  lable: {
    color: "black",
    fontfamily: "Pretendard",
    fontsize: 13,
    fontstyle: "normal",
    fontweight: 500,
    lineheight: "normal",
    marginLeft: 25,
  },
});

export default TextInputComponent;
