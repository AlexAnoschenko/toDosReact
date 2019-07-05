import React from "react";
import "./ItemBlock.css";
import SingleItem from "../SingleItem/SingleItem";

export default class ItemBlock extends React.Component {
    renderSingleItems = () => {
        const { itemsList, onDelete, changeCheck } = this.props;

        if (itemsList.length) {
            return itemsList.map(item => {
                return (
                    <SingleItem
                        deleteTask={onDelete}
                        singleItem={item}
                        key={item.id}
                        changeCheck={changeCheck}
                    />
                );
            });
        }
    };
    render() {
        return <div className="itemBlock">{this.renderSingleItems()}</div>;
    }
}
