var redux = require('redux');
var mangReduce = require('./mang.js');
var isAddingReducer = require('./isAdding.js');

var reducer = redux.combineReducers({
    mang: mangReduce,
    isAdding: isAddingReducer
});

module.exports = reducer;
