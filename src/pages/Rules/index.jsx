import React from "react";
import {
  Container,
  ScrollTextRules,
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
      <ScrollTextRules>
        <Title>Jogando Solo</Title>
        <Paragraph>
          <NumberParagraph>1 - </NumberParagraph>
          Você vai receber uma dica da senha, que será uma conta matemática,
          tendo um tempo fixo de 5 minutos para resolver e desarmar a bomba
        </Paragraph>
        <Paragraph>
          <NumberParagraph>2 - </NumberParagraph>
          Toda vez que você errar, o seu aparelho vai vibrar e os campos de
          senha serão limpos. Se você acertar, será enviado para uma página de
          sucesso, se errar, será enviado para uma página de falha.
        </Paragraph>
        <Title style={{ marginTop: 30 }}>Jogando Em Dupla</Title>
        <Paragraph>
          <NumberParagraph>1 - </NumberParagraph>
          Para jogar esse jogo, precisa de um parceiro, a pessoa 01 vai colocar:
          O tempo da bomba, uma dica de senha e a senha.
        </Paragraph>
        <Paragraph>
          <NumberParagraph>2 - </NumberParagraph>
          Assim que ela preencher tudo ela deve clicar em "iniciar" e depois
          disso vai ser iniciada a contagem. Se você errar, o celular vai vibrar
          indicando o erro.
        </Paragraph>
        <Paragraph style={{ marginBottom: 20 }}>
          <NumberParagraph>3 - </NumberParagraph>
          Se acertar vocề vai ser enviado para uma página de sucesso, se errar,
          vai ser enviado para uma página de fracasso, terminando assim o jogo.
        </Paragraph>
      </ScrollTextRules>
    </Container>
  );
}
