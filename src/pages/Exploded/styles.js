import styled from "styled-components";
import { RFValue } from "react-native-responsive-fontsize";
import { getStatusBarHeight } from "react-native-iphone-x-helper";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.primaryRed};
`;

export const Logo = styled.Image`
  width: ${RFValue(270)}px;
  height: ${RFValue(50)}px;
  margin: 0 auto;
  margin-top: ${getStatusBarHeight() + RFValue(50)}px;
`;

export const Title = styled.Text`
  color: white;
  margin-top: ${RFValue(70)}px;
  font-size: ${RFValue(32)}px;
  font-family: ${({ theme }) => theme.fonts.bold};
  text-align: center;
`;

export const SubTitle = styled.Text`
  color: white;
  margin-top: ${RFValue(67)}px;
  margin-bottom: ${RFValue(40)}px;
  padding: 0 ${RFValue(60)}px;
  font-size: ${RFValue(20)}px;
  font-family: ${({ theme }) => theme.fonts.medium};
  text-align: center;
`;
