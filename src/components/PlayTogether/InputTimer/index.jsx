import React from "react";
import { ImageBackground } from "react-native";
import { Timer, TextTimer } from "./styles";
import bombImg from "../../../assets/bomba.png";

export default function InputTimer() {
  return (
    <ImageBackground
      source={bombImg}
      resizeMode="cover"
      style={{
        marginTop: 50,
        minHeight: 130,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Timer>
        <TextTimer>00 : 05 : 00</TextTimer>
      </Timer>
    </ImageBackground>
  );
}
