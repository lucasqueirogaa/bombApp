import React, { useEffect, useState } from "react";

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
import api from "../../services/api/api";

export default function PlayAlone() {
  const [started, setStarted] = useState(false);
  const [pin, setPin] = useState(["", "", ""]);
  const [hours, setHours] = useState("00");
  const [minutes, setMinutes] = useState("03");
  const [seconds, setSeconds] = useState("00");
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [intervalId, setIntervalId] = useState();

  const navigation = useNavigation();

  function handleNavToStart() {
    navigation.navigate("Start");
  }

  async function fetchQuestion() {
    const randomNumber = Math.floor(Math.random() * 10 + 1);

    const { data } = await api.get(`questions/${randomNumber}`);

    setQuestion(data?.pergunta);
    setAnswer(data?.resp);
  }

  useEffect(() => {
    fetchQuestion();
  }, []);

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

    console.log(answer);
  }

  useEffect(() => {
    if (started) {
      handleStartBomb();
    }
  }, [started]);

  function handleStartGame() {
    BombService.bombStartGame({ setStarted, hours, minutes, seconds });
  }

  function handleDisarmBomb() {
    BombService.disarmBomb({
      setStarted,
      answer,
      navigation,
      pin,
      setPin,
      intervalId,
    });
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

      {!started ? null : (
        <TipContainer>
          <TipTitle>Sua dica:</TipTitle>
          <TipText>{question}</TipText>
        </TipContainer>
      )}

      <PasswordInput started={started} pin={pin} setPin={setPin} />

      {!started ? (
        <Button buttonText="Iniciar" handlePress={handleStartGame} />
      ) : (
        <Button buttonText="Desarmar" handlePress={handleDisarmBomb} />
      )}

      <Button buttonText="Página Inicial" handlePress={handleNavToStart} />
    </Container>
  );
}
