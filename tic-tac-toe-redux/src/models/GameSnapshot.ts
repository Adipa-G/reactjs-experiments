export class GameSnapshot {
    squares: Array<string>;
    row: number;
    col: number;
    constructor(squares: Array<string>) {
        this.squares = squares;
    }
}
