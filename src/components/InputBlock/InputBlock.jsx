import React from "react";
import "./InputBlock.css";

export default class InputBlock extends React.Component {
    state = {
        inputValue: "",
        inputDate: ""
    };

    // onChangeDate = event => {
    //     this.setState({ inputDate: event.currentTarget.value });
    // };

    // onChangeMainInput = event => {
    //     this.setState({ inputValue: event.currentTarget.value });
    // };

    handleChange = event => {
        const { id, value } = event.currentTarget;
        this.setState({ [id]: value });
    };

    onClickAddButton = () => {
        this.props.addNewTask({
            text: this.state.inputValue,
            date: this.state.inputDate,
            id: Date.now(),
            checked: false
        });
    };

    render() {
        const { inputValue, inputDate } = this.state;
        return (
            <div className="inputBlock">
                <input
                    id="inputValue"
                    type="text"
                    onChange={this.handleChange}
                    className="mainInput"
                    placeholder="Your task..."
                    value={inputValue}
                />
                <input
                    id="inputDate"
                    type="date"
                    onChange={this.handleChange}
                    className="mainDate"
                    value={inputDate}
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
