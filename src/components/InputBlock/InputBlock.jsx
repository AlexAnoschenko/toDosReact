import React from "react";
import "./InputBlock.css";

export default class InputBlock extends React.Component {
    state = {
        inputValue: "",
        inputDate: ""
    };

    onChangeDate = event => {
        this.setState({ inputDate: event.currentTarget.value });
    };

    onChangeMainInput = event => {
        this.setState({ inputValue: event.currentTarget.value });
    };

    onClickAddButton = () => {
        var task = {
            text: this.state.inputValue,
            date: this.state.inputDate,
            id: Date.now(),
            checked: false
        };
        this.props.addNewTask(task);
    };

    render() {
        return (
            <div className="inputBlock">
                <input
                    type="text"
                    onChange={this.onChangeMainInput}
                    className="mainInput"
                    placeholder="Your task..."
                />
                <input
                    type="date"
                    onChange={this.onChangeDate}
                    className="mainDate"
                />
                <input
                    type="button"
                    onClick={this.onClickAddButton}
                    className="addButton"
                    value="Add!"
                />
            </div>
        );
    }
}
