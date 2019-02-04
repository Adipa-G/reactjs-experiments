import * as React from "react";

import Square from "./Square";

export interface BoardProps { }

export default class Board extends React.Component<BoardProps, {}> {
    renderSquare(i: number) {
        return <Square key={i} index={i} />;
    }

    renderRow(row: number) {
        let cols:Array<object> = [];
        for (let y:number = 0; y < 3; y++) {
            cols.push(this.renderSquare(row * 3 + y));
        }
        return cols;
    }

    render() {
        let rows:Array<object> = [];
        for (let y:number = 0; y < 3; y++) {
            rows.push(<div
                key={y}
                className="board-row">
                {this.renderRow(y)}
            </div>);
        }

        return (
            <div>
                {rows}
            </div>
        );
    }
}
