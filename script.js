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
// gameBoard.setRender(gameBoard.game)

const gameController = (() => {
    gameBoard.setRender(gameBoard.game)
    let currentGame = [];
    let playerxPicks = [];
    let playeroPicks = [];
    let playerX = true;
    let playerO = false;
    let isOver = false;
    let head = document.getElementById('head');
    const gridItem = document.querySelectorAll('.grid-item')
    const restartButton = document.querySelector('.restart')
//listens for click on grid-item
    gridItem.forEach(item => {
        item.addEventListener('click', function(){
            let current = parseInt(item.dataset.board);
            if(playerX === true && item.textContent === '' && !isOver){
                item.textContent = 'X';
                currentGame.push('X')
                playerxPicks.push(current)
                playerX = false;
                playerO = true;
                head.innerText = "Player O's Turn"
                item.style.color = 'green'
            }
            
            if(playerO === true && item.textContent === '' && !isOver){
                item.textContent = 'O';
                currentGame.push('O')
                playeroPicks.push(current)
                playerO = false;
                playerX = true;
                head.textContent = "Player X's Turn"
                item.style.color = 'red'
            }

            //checks for winner
            for(i = 0; i < winConditions.length; i++){
            if(  winConditions[i].every(possible => {
                return playerxPicks.includes(possible)
                })){
                    isOver = true;
                    head.textContent = "Player X Wins"
                }

                if(  winConditions[i].every(possible => {
                    return playeroPicks.includes(possible)
                    })){
                        isOver = true;
                        head.textContent = "Player O Wins"
                    }

                if(playerxPicks.length == 5){
                    isOver = true;
                    head.textContent = "Tie Game"
                }
            }
        })
    })


    restartButton.addEventListener('click', function(){
        head.textContent = "Player X's Turn"
        gameBoard.setRender(gameBoard.game);
        currentGame = [];
        playeroPicks = [];
        playerxPicks = [];
        playerX = true;
        playerO = false;
        isOver = false;
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

})();