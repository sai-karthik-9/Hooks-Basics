import React, { useState } from "react";

export default function UseState(){
    const [Age,setAge]=useState(0);
    return(
        <div className="useStateContainer">
            <h1>PresentAge: {Age}</h1>
            <button onClick={()=>{setAge(Age+1)}}>OLDER</button>
        </div>
    )
}