import React from "react";
import "./SortBlock.css";

export default class SortBlock extends React.Component {
    onClickName = event => {
        this.props.sorting(event.target.value);
    };

    render() {
        const { sorting } = this.props;
        return (
            <div className="sortBlock">
                <input
                    type="button"
                    value="Name"
                    className="sortButton"
                    onClick={sorting}
                />
                <input
                    type="button"
                    value="Date"
                    className="sortButton"
                    onClick={sorting}
                />
            </div>
        );
    }
}
