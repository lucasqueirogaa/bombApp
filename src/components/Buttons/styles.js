import styled from "styled-components";
import { RFValue } from "react-native-responsive-fontsize";

export const Button = styled.TouchableOpacity`
  width: ${RFValue(280)}px;
  height: ${RFValue(60)}px;
  background-color: ${({ theme }) => theme.colors.primaryRedLight};
  margin: ${RFValue(30)}px auto 0 auto;
  border-radius: ${RFValue(5)}px;
  justify-content: center;
  align-items: center;
`;

export const ButtonContent = styled.Text`
  font-size: ${RFValue(20)}px;
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fonts.bold};
`;
