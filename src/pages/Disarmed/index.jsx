import React from "react";
import ButtonComponent from "../../components/Buttons";
import { Container, Logo, SubTitle, Title } from "./styles";

import { useNavigation, useRoute } from "@react-navigation/native";

export default function Disarmed() {
  const route = useRoute();
  const navigation = useNavigation();

  function handleNavToPlayAgain() {
    navigation.navigate(route.params.playAgain);
  }

  function handleNavToStart() {
    navigation.navigate("Start");
  }

  return (
    <Container>
      <Logo
        source={require("../../assets/logoDark.png")}
        style={{ resizeMode: "contain" }}
      />
      <Title>Parabéns!!!{"\n"}Você desarmou</Title>
      <SubTitle>
        Muito obrigado por salvar todo mundo, você é um herói, somos gratos!
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
