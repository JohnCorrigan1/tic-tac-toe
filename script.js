const player = () => {

}







const gameBoard = (() => {
    const game = ['', '', '', '', '', '', '', '', ''];
       
    function setRender(game){
        for(i = 0; i < game.length; i++){
            let current = document.querySelector(`[data-board='${i}']`);
            current.textContent = game[i];
        }
    }
    return {setRender, game}
})();
//this clears board or intializes board on open
gameBoard.setRender(gameBoard.game)


let currentGame = [];
let playerxPicks = [];
let playeroPicks = [];
let playerX = true;
let playerO = false;

//listens for click on grid-item
document.querySelectorAll('.grid-item').forEach(item => {
    item.addEventListener('click', function(){
        let current = item.dataset.board;
        if(playerX === true && item.textContent === ''){
            item.textContent = 'X';
            currentGame.push('X')
            playerxPicks.push(current)
            //gameBoard.setRender(newGame)
            playerX = false;
            playerO = true;
        }
        
        if(playerO === true && item.textContent === ''){
            item.textContent = 'O';
            currentGame.push('O')
            playeroPicks.push(current)
            //gameBoard.setRender(newGame);
            playerO = false;
            playerX = true;
        }

        
    })
})


document.querySelector('.restart').addEventListener('click', function(){
    //clears board
    gameBoard.setRender(gameBoard.game);
    currentGame = [];
    playeroPicks = [];
    playerxPicks = [];
    playerX = true;
    playerO = false;
});


const winConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];






// gridItem.addEventlisener('click', function(){
//     console.log("test")
//     return
// });