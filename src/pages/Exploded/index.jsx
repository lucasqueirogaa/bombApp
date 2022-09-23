import React from "react";
import ButtonComponent from "../../components/Buttons";
import { Container, Logo, Title, FailedImg } from "./styles";
import { Vibration } from "react-native";

import { useNavigation } from "@react-navigation/native";

import logoImg from "../../assets/logoLightRed.png";
import failedImg from "../../assets/bomba_explodiu.png";

export default function Exploded() {
  const navigation = useNavigation();

  function handleNavToStart() {
    navigation.navigate("Start");
  }

  setTimeout(function () {
    Vibration.vibrate(4 * 1000);
  }, 500);

  return (
    <Container>
      <Logo source={logoImg} style={{ resizeMode: "contain" }} />
      <Title>Você falhou, a {"\n"} bomba explodiu!</Title>
      <FailedImg source={failedImg} style={{ resizeMode: "contain" }} />
      <ButtonComponent
        buttonText={"Página incial"}
        handlePress={handleNavToStart}
      />
    </Container>
  );
}
