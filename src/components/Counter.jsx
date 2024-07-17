import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrementAction, incrementAction, incrementByValueAction, resetAction } from '../actions';

function Counter(props) {
    const {count , greetings} = useSelector((state)=>state)
    const dispatch = useDispatch()
    return (
        <div>
            <h1>{greetings}</h1>
            <h2>{count}</h2>
            <button onClick={()=>{ dispatch(incrementAction()) }}>Increment</button>
            <button onClick={()=>{ dispatch(decrementAction()) }}>Decrement</button>
            <button onClick={()=>{ dispatch(resetAction()) }}>Reset</button>
            <button onClick={()=>{ dispatch(incrementByValueAction(10)) }}>Increment by value</button>
        </div>
    );
}

export default Counter;