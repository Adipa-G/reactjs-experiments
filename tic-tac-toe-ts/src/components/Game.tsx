import * as React from "react";
import Board from "./Board";

class GameSnapshot {
    squares: Array<string>;
    row: number;
    col: number;

    constructor(squares: Array<string>) {
        this.squares = squares;
    }
}

class GameState {
    history: Array<GameSnapshot>;
    stepNumber: number;
    xIsNext: boolean;

    constructor(initial: GameSnapshot) {
        this.history = new Array<GameSnapshot>();
        this.history.push(initial);
        this.stepNumber = 0;
        this.xIsNext = true;
    }
}

export class Game extends React.Component {
    constructor(props: any) {
        super(props);

        let startValues: Array<string> = new Array<string>(9);
        (startValues as any).fill(null);

        this.state = new GameState(new GameSnapshot(startValues));
    }

    jumpTo(step: number) {
        this.setState({
            stepNumber: step,
            xIsNext: (step % 2) === 0,
        });
    }

    handleClick(i: number) {
        const gameState = this.state as GameState;
        const history = gameState.history.slice(0, gameState.stepNumber + 1);
        const current = history[history.length - 1];
        const squares = current.squares.slice();

        if (this.calculateWinner(squares) || squares[i]) {
            return;
        }

        squares[i] = gameState.xIsNext ? 'X' : 'O';
        this.setState({
            history: history.concat([{
                squares: squares,
                row: Math.floor(i / 3) + 1,
                col: i % 3 + 1
            }]),
            stepNumber: history.length,
            xIsNext: !gameState.xIsNext,
        });
    }

    calculateWinner(squares: Array<string>) {
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

    render() {
        const gameState = this.state as GameState;
        const history = gameState.history;
        const current = history[gameState.stepNumber];
        const winner = this.calculateWinner(current.squares);

        const moves = history.map((step: GameSnapshot, move: number) => {
            let desc: any = move ?
                'Go to move #' + move + ' (' + step.row + ',' + step.col + ')'
                : 'Go to game start';
            if (move === gameState.stepNumber) {
                desc = <strong>{desc}</strong>;
            }
            return (
                <li key={move}>
                    <button onClick={() => this.jumpTo(move)}>{desc}</button>
                </li>
            );
        });

        let status;
        if (winner) {
            status = 'Winner: ' + winner;
        } else {
            status = 'Next player: ' + (gameState.xIsNext ? 'X' : 'O');
        }

        return (
            <div className="game">
                <div className="game-board">
                    <Board
                        squares={current.squares}
                        onClick={(i: number) => this.handleClick(i)}
                    />
                </div>
                <div className="game-info">
                    <div>{status}</div>
                    <ol>{moves}</ol>
                </div>
            </div>
        );
    }
}