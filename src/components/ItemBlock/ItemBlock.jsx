import React from "react";
import "./ItemBlock.css";
import SingleItem from "../SingleItem/SingleItem";

export default class ItemBlock extends React.Component {
    renderSingleItems = () => {
        console.log(this);
        const { itemsList, onDelete, changeCheck } = this.props;
        let newItemsList = null;

        if (itemsList.length) {
            newItemsList = itemsList.map(function(item, index) {
                return (
                    <SingleItem
                        deleteTask={onDelete}
                        singleItem={item}
                        key={index}
                        changeCheck={changeCheck}
                    />
                );
            });
        }
        return newItemsList;
    };
    render() {
        return <div className="itemBlock">{this.renderSingleItems()}</div>;
    }
}
