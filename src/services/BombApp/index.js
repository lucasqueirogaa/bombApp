const BombService = {
  StartCountdown: function (seconds, minutes, hours) {
    const explodeTime = moment();
    let seconds = seconds ? seconds : 0;
    let minutes = minutes ? minutes : 0;
    let hours = hours ? hours : 0;
  },

  secondValidationMethod: function (value) {
    //inspect the value
  },
};

export default BombService;
