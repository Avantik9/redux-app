import { combineReducers } from "redux";

const counterReducer = (state = 0 , action )=>{
    switch (action.type) {
        case "INCREMENT": return state + 1;
        case "DECREMENT": return state - 1;
        case "RESET": return state = 0 ;  
        case "INCREMENTBYVALUE": return state + 5;
            
        default: return state;
    }
}

const greetReducer = () =>{
    return "Hello World"
}

const reducers = combineReducers({
    count : counterReducer,
    greetings : greetReducer
})

export default reducers 