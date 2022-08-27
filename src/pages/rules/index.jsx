import React from "react";
import {
  Container,
  ContainerText,
  Icon,
  NumberParagraph,
  Paragraph,
  Title,
} from "./styles";

import { useNavigation } from "@react-navigation/native";

export default function Rules() {
  const navigation = useNavigation();

  function handleNavToStart() {
    navigation.navigate("Start");
  }

  return (
    <Container>
      <Icon name="arrow-back-ios" onPress={handleNavToStart} />
      <ContainerText>
        <Title>Jogando Solo</Title>
        <Paragraph>
          <NumberParagraph>1 - </NumberParagraph>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
          assumenda facilis aperiam perferendis? Numquam quidem maiores ad sed
          quisquam quas et quos voluptatibus vero, natus totam aut. Nihil, optio
          deserunt!
        </Paragraph>
        <Paragraph>
          <NumberParagraph>2 - </NumberParagraph>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur
          vero quo corporis assumenda rem inventore, commodi nulla deleniti
          labore ad!
        </Paragraph>
        <Title style={{ marginTop: 30 }}>Jogando Em Dupla</Title>
        <Paragraph>
          <NumberParagraph>1 - </NumberParagraph>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
          assumenda facilis aperiam perferendis? Numquam quidem maiores ad sed
          quisquam quas et quos voluptatibus vero, natus totam aut. Nihil, optio
          deserunt!
        </Paragraph>
        <Paragraph>
          <NumberParagraph>2 - </NumberParagraph>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur
          vero quo corporis assumenda rem inventore, commodi nulla deleniti
          labore ad!
        </Paragraph>
        <Paragraph style={{ marginBottom: 20 }}>
          <NumberParagraph>3 - </NumberParagraph>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero id,
          facilis voluptatum optio repudiandae adipisci fugit! Esse veniam qui
          ipsam, cumque fugit fugiat asperiores fuga mollitia, ut soluta, odit
          eveniet dicta! Provident voluptates perferendis nemo maiores corrupti
          exercitationem quis aliquid!
        </Paragraph>
      </ContainerText>
    </Container>
  );
}
