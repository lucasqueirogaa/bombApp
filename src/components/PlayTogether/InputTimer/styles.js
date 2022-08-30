import styled from "styled-components";
import { RFValue } from "react-native-responsive-fontsize";

export const TimerContainer = styled.View`
  margin-top: ${RFValue(20)}px;
  margin-bottom: ${RFValue(30)}px;
`;

export const TextTimeTimerContainer = styled.View`
  flex-direction: row;
  justify-content: center;
`;

export const TextTimeTimer = styled.Text`
  font-size: ${RFValue(12)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
  margin: 0 ${RFValue(18)}px;
`;

export const Timer = styled.View`
  width: ${RFValue(225)}px;
  height: ${RFValue(76)}px;
  border: ${RFValue(1)}px solid black;
  border-radius: ${RFValue(5)}px;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
`;

export const TextTimer = styled.Text`
  font-size: ${RFValue(38)}px;
  font-family: ${({ theme }) => theme.fonts.bold};
`;
