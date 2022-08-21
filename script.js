

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
let playerX = true;
let playerO = false;

//listens for click on grid-item
document.querySelectorAll('.grid-item').forEach(item => {
    item.addEventListener('click', function(){
        if(playerX === true && item.textContent === ''){
            item.textContent = 'X';
            currentGame.push('X')
            //gameBoard.setRender(newGame)
            playerX = false;
            playerO = true;
        }
        
        if(playerO === true && item.textContent === ''){
            item.textContent = 'O';
            currentGame.push('O')
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
    playerX = true;
    playerO = false;
})




// gridItem.addEventlisener('click', function(){
//     console.log("test")
//     return
// });