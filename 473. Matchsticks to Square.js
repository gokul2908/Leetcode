var makesquare = function (matchsticks) {
  const req = matchsticks.reduce((prev, curr) => (curr += prev)) / 4;
  if (req % 1 !== 0) return false;
  // matchsticks.sort((a,b)=> a-b)
  let mem = [];
  function rec(arr = [], from = 0) {
    arr_sum = arr.reduce((p, c) => (c += p), 0);
    for (let i = from; i < matchsticks.length; i++) {
      let temp = arr_sum + matchsticks[i];
      if (temp < req) rec(arr.push([matchsticks[i], i]), i + 1);
      else if (temp == req) mem.push(arr.push([matchsticks[i], i]));
      else break;
    }
  }
};
    