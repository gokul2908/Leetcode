var solveSudoku = function (board) {
  const map = { 0: 0, 1: 0, 2: 0, 3: 1, 4: 1, 5: 1, 6: 2, 7: 2, 8: 2 };

  function* getPossibleVal(row, col) {
    function checkCol(val) {
      for (let i = 0; i < 9; i++) {
        if (val == board[i][col]) return false;
      }
      return true;
    }
    function check9Square(val) {
      for (let i = map[row] * 3; i < map[row] * 3 + 3; i++) {
        for (let j = map[col] * 3; j < map[col] * 3 + 3; j++) {
          if (val == board[i][j]) return false;
        }
      }
      return true;
    }

    for (let i of ["1", "2", "3", "4", "5", "6", "7", "8", "9"]) {
      if (!board[row].includes(i) && checkCol(i) && check9Square(i)) {
        yield i;
      }
    }
  }

  function solve() {
    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
        if (board[i][j] == ".") {
          for (const temp of getPossibleVal(i, j)) {
            board[i][j] = String(temp);
            if (solve()) return board;
            else board[i][j] = ".";
          }
          return false;
        }
      }
    }
    return true;
  }
  solve();
};

boardx = [
  ["5", "3", "4", "6", "7", "8", "9", "1", "2"],
  ["6", "7", "2", "1", "9", "5", ".", ".", "."],
  [".", "9", "8", ".", ".", ".", ".", "6", "."],
  ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
  ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
  ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
  [".", "6", ".", ".", ".", ".", "2", "8", "."],
  [".", ".", ".", "4", "1", "9", ".", ".", "5"],
  [".", ".", ".", ".", "8", ".", ".", "7", "9"],
];

solveSudoku(boardx);
console.log(boardx);
