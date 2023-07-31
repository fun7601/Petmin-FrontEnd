import { StyleSheet, Button } from "react-native";

import React from "react";

export default function Btn(props) {
  const onPress = () => {
    props.onPress();
  };

  return (
    <Button
      title={props.title}
      onPress={onPress}
      color="#FF8989"
      style={styles.btn}
    />
  );
}

const styles = StyleSheet.create({
  btn: {
    boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.25)",
    borderRadius: "10px",
  },
});
