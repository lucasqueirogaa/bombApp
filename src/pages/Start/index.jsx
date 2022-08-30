import React from "react";
import ButtonComponent from "../../components/Buttons";
import { Container, Logo, Title, SubTitle, Rules } from "./styles";

import { useNavigation } from "@react-navigation/native";

export default function Start() {
  const navigation = useNavigation();

  function handleNavToRules() {
    navigation.navigate("Rules");
  }

  function handleNavToPlayAlone() {
    navigation.navigate("PlayAlone");
  }

  function handleNavToPlayTogether() {
    navigation.navigate("PlayTogether");
  }

  return (
    <Container>
      <Logo
        source={require("../../assets/logo.png")}
        style={{ resizeMode: "contain" }}
      />
      <Title>Bem-vindo ao {"\n"} Bomb game</Title>
      <SubTitle>Escolha um modo de jogo.</SubTitle>
      <ButtonComponent
        handleNav={handleNavToPlayAlone}
        buttonText={"Jogar Solo"}
        bgColor={"red"}
      />
      <ButtonComponent
        handleNav={handleNavToPlayTogether}
        buttonText={"Jogar Em Dupla"}
        bgColor={"red"}
      />
      <Rules onPress={handleNavToRules}>Ver regras</Rules>
    </Container>
  );
}