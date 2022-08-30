import styled from "styled-components";
import { RFValue } from "react-native-responsive-fontsize";

export const Button = styled.TouchableOpacity`
  width: ${RFValue(280)}px;
  height: ${RFValue(60)}px;
  background-color: ${(props) =>
    props.bgRed
      ? ({ theme }) => theme.colors.primaryRedLight
      : ({ theme }) => theme.colors.white};
  margin: ${RFValue(40)}px auto ${RFValue(30)}px auto;
  border-radius: ${RFValue(5)}px;
  border: ${(props) => (props.bgRed ? "0px solid white" : "2px solid black")};
  justify-content: center;
  align-items: center;
`;

export const ButtonContent = styled.Text`
  font-size: ${RFValue(20)}px;
  color: ${(props) =>
    props.bgRed
      ? ({ theme }) => theme.colors.white
      : ({ theme }) => theme.colors.black};
  font-family: ${({ theme }) => theme.fonts.bold};
`;
