import React, { useState, View, Text } from "react";
import TextInputComponent from "../components/TextInputComponent";
import { StyleSheet } from "react-native";

function Signup(props) {
  const [emailtext, setEmailtext] = useState("");
  const [idtext, setIdtext] = useState("");
  return (
    <View>
        <View style={{ marginTop: 20, marginLeft: 10}}>
          <Text style={styles.h1}>이메일과 비밀번호를</Text>
          <Text style={styles.h1}>입력해주세요</Text>
        </View>
        <TextInputComponent
          lable={"이메일"}
          text={emailtext}
          placeholder={"이메일을 입력해주세요"}
          onChangeText={setEmailtext}
        />

        <TextInputComponent
          lable={"아이디"}
          text={idtext}
          placeholder={"아이디를 입력해주세요"}
          onChangeText={setIdtext}
        />

        <TextInputComponent
          lable={"비밀번호"}
          text={passwordtext}
          placeholder={"영문, 숫자, 특수문자 조합 8~20자리"}
          onChangeText={setPasswordtext}
        />
      </View>
  );
}
const styles = StyleSheet.create({
  h1: {
    fontSize: 20,
    fontWeight: 'bold'
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
export default Signup;
