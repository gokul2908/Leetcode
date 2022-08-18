var minSetSize = function (arr) {
  const max = {};
  for (let each of arr) {
    if (each in max) max[each] += 1;
    else max[each] = 1;
  }
  sortedArr = Object.keys(max).sort((a, b) => max[b] - max[a]);
  console.log(max);
  let index = 0,
    sumVal = 0;
  while (index < sortedArr.length && sumVal < arr.length / 2) {
    sumVal += max[sortedArr[index]];
    index++;
  }
  console.log(index);
  return index;
};
minSetSize([3, 3, 3, 3, 5, 5, 5, 2, 2, 7]);
minSetSize([3, 3, 3, 3, 3]);
