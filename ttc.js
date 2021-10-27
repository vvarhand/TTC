/*
~ ~ ~  Remember Wishful Thinking <3 ~ ~ ~ 
*/

// DOM is the glue between Board & Controller
// Do this last
const DOM = () => {
    
};


// Board is the module for
// the view of the board
// IIFE
const Board = (() => {

    const board = [];
    const square = {
        mark: '',
    };

    const getBoard = () => {
        return board
    };
    
    const newMarker = (index, mark) => {
        // destructuring, why this works?...
        board[index] = { mark }; 
    }

    const init = () => {
        for (let i = 0; i <= 9; i++) {
            board.push(square)
        }
    };
    
    // API for other modules
    return {
        getBoard, 
        init,
        newMarker, 
    }

})();


// Controller is the module for
// the logic of the game
const Controller = (() => {

    const player1 = {
        name: 'Player 1',
        marker: 'X',
        ai: '',
    }
    
    const player2 = {
        name: 'Player 2',
        marker: 'O',
        ai: '',
    }

    let player1turn = true;

    
    const confirmWinner = () => {
        
        const winConditions = [
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [2,4,6],
        ];

    };

    const turnCounter = () => {

    }











})();