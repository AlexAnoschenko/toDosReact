import React from "react";
import "./InputBlock.css";
import { connect } from "react-redux";
import { addSingleItem } from "../store/actions";

class InputBlock extends React.Component {
    state = {
        inputValue: "",
        inputDate: ""
    };

    handleChange = event => {
        const { id, value } = event.currentTarget;
        this.setState({ [id]: value });
    };

    onClickAddButton = filter => {
        this.props.addSingleItem({
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

const mapDispatchToProps = dispatch => {
    return {
        addSingleItem: item => dispatch(addSingleItem(item))
    };
};

export default connect(
    null,
    mapDispatchToProps
)(InputBlock);
