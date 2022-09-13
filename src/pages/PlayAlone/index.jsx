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
import moment from "moment";

export default function PlayAlone() {
  const [start, setStart] = useState(false);
  const [pin, setPin] = useState(["", "", ""]);
  const [hours, setHours] = useState("00");
  const [minutes, setMinutes] = useState("03");
  const [seconds, setSeconds] = useState("00");
  const [question, setQuestion] = useState("");
  const [passwordSaved, setPasswordSaved] = useState("");
  const [intervalId, setIntervalId] = useState();

  const navigation = useNavigation();

  function handleNavToStart() {
    navigation.navigate("Start");
  }

  async function fetchQuestion() {
    const randomNumber = Math.floor(Math.random() * 10);

    const { data } = await api.get(`questions/${randomNumber}`);

    setQuestion(data?.pergunta);
    setPasswordSaved(data?.resp);
  }

  useEffect(() => {
    fetchQuestion();
  }, []);

  function handleStartBomb() {
    const diffTime = BombService.getDiffTime({ hours, seconds, minutes });

    let duration = moment.duration(diffTime * 1000);
    const interval = 1000;

    if (diffTime <= 0) return;

    const id = setInterval(() => {
      duration = moment.duration(duration.asMilliseconds() - interval);

      const hoursDigits = duration.hours().toString().padStart(2, "0");
      const minutesDigits = duration.minutes().toString().padStart(2, "0");
      const secondsDigits = duration.seconds().toString().padStart(2, "0");

      const timeEnded =
        hoursDigits === "00" &&
        minutesDigits === "00" &&
        secondsDigits === "00";

      if (timeEnded) {
        clearInterval(intervalId);
        setStart(false);
        navigation.navigate("Exploded");
      }

      setHours(hoursDigits);
      setMinutes(minutesDigits);
      setSeconds(secondsDigits);
    }, interval);

    setIntervalId(id);

    return null;
  }

  useEffect(() => {
    if (start) {
      handleStartBomb();
    }
  }, [start]);

  function handleStartGame() {
    if (hours.length > 0 || minutes.length > 0 || seconds.length > 0) {
      setStart(true);
    }
  }

  function handleDisarmBomb() {
    if (pin.join("") === passwordSaved) {
      clearInterval(intervalId);
      setStart(false);
      navigation.navigate("Desarmed");

      return;
    }
    setPin(["", "", ""]);

    Vibration.vibrate(1000);

    return;
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

      {!start ? null : (
        <TipContainer>
          <TipTitle>Sua dica:</TipTitle>
          <TipText>{question}</TipText>
        </TipContainer>
      )}

      <PasswordInput started={start} pin={pin} setPin={setPin} />

      {!start ? (
        <Button buttonText="Iniciar" handlePress={handleStartGame} />
      ) : (
        <Button buttonText="Desarmar" handlePress={handleDisarmBomb} />
      )}

      <Button buttonText="Página Inicial" handlePress={handleNavToStart} />
    </Container>
  );
}
