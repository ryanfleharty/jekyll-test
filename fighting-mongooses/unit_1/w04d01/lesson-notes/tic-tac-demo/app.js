let currentPlayer = "X";

const board = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
]

function renderBoard(){
    for(let i = 0; i < board.length; i++){
        const row = board[i];
        for(let x = 0; x < row.length; x++){
            if(row[x] !== null){
                $(`.game-square[row=${i}][square=${x}]`).empty();
                $(`.game-square[row=${i}][square=${x}]`).append(`<p>${row[x]}</p>`)
            }
        }
    }
}
function changePlayer(){
    if(currentPlayer === "X"){
        currentPlayer = "O";
    }else{
        currentPlayer = "X";
    }
}
function checkForHorizontalVictory(){
    for(let i = 0; i < board.length; i++){
        const row = board[i];
        if(row[0] == row[1] && row[1] == row[2] && row[0] !== null){
            console.log(`A WINNER IS ${row[0]}`)
            $('body').append(`<h3>Congratulations, ${row[0]} won!!!`);
            $('.game-square').off();
        }
    }
}
function checkForVictory(){
    checkForHorizontalVictory();
}
renderBoard();

$('.game-square').click(function(){
    $(this).off();
    const row = $(this).attr('row');
    const square = $(this).attr('square');
    board[row][square] = currentPlayer;
    changePlayer();
    renderBoard();
    checkForVictory();
})

// 1. Give the user an action to perform (add event listener)
// 2. Respond to the user action by updating state of the app
// 3. Re-render the page to update the user interface (UI) with the new state