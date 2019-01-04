export const selectSquare = (squareIndex:number) => {
    return {
        type : 'SELECT_SQUARE',
        SquareIndex : squareIndex 
    };
}