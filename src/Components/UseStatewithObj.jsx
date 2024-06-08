import React, { useState } from "react";

export default function(){
    const[state,newState]=useState({Age:0,sib:1})
    const {Age,sib} = state;

    return(
        <div className="objContainer">
            <h1>Present Age:  {state.Age}</h1>
            <h1>Number of Sublings: {state.sib}</h1>
            <button onClick={()=>{newState({...state,Age:state.Age+1})}}>Older</button>
            <button onClick={()=>{newState({...state,sib:state.sib+1})}}>Sibling</button>
        </div>
    )
}