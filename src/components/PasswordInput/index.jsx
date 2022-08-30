import React, { useRef, useState } from "react";
import { Keyboard } from "react-native";
import { Container, InputContainer, Input } from "./styles";

export default function PasswordInput() {
  const input1 = useRef();
  const input2 = useRef();
  const input3 = useRef();

  const [pin1, setPin1] = useState();
  const [pin2, setPin2] = useState();
  const [pin3, setPin3] = useState();

  return (
    <Container>
      <InputContainer>
        <Input
          keyboardType={"number-pad"}
          maxLength={1}
          ref={input1}
          onChange={(pin1) => {
            pin1 && input2.current.focus();
            setPin1(pin1);
          }}
        />
      </InputContainer>
      <InputContainer>
        <Input
          keyboardType={"number-pad"}
          maxLength={1}
          ref={input2}
          onChange={(pin2) => {
            pin2 && input3.current.focus();
            setPin2(pin2);
          }}
        />
      </InputContainer>
      <InputContainer>
        <Input
          keyboardType={"number-pad"}
          maxLength={1}
          ref={input3}
          onChange={(pin3) => {
            setPin3(pin3);
            Keyboard.dismiss();
          }}
        />
      </InputContainer>
    </Container>
  );
}
