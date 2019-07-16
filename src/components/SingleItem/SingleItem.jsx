import React from "react";
import "./SingleItem.css";

export default class SingleItem extends React.Component {
    deleteSingleItem = event => {
        if (event.target.className === "closeItem") {
            this.props.deleteTask(this.props.singleItem.id);
        }
    };

    sayHallo = () => {
        console.log(this.props.singleItem);
        return this.props.sayHallo();
    };

    isChecked = event => {
        if (event.target.className !== "closeItem") {
            this.props.changeCheck(this.props.singleItem.id);
        }
    };

    render() {
        const { text, date, checked } = this.props.singleItem;
        return (
            <div
                className={
                    checked === true
                        ? "singleItem checked"
                        : "singleItem"
                }
                onClick={this.isChecked}
            >
                <p className="textItem">{text}</p>
                <p className="dateItem">{date}</p>
                <p className="closeItem" onClick={this.deleteSingleItem}>
                    [X]
                </p>
            </div>
        );
    }
}
