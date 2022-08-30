import styled from "styled-components";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
  margin: 0 ${RFValue(60)}px;
`;

export const TipText = styled.Text`
  font-size: ${RFValue(20)}px;
  font-family: ${({ theme }) => theme.fonts.bold};
`;

export const InputContainer = styled.View`
  width: ${RFValue(260)}px;
  height: ${RFValue(30)}px;
  border: ${RFValue(1)}px solid black;
  border-radius: ${RFValue(5)}px;
  justify-content: center;
  align-items: center;
  background-color: ${(props) =>
    props.abled === false ? "#bbb" : "transparent"};
`;

export const Input = styled.TextInput`
  width: 90%;
  font-size: ${RFValue(12)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
`;
