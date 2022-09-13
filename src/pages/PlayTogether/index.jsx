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
  const [pin, setPin] = useState(["", "", ""]);

  const [started, setStarted] = useState(false);
  const [hours, setHours] = useState("");
  const [minutes, setMinutes] = useState("");
  const [seconds, setSeconds] = useState("");
  const [message, setMessage] = useState("");
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [intervalId, setIntervalId] = useState();

  const navigation = useNavigation();

  function handleNavToStart() {
    navigation.navigate("Start");
  }

  function handleStartBomb() {
    const diffTime = BombService.getDiffTime({ hours, seconds, minutes });

    BombService.startCountdown({
      setSeconds,
      setMinutes,
      setHours,
      setStarted,
      diffTime,
      setIntervalId,
      intervalId,
      navigation,
    });
  }

  function handleStartGame() {
    BombService.bombActivationTogether({
      question,
      pin,
      hours,
      minutes,
      seconds,
      setMessage,
      setStarted,
      setPin,
      handleStartBomb,
      answer,
      setAnswer,
    });
  }

  function handleDisarmBomb() {
    BombService.bombDisarmTogether({
      pin,
      answer,
      setStarted,
      intervalId,
      setPin,
      setAnswer,
      navigation,
    });
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
        started={started}
        question={question}
        setQuestion={setQuestion}
      />
      <PasswordInput pin={pin} setPin={setPin} />
      {!started ? (
        <Button
          buttonText="Iniciar"
          bgColor={true}
          handlePress={handleStartGame}
        />
      ) : (
        <Button
          buttonText="Desarmar"
          bgColor={true}
          handlePress={handleDisarmBomb}
        />
      )}
      <Button buttonText="Página Inicial" handlePress={handleNavToStart} />
    </Container>
  );
}
