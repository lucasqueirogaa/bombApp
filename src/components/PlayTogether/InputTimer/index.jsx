import React from "react";
import {
  TextTimeTimer,
  TextTimeTimerContainer,
  TimerContainer,
  Timer,
  TextTimer,
} from "./styles";

export default function InputTimer() {
  return (
    <TimerContainer>
      <TextTimeTimerContainer>
        <TextTimeTimer>Horas</TextTimeTimer>
        <TextTimeTimer>Minutos</TextTimeTimer>
        <TextTimeTimer>Segundos</TextTimeTimer>
      </TextTimeTimerContainer>
      <Timer>
        <TextTimer>00 : 00 : 00</TextTimer>
      </Timer>
    </TimerContainer>
  );
}
