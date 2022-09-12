import React from "react";
import { Text } from "react-native";
import { Button, ButtonContent } from "./styles";

export default function ButtonComponent({ buttonText, handlePress }) {
  return (
    <Button activeOpacity={0.95} onPress={handlePress}>
      <Text>
        <ButtonContent>{buttonText}</ButtonContent>
      </Text>
    </Button>
  );
}
