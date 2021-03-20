const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if (date === undefined) {
    return 'Unable to determine the time of year!';
  }
  if (!date) {
    throw new Error('Not Date');
  }

  const m = date.getUTCMonth();

  const spring = (m === 2 || m === 3 || m === 4);
  const summer = (m === 5 || m === 6 || m === 7);
  const autumn = (m === 8 || m === 9 || m === 10);
  const winter = (m === 11 || m === 0 || m === 1);

  if (spring) return 'spring';
  if (summer) return 'summer';
  if (autumn) return 'autumn';
  if (winter) return 'winter';
};
