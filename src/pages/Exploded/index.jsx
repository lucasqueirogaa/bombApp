import React from "react";
import ButtonComponent from "../../components/Buttons";
import { Container, Logo, SubTitle, Title } from "./styles";
import { Button, Vibration } from "react-native";

import { useNavigation, useRoute } from "@react-navigation/native";

export default function Exploded() {
  const route = useRoute();
  const navigation = useNavigation();

  function handleNavToPlayAgain() {
    navigation.navigate(route.params.playAgain);
  }

  function handleNavToStart() {
    navigation.navigate("Start");
  }

  //

  setTimeout(function () {
    Vibration.vibrate(2 * 1000);
  }, 500);
  return (
    <Container>
      <Logo
        source={require("../../assets/logoLightRed.png")}
        style={{ resizeMode: "contain" }}
      />
      <Title>Você falhou, a {"\n"} bomba explodiu!</Title>
      <SubTitle>
        Mas não se preocupe, você pode tentar novamente para salvar todo mundo!
      </SubTitle>
      <ButtonComponent
        buttonText={"Jogar Novamente"}
        bgRed={false}
        handleNav={handleNavToPlayAgain}
      />
      <ButtonComponent
        buttonText={"Página incial"}
        bgRed={false}
        handleNav={handleNavToStart}
      />
    </Container>
  );
}
