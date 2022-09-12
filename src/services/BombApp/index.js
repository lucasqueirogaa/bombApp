import moment from "moment";
import { useState } from "react";
import { Vibration } from "react-native";

const BombService = {
  StartCountdown: (
    seconds,
    minutes,
    hours,
    setSeconds,
    setMinutes,
    setHours,
    pin,
    passwordSaved,
    countDownInterval,
    setStart,
    // desarmed,
    // setDesarmed,
    navigation
  ) => {
    const explodeTime = moment();
    let secondsMoment = seconds.length >= 1 ? seconds : 0;
    let minutesMoment = minutes.length >= 1 ? minutes : 0;
    let hoursMoment = hours.length >= 1 ? hours : 0;

    explodeTime
      .add(secondsMoment, "seconds")
      .add(minutesMoment, "minutes")
      .add(hoursMoment, "hours");

    const currentTime = moment();

    let diffTime = explodeTime.unix() - currentTime.unix();
    let duration = moment.duration(diffTime * 1000, "milliseconds");
    const interval = 1000;

    if (diffTime > 0) {
      countDownInterval = setInterval(() => {
        duration = moment.duration(
          duration.asMilliseconds() - interval,
          "milliseconds"
        );
        hoursMoment = moment.duration(duration).hours().toString();
        minutesMoment = moment.duration(duration).minutes().toString();
        secondsMoment = moment.duration(duration).seconds().toString();

        hoursMoment =
          hoursMoment.length === 1 ? "0" + hoursMoment : hoursMoment;

        minutesMoment =
          minutesMoment.length === 1 ? "0" + minutesMoment : minutesMoment;

        secondsMoment =
          secondsMoment.length === 1 ? "0" + secondsMoment : secondsMoment;

        // if (desarmed === true) {
        //   console.log("SEM BOMBA");
        // }

        if (
          hoursMoment === "00" &&
          minutesMoment === "00" &&
          secondsMoment === "00"
        ) {
          setStart(false);
          clearInterval(countDownInterval);
          // navigation.navigate("Exploded");
        }

        setHours(hoursMoment);
        setMinutes(minutesMoment);
        setSeconds(secondsMoment);
      }, 1000);
    }

    return null;
  },

  BombActivation: (
    hours,
    minutes,
    seconds,
    start,
    setStart,
    countDownInterval,
    pin,
    passwordSaved,
    setPin1,
    setPin2,
    setPin3,
    setPasswordSaved,
    handleStartBomb,
    // setDesarmed,
    navigation
  ) => {
    if (hours.length > 0 || minutes.length > 0 || seconds.length > 0) {
      setStart(true);
    }

    if (start === true) {
      if (pin === passwordSaved) {
        setStart(false);
        // setDesarmed(true);
        clearInterval(countDownInterval);
        navigation.navigate("Disarmed");

        return;
      } else {
        setPin1("");
        setPin2("");
        setPin3("");
        Vibration.vibrate(1000);

        return;
      }
    } else {
      setStart(true);
      handleStartBomb();

      return;
    }
  },

  BombActivationTogether: (
    hours,
    minutes,
    seconds,
    start,
    setStart,
    countDownInterval,
    pin,
    passwordSaved,
    setPin1,
    setPin2,
    setPin3,
    setPasswordSaved,
    handleStartBomb,
    // setDesarmed,
    navigation,
    setMessage,
    tipInput
  ) => {
    if (tipInput.length < 1) {
      setMessage("Você precisa dar uma dica!");

      return;
    }

    if (pin.length < 3) {
      setMessage("Senha invalida, complete ela");

      return;
    }

    let timeIsSet = false;

    if (hours.length > 0 || minutes.length > 0 || seconds.length > 0) {
      setStart(true);
      timeIsSet = true;
      setMessage("");
      setPin1("");
      setPin2("");
      setPin3("");
    }

    if (!timeIsSet) {
      setMessage("Timer invalido, coloque um tempo");
      return;
    }

    if (start === true) {
      if (pin === passwordSaved) {
        setStart(false);
        // setDesarmed(true);
        clearInterval(countDownInterval);
        navigation.navigate("Disarmed");
        setPin1("");
        setPin2("");
        setPin3("");
        setPasswordSaved("");

        return;
      } else {
        setPin1("");
        setPin2("");
        setPin3("");
        Vibration.vibrate(1000);

        return;
      }
    } else {
      setStart(true);
      handleStartBomb();

      return;
    }
  },
};

export default BombService;
