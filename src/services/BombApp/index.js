import moment from "moment";
import { Vibration } from "react-native";

const BombService = {
  getDiffTime: ({ hours, minutes, seconds }) => {
    const explodeTime = moment();
    let secondsMoment = seconds.length >= 1 ? seconds : 0;
    let minutesMoment = minutes.length >= 1 ? minutes : 0;
    let hoursMoment = hours.length >= 1 ? hours : 0;

    explodeTime
      .add(secondsMoment, "seconds")
      .add(minutesMoment, "minutes")
      .add(hoursMoment, "hours");

    const currentTime = moment();

    return explodeTime.unix() - currentTime.unix();
  },

  StartCountdown: ({
    setSeconds,
    setMinutes,
    setHours,
    pin,
    passwordSaved,
    countDownInterval,
    setStart,
    diffTime,
    handleNavToExploded,
  }) => {
    return null;
  },

  BombActivation: ({
    hours,
    minutes,
    seconds,
    start,
    setStart,
    countDownInterval,
    truePin,
    passwordSaved,
    setTruePin,
    handleStartBomb,
    navigation,
  }) => {},

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
