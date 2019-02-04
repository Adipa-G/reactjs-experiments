import { GameSnapshot } from "../models/GameSnapshot";
import { GameState } from "../models/GameState";
import { stat } from "fs";

function calculateWinner(squares: Array<string>): string {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }
    return null;
}

function getInitialState(): GameState {
    let startValues: Array<string> = new Array<string>(9);
    (startValues as any).fill(null);

    let snapshot = new GameSnapshot(startValues);

    let state = new GameState();
    state.history.push(snapshot);

    return state;
}

const initialState = getInitialState();

export default function (state: GameState = initialState, action: any): GameState {
    const gameState = state as GameState;
    const history = gameState.history.slice(0, gameState.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();

    if (gameState.winner || squares[action.SquareIndex]) {
        return state;
    }

    squares[action.SquareIndex] = gameState.xIsNext ? 'X' : 'O';

    let snapshot = new GameSnapshot(squares);
    snapshot.row = Math.floor(action.SquareIndex / 3) + 1;
    snapshot.col = action.SquareIndex % 3 + 1;

    let nextState =  gameState.clone();
    nextState.history.push(snapshot)
    nextState.stepNumber = history.length;
    nextState.xIsNext = !gameState.xIsNext;
    nextState.winner = calculateWinner(squares);

    return nextState;
}
