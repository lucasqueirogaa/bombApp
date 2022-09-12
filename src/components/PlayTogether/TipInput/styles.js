import styled from "styled-components";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
  margin: 0 ${RFValue(45)}px;
`;

export const TipTitle = styled.Text`
  font-size: ${RFValue(24)}px;
  font-family: ${({ theme }) => theme.fonts.bold};
  color: ${({ theme }) => theme.colors.white};
  text-decoration-line: underline;
`;

export const InputContainer = styled.View`
  width: ${RFValue(260)}px;
  height: ${RFValue(30)}px;
  border: ${RFValue(1)}px solid white;
  border-radius: ${RFValue(5)}px;
  justify-content: center;
  align-items: center;
`;

export const Input = styled.TextInput.attrs({
  placeholderTextColor: "white",
})`
  width: 90%;
  font-size: ${RFValue(12)}px;
  color: white;
  font-family: ${({ theme }) => theme.fonts.regular};
`;

export const TipText = styled.Text`
  font-size: ${RFValue(20)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.white};
`;
