/*
~ ~ ~  Remember Wishful Thinking <3 ~ ~ ~ 
*/

// DOM is the glue between Board & Controller
const DOM = () => {
    
};


// Board is the module for
// the view of the board
const Board = (() => {

    const board = [];
    const square = {
        mark: '',
    }

    // method to fetch board to other modules
    const getBoard = () => {
        return board
    };
    
    const newMarker = (mark, index) => {
        // since {mark} is a property of object
        // in array, it will update  
        board[index] = { mark }; 
    }

    // clear and setup the board
    const init = () => {
        for (let i = 0; i < 9; i++) {
            board.push(square);
        }
        return {board}
    }
    
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

    // players initially un-typed (Human/AI)
    const player1 = {
        name: 'Player 1',
        marker: 'X',
        player_type: '',
    }
    
    const player2 = {
        name: 'Player 2',
        marker: 'O',
        player_type: '',
    }

    // turn control

    let player1turn = true;

    const chooseTurn = () => {
        player1turn = !player1turn;
    };

    const checkPlayers = () => {
        if (player1.player_type !== ''
        &&
            player2.player_type !== '') 
        {return true}
    };

    const checkWinner = (() => {
        
        let marks = Board.getBoard();
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

        if (
            winConditions.some((array) => {
                let checkWin = [];
                array.forEach((square) => {
                    if (board[square].mark !== '') {
                        checkWin.push(board[square]);
                    }
                });
        })

            ) 
        
})();


const tests = (() => {

    let marks = Board.getBoard();
    Board.init();
    Board.newMarker('X', 0)
    Board.newMarker('X', 1)
    Board.newMarker('X', 2)
    Board.newMarker('O', 3)
    Board.newMarker('O', 6)

    //let xs = 

    return {marks}
})();

console.table(tests.marks);
console.log("marks -> " + tests.marks);
//console.table("xs -> " + tests.xs);

