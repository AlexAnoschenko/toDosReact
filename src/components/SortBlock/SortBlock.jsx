import React from "react";
import "./SortBlock.css";

export default class SortBlock extends React.Component {
    onClickName = event => {
        this.props.sorting(event.target.value);
    };

    render() {
        return (
            <div className="sortBlock">
                <input
                    type="button"
                    value="Name"
                    className="sortButton"
                    onClick={this.onClickName}
                />
                <input
                    type="button"
                    value="Date"
                    className="sortButton"
                    onClick={this.onClickName}
                />
            </div>
        );
    }
}
