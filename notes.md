# Notes to self

1. Do one thing at a time
2. DRY, SRE
3. Focus on logic, then on styling 
4. ~ Whishful Thinking ~
5. Deconstruct problems into smaller problems

## Modules 

are functions which can encapsulate variables and other functions. Whatever they return is being made public for other parts of a program to use. 

## Factory Functions 

are used to create objects (i.e. constructor)
Only what is returnable can be used, "must" be an object.

## TTC 

# Three objects:
    # Board
    # Controller
    # DOM 

Board is responsible for all data representations and manipulations within the realm of the board.

Controller is the internal logic of the game: players, turn, winners, check

DOM is responsible for everything shown to the user.

All of these are modules.

# Board Elements 
    - board = array
    - square = indiv. object of the board
    - newMarker() = f() to set square object
    - init() = f() to initialize the board
    - getBoard() = f() for fetching to other modules
    - 
