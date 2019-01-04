import { GameSnapshot } from "./GameSnapshot";

export class GameState {
    history: Array<GameSnapshot>;
    stepNumber: number;
    xIsNext: boolean;
    winner:string;
    
    constructor() {
        this.history = new Array<GameSnapshot>();
        this.stepNumber = 0;
        this.xIsNext = true;
        this.winner = null;
    }

    clone() : GameState {
        var clone = new GameState();
        clone.history = this.history.slice();
        clone.stepNumber = this.stepNumber;
        clone.xIsNext = this.xIsNext;
        clone.winner = this.winner;
        return clone;    
    }
}
