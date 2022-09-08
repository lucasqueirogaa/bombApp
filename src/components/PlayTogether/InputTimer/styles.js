import styled from "styled-components";
import { RFValue } from "react-native-responsive-fontsize";

export const Timer = styled.View`
  margin-bottom: 25px;
  margin-right: 15px;
`;

export const TextTimer = styled.Text`
  font-size: ${RFValue(20)}px;
  font-family: ${({ theme }) => theme.fonts.bold};
  color: ${({ theme }) => theme.colors.white};
`;
