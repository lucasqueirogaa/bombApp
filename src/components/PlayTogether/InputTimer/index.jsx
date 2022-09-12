import React, { useRef } from "react";
import { ImageBackground, Keyboard } from "react-native";
import { Timer, TextTimer, InputContainer, Input } from "./styles";
import bombImg from "../../../assets/bomba.png";

export default function InputTimer({
  hoursValue,
  minutesValue,
  secondsValue,
  hoursInput,
  minutesInput,
  secondsInput,
}) {
  const input1 = useRef();
  const input2 = useRef();
  const input3 = useRef();

  return (
    <ImageBackground
      source={bombImg}
      resizeMode="cover"
      style={{
        marginTop: 50,
        minHeight: 130,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Timer>
        <InputContainer>
          <Input
            keyboardType={"number-pad"}
            maxLength={2}
            placeholder="00"
            placeholderTextColor="#bbb"
            ref={input1}
            value={hoursValue}
            onChangeText={(value) => {
              value.length > 1 && input2.current.focus();
              hoursInput(value);
            }}
          />
        </InputContainer>
        <TextTimer>:</TextTimer>
        <InputContainer>
          <Input
            keyboardType={"number-pad"}
            maxLength={2}
            placeholder="00"
            placeholderTextColor="#bbb"
            ref={input2}
            value={minutesValue}
            onChangeText={(value) => {
              value.length > 1 && input3.current.focus();
              minutesInput(value);
            }}
          />
        </InputContainer>
        <TextTimer>:</TextTimer>
        <InputContainer>
          <Input
            keyboardType={"number-pad"}
            maxLength={2}
            placeholder="00"
            placeholderTextColor="#bbb"
            ref={input3}
            value={secondsValue}
            onChangeText={(value) => {
              value.length > 1 && Keyboard.dismiss();
              secondsInput(value);
            }}
          />
        </InputContainer>
      </Timer>
    </ImageBackground>
  );
}
