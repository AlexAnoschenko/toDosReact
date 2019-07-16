import React from "react";
import "./ItemBlock.css";
import SingleItem from "../SingleItem/SingleItem";
import { connect } from "react-redux";
import { deleteSingleItem, checkSingleItem } from "../store/actions";

class ItemBlock extends React.Component {
    renderSingleItems = () => {
        const { sourceItems } = this.props;

        if (sourceItems.length) {
            return sourceItems.map(item => {
                return (
                    <SingleItem
                        deleteTask={this.props.deleteSingleItem}
                        changeCheck={this.props.checkSingleItem}
                        singleItem={item}
                        key={item.id}
                    />
                );
            });
        }
    };
    render() {
        return <div className="itemBlock">{this.renderSingleItems()}</div>;
    }
}

const mapDispatchToProps = dispatch => {
    return {
        checkSingleItem: id => dispatch(checkSingleItem(id)),
        deleteSingleItem: id => dispatch(deleteSingleItem(id))
    };
};

export default connect(
    null,
    mapDispatchToProps
)(ItemBlock);
