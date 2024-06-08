import {React, useState } from "react";

export default function StatefromFunction() {
    const [Age, setAge]=useState(0);
    const [sib,newsib]=useState(1);

    return(
        <div className="functionContainer">
            <h1>Present Age: {Age}</h1>
            <h1>Number of Siblings: {sib}</h1>
            <button onClick={()=>{setAge(Age+1)}}>Older</button>
            <button onClick={()=>{newsib(sib+1)}}>Sibling</button>
        </div>
    )
}
