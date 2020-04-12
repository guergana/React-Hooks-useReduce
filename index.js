import React from 'react';
import { render } from 'react-dom';
import './style.css';

function App() {

  const reducer = (state,action) => {
    //we are not using the payload
    switch(action.type){
      case 'ADD':
        return state +1;
      case 'SUBSTRACT':
        return state -1;
      case 'RESET':
        return state = 0;
      default: 
        return state;
    }

    return state;
  };

  const [count, dispatch] = React.useReducer(reducer, 0);
  return <>
    <div>{count}</div>
    <button onClick={()=> dispatch({type:'ADD', payload: 0})}>+</button>
    <button onClick={()=> dispatch({type:'SUBSTRACT', payload: 0})}>-</button>
    <button onClick={()=> dispatch({type: 'RESET', payload: 0})}>reset</button>
    </>
}

render(<App />, document.getElementById('root'));
