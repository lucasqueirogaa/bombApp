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
        source={require("../../assets/logoDark.png")}
        style={{ resizeMode: "contain" }}
      />
      <Title>Bem-vindo ao {"\n"} Bomb game</Title>
      <SubTitle>Escolha um modo de jogo.</SubTitle>
      <ButtonComponent
        buttonText={"Jogar Solo"}
        handlePress={handleNavToPlayAlone}
      />
      <ButtonComponent
        buttonText={"Jogar Em Dupla"}
        handlePress={handleNavToPlayTogether}
      />
      <Rules onPress={handleNavToRules}>Ver as regras do jogo</Rules>
    </Container>
  );
}
