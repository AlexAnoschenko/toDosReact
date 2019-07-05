import React from "react";
import "./App.css";

import InputBlock from "./components/InputBlock/InputBlock";
import ItemBlock from "./components/ItemBlock/ItemBlock";
import SortBlock from "./components/SortBlock/SortBlock";

export default class App extends React.Component {
    state = {
        tasks: [],
        sortStatus: false
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

    sortHandle = type => {
        this.setState({
            tasks: this.state.tasks.sort((a, b) => {
                if (type === "Name") {
                    var first = a.text.toLowerCase();
                    var second = b.text.toLowerCase();
                } else {
                    var first = a.date;
                    var second = b.date;
                }

                if (this.state.sortStatus === false) {
                    if (first > second) {
                        return 1;
                    } else {
                        return -1;
                    }
                } else {
                    if (first > second) {
                        return -1;
                    } else {
                        return 1;
                    }
                }
            })
        });

        this.setState(function(state) {
            return {
                sortStatus: !state.sortStatus
            };
        });
    };

    render() {
        return (
            <React.Fragment>
                <InputBlock addNewTask={this.addTask} />
                <SortBlock sorting={this.sortHandle} />
                <ItemBlock
                    changeCheck={this.changeCheck}
                    onDelete={this.deleteTask}
                    itemsList={this.state.tasks}
                />
            </React.Fragment>
        );
    }
}
