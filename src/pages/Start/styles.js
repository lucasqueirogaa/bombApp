import styled from "styled-components";
import { RFValue } from "react-native-responsive-fontsize";
import { getStatusBarHeight } from "react-native-iphone-x-helper";

export const Container = styled.View`
  flex: 1;
  margin-top: ${getStatusBarHeight() + RFValue(50)}px;
`;

export const Logo = styled.Image`
  width: ${RFValue(270)}px;
  height: ${RFValue(50)}px;
  margin: 0 auto;
`;

export const Title = styled.Text`
  margin-top: ${RFValue(70)}px;
  font-size: ${RFValue(32)}px;
  font-family: ${({ theme }) => theme.fonts.bold};
  text-align: center;
`;

export const SubTitle = styled.Text`
  margin-top: ${RFValue(67)}px;
  margin-bottom: ${RFValue(40)}px;
  font-size: ${RFValue(16)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
  text-align: center;
`;

export const Rules = styled.Text`
  margin-top: ${RFValue(40)}px;
  font-size: ${RFValue(16)}px;
  font-family: ${({ theme }) => theme.fonts.bold};
  text-align: center;
`;
