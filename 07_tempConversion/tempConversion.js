const ftoc = function (temp) {
  let celsius = (temp - 32) * (5 / 9);
  console.log(typeof (celsius))
  if (celsius !== 0) {
    celsius = Number(celsius.toFixed(1));
  }
  return celsius;
};

const ctof = function (temp) {
  let fahreheit = temp * (9 / 5) + 32
  if (fahreheit !== 0) {
    fahreheit = Number(fahreheit.toFixed(1));
  }
  return fahreheit
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
