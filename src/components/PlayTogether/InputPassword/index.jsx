import React, { useRef } from "react";
import { Keyboard } from "react-native";
import { Container, Input, InputContainer } from "./styles";

export default function PasswordInput({
  firstValue,
  secondValue,
  thirdValue,
  firstInput,
  secondInput,
  thirdInput,
}) {
  const input1 = useRef();
  const input2 = useRef();
  const input3 = useRef();

  return (
    <Container>
      <InputContainer>
        <Input
          keyboardType={"number-pad"}
          maxLength={1}
          ref={input1}
          value={firstValue}
          onChangeText={(value) => {
            value && input2.current.focus();
            firstInput(value);
          }}
        />
      </InputContainer>
      <InputContainer>
        <Input
          keyboardType={"number-pad"}
          maxLength={1}
          ref={input2}
          value={secondValue}
          onChangeText={(value) => {
            value && input3.current.focus();
            secondInput(value);
          }}
        />
      </InputContainer>
      <InputContainer>
        <Input
          keyboardType={"number-pad"}
          maxLength={1}
          ref={input3}
          value={thirdValue}
          onChangeText={(value) => {
            thirdInput(value);
            Keyboard.dismiss();
          }}
        />
      </InputContainer>
    </Container>
  );
}
