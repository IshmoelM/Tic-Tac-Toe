// Select DOM elements safely
const cells = document.querySelectorAll('.cell');
const resetButton = document.getElementById('resetbutton');
const nextButton = document.getElementById('nextbutton');
const myModal = document.querySelector('.myModal');

// Game variables
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

// Add click events to game cells
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

function resetGame() {
  cells.forEach(cell => {
    cell.textContent = '';
  });
  currentPlayer = "X";
  isGameOver = false;
}

// Show modal when reset button is clicked
resetButton.addEventListener("click", () => {
  if (myModal) {
    myModal.style.display = "flex";
  }
});

// Hide modal when clicking outside of modal content
window.addEventListener("click", (e) => {
  if (e.target === myModal) {
    myModal.style.display = "none";
    resetGame();
  }
});

// Reset board when next game button is clicked
nextButton.addEventListener("click", resetGame);
