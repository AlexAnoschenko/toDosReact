import React from "react";
import "./App.css";

import InputBlock from "./components/InputBlock/InputBlock";
import ItemBlock from "./components/ItemBlock/ItemBlock";

export default class App extends React.Component {
    state = {
        tasks: []
    };

    addTask = newTask => {
        this.setState(state => ({ tasks: [...state.tasks, newTask] }));
    };

    deleteTask = id => {
        this.setState({
            tasks: this.state.tasks.filter(item => {
                return item.id !== id && item;
            })
        });
    };

    changeCheck = id => {
        this.setState({
            tasks: this.state.tasks.map(item => {
                if (item.id === id) {
                    item.checked = !item.checked;
                }
                return item;
            })
        });
    };

    render() {
        return (
            <React.Fragment>
                <InputBlock addNewTask={this.addTask} />
                <ItemBlock
                    changeCheck={this.changeCheck}
                    onDelete={this.deleteTask}
                    itemsList={this.state.tasks}
                />
            </React.Fragment>
        );
    }
}
