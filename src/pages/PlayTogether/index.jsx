import React, { useState } from "react";

import { Container, Title, TipText, InputContainer, Input } from "./styles";
import { useNavigation } from "@react-navigation/native";

import Button from "../../components/Buttons";
import PasswordInput from "../../components/PasswordInput";
import InputTimer from "../../components/PlayTogether/InputTimer";
import TipInput from "../../components/PlayTogether/TipInput";
import { KeyboardAvoidingView } from "react-native";

export default function PlayTogether() {
  const [start, setStart] = useState(false);
  const navigation = useNavigation();

  function handleNavToStart() {
    navigation.navigate("Start");
  }

  function handleStart() {
    setStart(true);
  }

  function handleNavToSucc() {
    navigation.navigate("Disarmed", {
      playAgain: "PlayTogether",
    });
  }
  function handleNavToFail() {
    navigation.navigate("Exploded");
  }

  return (
    <Container>
      <Title>Bomb Game Dupla</Title>
      <InputTimer />
      <TipInput started={start} />
      <PasswordInput started={start} />
      {start === false ? (
        <Button
          buttonText="Iniciar"
          bgColor={true}
          handleNav={handleNavToStart && handleStart}
        />
      ) : (
        <Button
          buttonText="Desarmar"
          bgColor={true}
          handleNav={handleNavToStart}
        />
      )}
      <Button
        buttonText="Página Inicial"
        bgColor={true}
        handleNav={handleNavToStart}
      />
    </Container>
  );
}
