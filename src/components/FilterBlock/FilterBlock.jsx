import React from "react";
import "./FilterBlock.css";

export default class FilterBlock extends React.Component {
    onChangeFilter = event => {
        let filtedData = event.currentTarget.value;
        if (event.currentTarget.type === "text") {
            this.props.filtering(
                filtedData.toLowerCase(),
                event.currentTarget.type
            );
        } else {
            this.props.filtering(filtedData, event.currentTarget.type);
        }
    };

    render() {
        return (
            <div className="filterBlock">
                <input
                    type="text"
                    className="filterInput"
                    placeholder="Text..."
                    onChange={this.onChangeFilter}
                />
                <input
                    type="date"
                    className="filterInput"
                    placeholder="Date..."
                    onChange={this.onChangeFilter}
                />
            </div>
        );
    }
}
