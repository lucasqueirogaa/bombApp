import React, { useState } from "react";

import {
  Container,
  Title,
  TipText,
  InputContainer,
  Input,
  BombMessage,
} from "./styles";
import { useNavigation } from "@react-navigation/native";

import Button from "../../components/Buttons";
import PasswordInput from "../../components/PlayTogether/InputPassword";
import InputTimer from "../../components/PlayTogether/InputTimer";
import TipInput from "../../components/PlayTogether/TipInput";
import BombService from "../../services/BombApp";

export default function PlayTogether() {
  const [pin1, setPin1] = useState("");
  const [pin2, setPin2] = useState("");
  const [pin3, setPin3] = useState("");

  let pin = `${pin1}${pin2}${pin3}`;

  const [start, setStart] = useState(false);
  const [hours, setHours] = useState("");
  const [minutes, setMinutes] = useState("");
  const [seconds, setSeconds] = useState("");
  const [passwordSaved, setPasswordSaved] = useState("");
  const [message, setMessage] = useState("");
  const [tipInput, setTipInput] = useState("");

  let countDownInterval;

  const navigation = useNavigation();

  function handleNavToStart() {
    navigation.navigate("Start");
  }

  // function handleStart() {
  //   setStart(true);
  //   setPasswordSaved(pin);
  //   setPin1("");
  //   setPin2("");
  //   setPin3("");
  // }

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
      // desarmed,
      // setDesarmed,
      navigation
    );
  }

  function handleBombActivation() {
    BombService.BombActivationTogether(
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
      // setDesarmed,
      navigation,
      setMessage,
      tipInput
    );
  }

  return (
    <Container>
      <Title>Bomb Game Dupla</Title>
      <InputTimer
        hoursValue={hours}
        minutesValue={minutes}
        secondsValue={seconds}
        hoursInput={setHours}
        minutesInput={setMinutes}
        secondsInput={setSeconds}
      />
      {message ? <BombMessage>{message ? message : null}</BombMessage> : null}
      <TipInput
        started={start}
        valueInput={tipInput}
        setValueInput={setTipInput}
      />
      <PasswordInput
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
          bgColor={true}
          handlePress={() => handleBombActivation()}
        />
      ) : (
        <Button
          buttonText="Desarmar"
          bgColor={true}
          handlePress={() => handleBombActivation()}
        />
      )}
      <Button buttonText="Página Inicial" handlePress={handleNavToStart} />
    </Container>
  );
}
