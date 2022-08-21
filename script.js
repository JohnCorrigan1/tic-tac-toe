const container = document.getElementById("container")
const board = document.getElementById("game-board")
let game = ['X', 'O', 'X', 'O']

const gameBoard = () => {
    let game = ['X', 'O', 'X', 'O']

    function render(game){
        for(i = 0; i < game.length; i++){
            let current = document.querySelector('[data-board="${i}"]')
            
        }
    }
}

function render(game){
    for(i = 0; i < game.length; i++){
        let current = document.querySelector(`[data-board='${i}']`)
        current.textContent = game[i];
    }
}

render(game)




