import React from "react";
import { Container, Input, InputContainer, TipText } from "./styles";

export default function TipInput({ started }) {
  return (
    <Container>
      <TipText>Dica de senha:</TipText>
      <InputContainer abled={started}>
        {started === false ? (
          <Input
            placeholder="Disponível quando iniciar"
            editable={false}
            selectTextOnFocus={false}
          />
        ) : (
          <Input placeholder="Dica para a sua dupla" abled={started} />
        )}
      </InputContainer>
    </Container>
  );
}
