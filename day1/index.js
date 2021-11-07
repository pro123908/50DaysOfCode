var findMaxConsecutiveOnes = function (nums) {
  let { curOccur, maxOccur } = nums.reduce(
    (prev, curValue, index) => {
      if (curValue === 1) {
        return {
          curOccur: prev.curOccur + 1,
          maxOccur:
            prev.maxOccur < prev.curOccur + 1
              ? prev.curOccur + 1
              : prev.maxOccur,
        };
      } else {
        return {
          curOccur: 0,
          maxOccur: prev.maxOccur,
        };
      }
    },
    {
      curOccur: 0,
      maxOccur: 0,
    }
  );

  return maxOccur;
};

findMaxConsecutiveOnes([1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0]);

var findNumbers = function (nums) {
  return nums.filter((val) => {
    return val.toString().length % 2 === 0;
  }).length;
};

findNumbers([12, 345, 2, 6, 7896]);

var sortedSquares = function (nums) {
  return nums.map((val) => val * val).sort((a, b) => a - b);
};

sortedSquares([-4, -1, 0, 3, 10]);
