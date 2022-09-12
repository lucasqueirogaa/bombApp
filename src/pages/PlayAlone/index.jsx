import React, { useState } from "react";

import {
  Container,
  Title,
  Timer,
  TextTimer,
  TipTitle,
  TipText,
  TipContainer,
} from "./styles";
import { useNavigation } from "@react-navigation/native";

import Button from "../../components/Buttons";
import PasswordInput from "../../components/PasswordInput";
import { ImageBackground } from "react-native";

import bombImg from "../../assets/bomba.png";
import BombService from "../../services/BombApp";

export default function PlayAlone() {
  const [pin1, setPin1] = useState("");
  const [pin2, setPin2] = useState("");
  const [pin3, setPin3] = useState("");

  let pin = `${pin1}${pin2}${pin3}`;

  const [start, setStart] = useState(false);
  const [hours, setHours] = useState("00");
  const [minutes, setMinutes] = useState("00");
  const [seconds, setSeconds] = useState("04");
  const [passwordSaved, setPasswordSaved] = useState("123");
  const [desarmed, setDesarmed] = useState(false);

  let countDownInterval;

  const navigation = useNavigation();

  function handleNavToStart() {
    navigation.navigate("Start");
  }

  function handleStartBomb() {
    BombService.StartCountdown(
      seconds,
      minutes,
      hours,
      setSeconds,
      setMinutes,
      setHours,
      pin,
      passwordSaved,
      countDownInterval,
      setStart,
      desarmed,
      setDesarmed,
      navigation
    );
  }

  function handleBombActivation() {
    BombService.BombActivation(
      hours,
      minutes,
      seconds,
      start,
      setStart,
      countDownInterval,
      pin,
      passwordSaved,
      setPin1,
      setPin2,
      setPin3,
      setPasswordSaved,
      handleStartBomb,
      setDesarmed,
      navigation
    );
  }

  return (
    <Container>
      <Title>Bomb Game Solo</Title>
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
          <TextTimer>
            {hours} : {minutes} : {seconds}
          </TextTimer>
        </Timer>
      </ImageBackground>

      {start === false ? null : (
        <TipContainer>
          <TipTitle>Sua dica:</TipTitle>
          <TipText>Sua dica é 100 + 98 - 55 + 687 - 707</TipText>
        </TipContainer>
      )}

      <PasswordInput
        started={start}
        firstValue={pin1}
        secondValue={pin2}
        thirdValue={pin3}
        firstInput={setPin1}
        secondInput={setPin2}
        thirdInput={setPin3}
      />

      {start === false ? (
        <Button
          buttonText="Iniciar"
          handlePress={() => handleBombActivation()}
        />
      ) : (
        <Button
          buttonText="Desarmar"
          handlePress={() => handleBombActivation()}
        />
      )}
      <Button buttonText="Página Inicial" handlePress={handleNavToStart} />
    </Container>
  );
}
