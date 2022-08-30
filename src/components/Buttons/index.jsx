import React from "react";
import { Text } from "react-native";
import { Button, ButtonContent } from "./styles";

export default function ButtonComponent({ buttonText, handleNav, bgColor }) {
  return (
    <Button activeOpacity={0.95} onPress={handleNav} bgRed={bgColor}>
      <Text>
        <ButtonContent bgRed={bgColor}>{buttonText}</ButtonContent>
      </Text>
    </Button>
  );
}
