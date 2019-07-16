export function addSingleItem(item) {
    return {
        type: "ADD_SINGLE_ITEM",
        payload: item
    };
}

export function deleteSingleItem(id) {
    return {
        type: "DELETE_SINGLE_ITEM",
        payload: id
    };
}

export function checkSingleItem(id) {
    return {
        type: "CHECK_SINGLE_ITEM",
        payload: id
    };
}

export function sortSingleItem(type) {
    return {
        type: "SORT_SINGLE_ITEM",
        payload: type
    };
}

export function filterSingleItem(filter, type) {
    return {
        type: "FILTER_SINGLE_ITEM",
        payload: {
            filter: filter,
            type: type
        }
    };
}
