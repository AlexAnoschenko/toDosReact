import React from "react";
import "./FilterBlock.css";

export default class FilterBlock extends React.Component {
    onChangeFilter = event => {
        var textFilter = event.currentTarget.value.toLowerCase();
        this.props.filtering(textFilter);
    };

    render() {
        return (
            <div className="filterBlock">
                <input
                    type="text"
                    className="filterInput"
                    placeholder="Filert..."
                    onChange={this.onChangeFilter}
                />
            </div>
        );
    }
}
