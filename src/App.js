import React from "react";
import "./App.css";

import InputBlock from "./components/InputBlock/InputBlock";
import ItemBlock from "./components/ItemBlock/ItemBlock";
import SortBlock from "./components/SortBlock/SortBlock";
import FilterBlock from "./components/FilterBlock/FilterBlock";

export default class App extends React.Component {
    state = {
        sourceItems: [],
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
        let first = null;
        let second = null;
        this.setState({
            tasks: this.state.tasks.sort((a, b) => {
                if (type === "Name") {
                    first = a.text.toLowerCase();
                    second = b.text.toLowerCase();
                } else {
                    first = a.date;
                    second = b.date;
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

    filterHandle = filter => {
        if (this.state.sourceItems.length === 0) {
            this.setState(function(state) {
                return {
                    sourceItems: state.tasks
                };
            });
        }

        this.setState(function(state) {
            return {
                tasks: state.tasks.filter(item => {
                    return item.text.toLowerCase().indexOf(filter) > -1;
                })
            };
        });

        if (filter === "") {
            this.setState(function(state) {
                return {
                    tasks: state.sourceItems
                };
            });
        }
    };

    filterHandleDate = filter => {
        if (this.state.sourceItems.length === 0) {
            this.setState(function(state) {
                return {
                    sourceItems: state.tasks
                };
            });
        }

        this.setState(function(state) {
            return {
                tasks: state.tasks.filter(item => {
                    return item.date.indexOf(filter) > -1;
                })
            };
        });

        if (filter === "") {
            this.setState(function(state) {
                return {
                    tasks: state.sourceItems
                };
            });
        }
    };

    render() {
        return (
            <React.Fragment>
                <InputBlock addNewTask={this.addTask} />
                <div className="sortFilterBlock">
                    <FilterBlock
                        filtering={this.filterHandle}
                        filteringDate={this.filterHandleDate}
                    />
                    <SortBlock sorting={this.sortHandle} />
                </div>
                <ItemBlock
                    changeCheck={this.changeCheck}
                    onDelete={this.deleteTask}
                    itemsList={this.state.tasks}
                />
            </React.Fragment>
        );
    }
}
