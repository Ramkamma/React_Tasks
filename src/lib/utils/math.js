function getRandomNumber(totalData) {
  const randomNumber = Math.floor(Math.random() * totalData.length);
  return randomNumber;
}
function getNextRoundRobin(totalData, currentVal) {
  if (totalData.length - 1 > currentVal) {
    return currentVal + 1;
  }
  return 0;
}
export { getRandomNumber, getNextRoundRobin };
