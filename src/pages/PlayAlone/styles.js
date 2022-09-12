import styled from "styled-components";
import { RFValue } from "react-native-responsive-fontsize";
import { getStatusBarHeight } from "react-native-iphone-x-helper";

export const Container = styled.View`
  flex: 1;
  padding-top: ${getStatusBarHeight() + RFValue(50)}px;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const Title = styled.Text`
  font-size: ${RFValue(32)}px;
  font-family: ${({ theme }) => theme.fonts.bold};
  color: ${({ theme }) => theme.colors.white};
  text-align: center;
`;

export const Timer = styled.View`
  margin-bottom: 25px;
  margin-right: 15px;
`;

export const TextTimer = styled.Text`
  font-size: ${RFValue(20)}px;
  font-family: ${({ theme }) => theme.fonts.bold};
  color: ${({ theme }) => theme.colors.white};
`;

export const ButtonStart = styled.Button`
  width: ${RFValue(280)}px;
  height: ${RFValue(60)}px;
`;

export const TipContainer = styled.View`
  margin: 0 ${RFValue(45)}px;
`;

export const TipTitle = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: white;
`;

export const TipText = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: white;
`;
