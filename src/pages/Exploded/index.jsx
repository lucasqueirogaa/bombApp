import React from "react";
import ButtonComponent from "../../components/Buttons";
import { Container, Logo, Title } from "./styles";
import { Vibration } from "react-native";

import { useNavigation } from "@react-navigation/native";
import { SucessImg } from "../Disarmed/styles";

export default function Exploded() {
  const navigation = useNavigation();

  function handleNavToStart() {
    navigation.navigate("Start");
  }

  // setTimeout(function () {
  //   Vibration.vibrate(4 * 1000);
  // }, 500);

  return (
    <Container>
      <Logo
        source={require("../../assets/logoLightRed.png")}
        style={{ resizeMode: "contain" }}
      />
      <Title>Você falhou, a {"\n"} bomba explodiu!</Title>
      <SucessImg
        source={require("../../assets/bomba_explodiu.png")}
        style={{ resizeMode: "contain" }}
      />
      <ButtonComponent
        buttonText={"Página incial"}
        handlePress={handleNavToStart}
      />
    </Container>
  );
}
