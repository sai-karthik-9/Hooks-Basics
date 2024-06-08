import {React,useState,useEffect} from "react";

export default function UseEffect() {
    const[Age,newAge]=useState(0);
    const[sib,newSib]=useState(1);

    useEffect(()=>{
        alert(`Age changed ${Age}`)
    },[Age])

  return (
    <div className="useEffectContainer">
      <h1>PresentAge:{Age}</h1>
      <h1>Number of Sibling: {sib}</h1>
      <button onClick={()=>{newAge(Age+1)}}>Older</button>
      <button onClick={()=>{newSib(sib+1)}}>Sibling</button>
    </div>
  )
}
