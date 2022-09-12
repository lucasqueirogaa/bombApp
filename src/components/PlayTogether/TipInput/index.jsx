import React from "react";
import { Container, Input, InputContainer, TipText, TipTitle } from "./styles";

export default function TipInput({ started, valueInput, setValueInput }) {
  return (
    <Container>
      <TipTitle>Dica de senha:</TipTitle>
      {!started ? (
        <InputContainer>
          <Input
            placeholder="Dica para a sua dupla"
            value={valueInput}
            onChangeText={(value) => {
              setValueInput(value);
            }}
          />
        </InputContainer>
      ) : (
        <TipText>{valueInput}</TipText>
      )}
    </Container>
  );
}
