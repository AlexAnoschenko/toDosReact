export const initialState = {
    sourceItems: [],
    tasks: [],
    sortStatus: false
};

export function rootReducer(state = initialState, action) {
    switch (action.type) {
        case "ADD_SINGLE_ITEM":
            return {
                ...state,
                sourceItems: [...state.sourceItems, action.payload],
                tasks: [...state.tasks, action.payload]
            };

        case "DELETE_SINGLE_ITEM":
            return {
                ...state,
                sourceItems: state.sourceItems.filter(item => {
                    if (action.payload !== item.id) {
                        return item;
                    }
                    return null;
                })
            };

        case "CHECK_SINGLE_ITEM":
            return {
                ...state,
                sourceItems: state.sourceItems.map(item => {
                    if (action.payload === item.id) {
                        item.checked = !item.checked;
                        return item;
                    }
                    return item;
                })
            };

        case "SORT_SINGLE_ITEM":
            let first = null;
            let second = null;
            return {
                ...state,
                sourceItems: [
                    ...state.sourceItems.sort((a, b) => {
                        if (action.payload === "Name") {
                            first = a.text.toLowerCase();
                            second = b.text.toLowerCase();
                        } else {
                            first = a.date;
                            second = b.date;
                        }

                        if (state.sortStatus === false) {
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
                ],
                sortStatus: (state.sortStatus = !state.sortStatus)
            };

        case "FILTER_SINGLE_ITEM":
            if (action.payload.filter !== "") {
                if (action.payload.type === "text") {
                    return {
                        ...state,
                        sourceItems: state.sourceItems.filter(item => {
                            return (
                                item.text
                                    .toLowerCase()
                                    .indexOf(action.payload.filter) > -1
                            );
                        })
                    };
                } else if (action.payload.type === "date") {
                    return {
                        ...state,
                        sourceItems: state.sourceItems.filter(item => {
                            return (
                                item.date.indexOf(action.payload.filter) > -1
                            );
                        })
                    };
                }
            } else if (action.payload.filter === "") {
                return {
                    ...state,
                    sourceItems: [...state.tasks]
                };
            }
            break;

        default:
            return state;
    }
}
