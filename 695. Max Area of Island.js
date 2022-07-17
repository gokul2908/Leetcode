var maxAreaOfIsland = function (grid) {
  const memory = [];
  let maxArea = 0;
  const foursides = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ];

  for (let r = 0; r < grid.length; r++) {
    memory.push([]);
  }

  function outOfRange(r, c) {
    return r < 0 || c < 0 || r >= grid.length || c >= grid[0].length;
  }

  function isIsland(r, c) {
    return !(memory[r][c] === null) && grid[r][c] == 1;
  }

  function rec(r, c) {
    let curr = 0;
    memory[r][c] = null;
    for (let [i, j] of foursides) {
      const [tr, tc] = [r + i, c + j];
      if (!outOfRange(tr, tc) && isIsland(tr, tc)) curr += rec(tr, tc);
    }
    return curr + 1;
  }
  for (let r = 0; r < grid.length; r++) {
    for (let c = 0; c < grid[0].length; c++) {
      if (grid[r][c]) maxArea = Math.max(maxArea, rec(r, c));
    }
  }

  console.log("max_Val:", maxArea);
  return maxArea;
};

grid = [
  [0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
  [0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0],
  [0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
];
// grid = [[0,0,0,0,0,0,0,0]]

console.log(maxAreaOfIsland(grid));
