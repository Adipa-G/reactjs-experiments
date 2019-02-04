import * as React from "react";
import { connect } from "react-redux";

import { selectSquare } from "../redux/Actions";
import { GameState } from "../models/GameState";

interface SquareProps { key: number; index: number; value? : string, selectSquare? : any}

class Square extends React.Component<SquareProps, {}> {
    handleClick = () => {
        this.props.selectSquare(this.props.index);
    }

    render() {
        return (
            <button className="square" onClick={this.handleClick}>
                {this.props.value}
            </button>
        );
    }
}

const mapStateToProps = (state: GameState, ownProps: SquareProps) => {
    let value:string = state.history[state.history.length - 1].squares[ownProps.index];
    return {
        value: value
    };
}

export default connect(mapStateToProps,{selectSquare})(Square);
