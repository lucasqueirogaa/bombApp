import styled from "styled-components";
import { RFValue } from "react-native-responsive-fontsize";

export const Button = styled.TouchableOpacity`
  width: ${RFValue(280)}px;
  height: ${RFValue(60)}px;
  background-color: ${({ theme }) => theme.colors.white};
  margin: ${RFValue(20)}px auto;
  margin-bottom: 0;
  border: 1px solid black;
  border-radius: ${RFValue(10)}px;
  justify-content: center;
  align-items: center;
`;

export const ButtonContent = styled.Text`
  font-size: ${RFValue(20)}px;
  color: ${({ theme }) => theme.colors.black};
  font-family: ${({ theme }) => theme.fonts.bold};
`;
