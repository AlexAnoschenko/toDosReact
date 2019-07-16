import React from "react";
import "./App.css";
import { connect } from "react-redux";
import { sortSingleItem, filterSingleItem } from "./components/store/actions";

import InputBlock from "./components/InputBlock/InputBlock";
import ItemBlock from "./components/ItemBlock/ItemBlock";
import SortBlock from "./components/SortBlock/SortBlock";
import FilterBlock from "./components/FilterBlock/FilterBlock";

class App extends React.Component {
    render() {
        return (
            <React.Fragment>
                <InputBlock />
                <div className="sortFilterBlock">
                    <FilterBlock filtering={this.props.filterSingleItem} />
                    <SortBlock sorting={this.props.sortSingleItem} />
                </div>
                <ItemBlock sourceItems={this.props.sourceItems} />
            </React.Fragment>
        );
    }
}

const mapStateToProps = store => {
    return {
        sourceItems: store.sourceItems
    };
};

const mapDispatchToProps = dispatch => {
    return {
        filterSingleItem: (filter, type) =>
            dispatch(filterSingleItem(filter, type)),
        sortSingleItem: type => dispatch(sortSingleItem(type))
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
