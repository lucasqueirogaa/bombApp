import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components";

export const Container = styled.View`
  margin: ${RFValue(50)}px ${RFValue(30)}px;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: row;
`;

export const InputContainer = styled.View`
  border: ${RFValue(1)}px solid black;
  border-radius: ${RFValue(5)}px;
  justify-content: center;
  align-items: center;
`;

export const Input = styled.TextInput`
  font-size: ${RFValue(30)}px;
  padding: ${RFValue(10)}px;
  width: 100%;
`;
