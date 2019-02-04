import * as React from "react";
import { connect } from "react-redux";

import { GameState } from "../models/GameState";

export class GameInfo extends React.Component<any,{}> {
    constructor(props: any) {
        super(props);

        let startValues: Array<string> = new Array<string>(9);
        (startValues as any).fill(null);
    }

    render() {
        let status:string;
        if (this.props.winner) {
            status = 'Winner: ' + this.props.winner;
        } else {
            status = 'Next player: ' + (this.props.xIsNext ? 'X' : 'O');
        }

        return (
            <div>{status}</div>
        );
    }
}

const mapStateToProps = (state: GameState) => {
    return {
        winner : state.winner,
        xIsNext : state.xIsNext
    };
}

export default connect(mapStateToProps,null)(GameInfo);