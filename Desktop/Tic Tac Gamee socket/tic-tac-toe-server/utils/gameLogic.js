function checkWin(board, symbol) {
    const wins = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8],
      [0, 3, 6], [1, 4, 7], [2, 5, 8],
      [0, 4, 8], [2, 4, 6],
    ];
    return wins.some(line => line.every(i => board[i] === symbol));
  }
  
  function checkDraw(board) {
    return board.every(cell => cell !== null);
  }
  
  module.exports = { checkWin, checkDraw };
  