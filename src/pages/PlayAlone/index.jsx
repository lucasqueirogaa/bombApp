import React, { useEffect, useState } from "react";

import { Container, Title, Timer, TextTimer } from "./styles";
import { useNavigation, useRoute } from "@react-navigation/native";

import Button from "../../components/Buttons";
import PasswordInput from "../../components/PasswordInput";
import { ImageBackground } from "react-native";

import bombImg from "../../assets/bomba.png";

export default function PlayAlone() {
  const [start, setStart] = useState(false);
  // const [bombState, setBombState] = useState();

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

  // useEffect(() => {
  //   setBombState({
  //     // start: false,
  //     bombClock: {
  //       hours: "123",
  //       minutes: "",
  //       seconds: "",
  //     },
  //     password: "",
  //     passwordSaved: "",
  //     message: "",
  //     status: "Start",
  //   });
  // }, []);

  // let countdownInterval = 0;

  return (
    <Container>
      <Title>Bomb Game Solo</Title>
      {/* <Title>{bombState.password}</Title> */}
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
          <TextTimer>00 : 05 : 00</TextTimer>
        </Timer>
      </ImageBackground>
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
