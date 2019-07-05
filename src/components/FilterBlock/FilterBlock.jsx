import React from "react";
import "./FilterBlock.css";

export default class FilterBlock extends React.Component {
    onChangeFilterText = event => {
        var textFilter = event.currentTarget.value.toLowerCase();
        this.props.filtering(textFilter);
    };

    onChangeFilterData = event => {
        var dateFilter = event.currentTarget.value;
        this.props.filteringDate(dateFilter);
    };

    render() {
        return (
            <div className="filterBlock">
                <input
                    type="text"
                    className="filterInput"
                    placeholder="Text..."
                    onChange={this.onChangeFilterText}
                />
                <input
                    type="date"
                    className="filterInput"
                    placeholder="Date..."
                    onChange={this.onChangeFilterData}
                />
            </div>
        );
    }
}
