import React, { useState } from "react";

import {
  Container,
  Title,
  TimerContainer,
  TextTimeTimerContainer,
  TextTimeTimer,
  Timer,
  TextTimer,
} from "./styles";
import { useNavigation, useRoute } from "@react-navigation/native";

import Button from "../../components/Buttons";
import PasswordInput from "../../components/PasswordInput";

export default function PlayAlone() {
  const [start, setStart] = useState(false);

  const route = useRoute();
  const navigation = useNavigation();

  function handleNavToStart() {
    navigation.navigate("Start");
  }

  function handleStart() {
    setStart(true);
  }

  function handleNavToPlayAgain() {
    // PASSAR PARAMETRO DA PÁGINA, PARA AS PÁGINAS DE SUCESSO OU FRACASSO, PARA O BOTÃO "PLAY AGAIN"
    navigation.navigate(route.params.playAgain);
  }

  return (
    <Container>
      <Title>Bomb Game Solo</Title>
      <TimerContainer>
        <TextTimeTimerContainer>
          <TextTimeTimer>Horas</TextTimeTimer>
          <TextTimeTimer>Minutos</TextTimeTimer>
          <TextTimeTimer>Segundos</TextTimeTimer>
        </TextTimeTimerContainer>
        <Timer>
          <TextTimer>00 : 05 : 00</TextTimer>
        </Timer>
      </TimerContainer>
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
