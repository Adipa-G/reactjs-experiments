import * as React from "react";

interface SquareProps { value: string; key: number; onClick: any; }

export default class Square extends React.Component<SquareProps, {}> {
    render() {
        return (
            <button className="square" onClick={this.props.onClick}>
                {this.props.value}
            </button>
        );
    }
}
