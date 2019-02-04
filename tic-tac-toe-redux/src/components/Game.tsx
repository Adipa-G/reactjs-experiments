import * as React from "react";

import Board from "./Board";
import GameInfo from "./GameInfo";

export class Game extends React.Component<any,{}> {
    constructor(props: any) {
        super(props);
    }

    render() {
        let status:string;
        if (this.props.winner) {
            status = 'Winner: ' + this.props.winner;
        } else {
            status = 'Next player: ' + (this.props.xIsNext ? 'X' : 'O');
        }

        return (
            <div className="game">
                <div className="game-board">
                    <Board/>
                </div>
                <div className="game-info">
                    <GameInfo/>
                </div>
            </div>
        );
    }
}