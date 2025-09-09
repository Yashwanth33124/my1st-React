import React, { useReducer } from 'react';

const initialState = {
    showTextFlag:false,
    changetextStylesFlag: false
}

const HIDE_TEXT  = 'HIDE_TEXT'
const SHOW_TEXT = 'SHOW_TEXT'
const CHANGE_TEXT_STYLE = 'CHANGE_TEXT_STYLE'

function reducer(state,action) {
    switch (action.type) {
        case 'HIDE_TEXT':
              console.log(state,action);
              
            return state
        case 'SHOW_TEXT':
            return state
        case 'CHANGE_TEXT_STYLE':
            return state
          
    
        default:
          
    }
}

export default function Reducer() {
    const[state , dispatch] = useReducer(Reducer,initialState)
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",   
        alignItems: "center",      
        justifyContent: "center",
        gap: "20px",
        fontSize: "20px"
      }}
    >
      <h3>use Reducer Hook example</h3>

      <div style={{ display: "flex", gap: "10px" }}>
        <button  onClick={() => dispatch({ type: HIDE_TEXT})}> Hide text</button>
        <button onClick={() => dispatch({ type: SHOW_TEXT})}> Show text</button>
        <button onClick={() => dispatch({ type: CHANGE_TEXT_STYLE})}>Change text styles</button>
      </div>
    </div>
  );
}
