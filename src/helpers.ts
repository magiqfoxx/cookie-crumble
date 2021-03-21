export const getLevel = (points: number) => {
  if (points <= 10) {
    return 1;
  } else {
    return Math.floor(Math.log(points / 10) / Math.log(2)) + 2;
  }
};
