import React from "react";
import { Container, Input, InputContainer, TipText, TipTitle } from "./styles";

export default function TipInput({ started, question, setQuestion }) {
  return (
    <Container>
      <TipTitle>Dica de senha:</TipTitle>
      {!started ? (
        <InputContainer>
          <Input
            placeholder="Dica para a sua dupla"
            question={question}
            onChangeText={(value) => {
              setQuestion(value);
            }}
          />
        </InputContainer>
      ) : (
        <TipText>{question}</TipText>
      )}
    </Container>
  );
}
