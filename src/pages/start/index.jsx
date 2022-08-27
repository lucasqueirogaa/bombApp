import React from "react";
import ButtonComponent from "../../components/Buttons";
import { Container, Logo, Title, SubTitle, Rules } from "./styles";

import { useNavigation } from "@react-navigation/native";

export default function Start() {
  const navigation = useNavigation();

  function handleNavToRules() {
    navigation.navigate("Rules");
  }

  return (
    <Container>
      <Logo
        source={require("../../assets/logo.png")}
        style={{ resizeMode: "contain" }}
      />
      <Title>Bem-vindo ao {"\n"} Bomb game</Title>
      <SubTitle>Escolha um modo de jogo.</SubTitle>
      <ButtonComponent buttonText={"Jogar Solo"} />
      <ButtonComponent buttonText={"Jogar Em Dupla"} />
      <Rules onPress={handleNavToRules}>Ver regras</Rules>
    </Container>
  );
}
