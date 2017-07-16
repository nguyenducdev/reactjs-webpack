var redux = require('redux');

var defaulSate = {mang: ['andoir', 'ios', 'nodejs'], isAdding: false};

var reducer = (state = defaulSate, action) => {
    switch(action.type){
        case 'TOGGLE_IS_ADDING': 
            return {...state, isAdding: !state.isAdding}
            break;
        case 'ADD_ITEM' : 
            return {...state, mang: [...state.mang, action.item]}
            break;
        case 'DEL_ITEM' :
            return {...state, mang: state.mang.filter((e, i)=> i != action.index)}
            break;
        default:  return state;
    }

}

var store = redux.createStore(reducer);

console.log(store.getState());

store.dispatch({type: 'TOGGLE_IS_ADDING'});

console.log(store.getState());

store.dispatch({type: 'ADD_ITEM', item: 'unity'});

console.log(store.getState());

store.dispatch({type: 'DEL_ITEM', index: 3});

console.log(store.getState());