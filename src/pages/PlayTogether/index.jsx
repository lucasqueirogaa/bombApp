import React from "react";

import {
  Container,
  Title,
  TimerContainer,
  TextTimeTimerContainer,
  TextTimeTimer,
  Timer,
  TextTimer,
  TipText,
  InputContainer,
  Input,
} from "./styles";
import { useNavigation } from "@react-navigation/native";

import Button from "../../components/Buttons";
import PasswordInput from "../../components/PasswordInput";

export default function PlayTogether() {
  const navigation = useNavigation();

  function handleNavToStart() {
    navigation.navigate("Start");
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
      <TimerContainer>
        <TextTimeTimerContainer>
          <TextTimeTimer>Horas</TextTimeTimer>
          <TextTimeTimer>Minutos</TextTimeTimer>
          <TextTimeTimer>Segundos</TextTimeTimer>
        </TextTimeTimerContainer>
        <Timer>
          <TextTimer>00 : 00 : 00</TextTimer>
        </Timer>
      </TimerContainer>
      <TipText>Dica de senha:</TipText>
      <InputContainer>
        <Input placeholder="Dica para a sua dupla" />
      </InputContainer>
      <PasswordInput />
      <Button
        buttonText="Iniciar"
        bgColor={true}
        handleNav={handleNavToStart}
      />
      <Button
        buttonText="Página Inicial"
        bgColor={true}
        handleNav={handleNavToStart}
      />
    </Container>
  );
}
