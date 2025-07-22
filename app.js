const cells = document.querySelectorAll('.cell');
let currentPlayer = "X";
let isGameOver = false;
const winningCombinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];
cells.forEach((cell, index) => {
  cell.addEventListener('click', () => handleClick(cell, index));
});
function handleClick(cell, index) {
  if (isGameOver || cell.textContent !== '') return;
  cell.textContent = currentPlayer;
  if (checkWin()) {
    alert(`${currentPlayer} wins!`);
    isGameOver = true;
    return;
  }
  if (checkDraw()) {
    alert("It's a draw!");
    isGameOver = true;
    return;
  }
  currentPlayer = currentPlayer === "X" ? "O" : "X";
}
function checkWin() {
  return winningCombinations.some(combination => {
    const [a, b, c] = combination;
    return (
      cells[a].textContent === currentPlayer &&
      cells[b].textContent === currentPlayer &&
      cells[c].textContent === currentPlayer
    );
  });
}
function checkDraw() {
  return [...cells].every(cell => cell.textContent !== '');
}

document.getElementById('resetbutton').addEventListener('click' , resetgame)

function resetgame ()
{
  cells.forEach(cell=>{
    cell.textContent= '';
  });

  currentPlayer = "X";
  isGameOver = false;
}








