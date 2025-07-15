const cell = document.querySelectorAll('.cell');

let Player = "X";

let GameOver = false;

const WinningCombination = [
[0 , 1 , 2],
[3 , 4 , 5],
[6 , 7 , 8],
[0 , 3 , 6],
[1 , 4 , 7],
[2 , 5 , 8],
[0 , 4 , 8],
[2 , 4 , 6]
];

cell.forEach((cell , index ) => {
    cell .addEventListener('click', () => handleClick(cell ,index))

});

function handleClick(cell , index)
{
    if(GameOver || cell.textContent !== '')
 return;
cell.textContent = Player;

if


}