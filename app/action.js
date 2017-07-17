function addItem(item) {
    return { type: 'ADD_ITEM', item }
}

function removeItem(index) {
    return { type: 'DEL_ITEM', index }
}

module.exports = { addItem, removeItem };