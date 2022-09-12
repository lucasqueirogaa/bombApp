import React from "react";
import ButtonComponent from "../../components/Buttons";
import { Container, Logo, SucessImg, Title } from "./styles";

import { useNavigation, useRoute } from "@react-navigation/native";

export default function Disarmed() {
  const route = useRoute();
  const navigation = useNavigation();

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
      <SucessImg
        source={require("../../assets/bomba_cortada_matrix.png")}
        style={{ resizeMode: "contain" }}
      />
      <ButtonComponent
        buttonText={"Página incial"}
        handlePress={handleNavToStart}
      />
    </Container>
  );
}
