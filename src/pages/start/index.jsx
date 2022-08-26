import React from "react";
import ButtonComponent from "../../components/Buttons";
import { Container, Logo, Title, SubTitle, Rules } from "./styles";

export default function Start() {
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
      <Rules>Ver regras</Rules>
    </Container>
  );
}
