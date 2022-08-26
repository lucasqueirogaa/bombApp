import React from "react";
import { Text } from "react-native";
import { Button, ButtonContent } from "./styles";

export default function ButtonComponent({ buttonText }) {
  return (
    <Button activeOpacity={0.95}>
      <Text>
        <ButtonContent>{buttonText}</ButtonContent>
      </Text>
    </Button>
  );
}
