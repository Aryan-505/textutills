import React, { useState } from 'react'

export default function Textform(props) { 
  const upper=()=>{
    console.log("up clicked");
    let n=text.toUpperCase();
    setText(n);
  }
  const lower=()=>{
    console.log("Low clicked");
    let n=text.toLowerCase();
    setText(n);
  }
  const clear=()=>{
    console.log("up clicked");
    setText("");
  }
  const handleOnChange=(event)=>{
    setText(event.target.value)
  }
  const copy=()=>{
    console.log("i am copy");
    let text=document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value)
  }
  const extraSpaces=()=>{
    let newText=text.split(/[ ]+/);
    setText(newText.join(" "));
  }
  const [text,setText]=useState('');
  // let styles={
  //   color: 'white',
  //   backgroundColor: 'black'
  // }
  return (
    <>
    <div className="container"style={{color:props.mode==='light'?'black':'white'}} >
         <h1>{props.heading}</h1>
  <div className="mb-3" >
    <textarea className="form-control" id="myBox" value={text} style={{backgroundColor:props.mode==='dark'?'rgb(6 11 68)':'white',color:props.mode==='dark'?'white':'black'}} onChange={handleOnChange} rows="8"></textarea>
    </div>
<button className="btn btn-primary mx-2 my-2 " onClick={upper}>Uppercase</button>
<button className="btn btn-primary mx-2 my-2" onClick={lower}>Lowercase</button>
<button className="btn btn-primary mx-2 my-2" onClick={clear}>Clear</button>
<button className="btn btn-primary mx-2 my-2" onClick={copy}>Copy Text</button>
<button className="btn btn-primary mx-2 my-2" onClick={extraSpaces}>Remove Extra spaces</button>
    </div>
    <div className="container" style={{color:props.mode==='light'?'black':'white'}}>
      <h1>Your Text Summary</h1>
      <p>{text.split(/\s+/).filter((e)=>{return e.length!==0}).length} words and {text.length} characters (including blank spaces)</p>
      <p>{text.split(/\s+/).filter((e)=>{return e.length!==0}).length*0.08} minutes read</p>
      <h2>Preview</h2>
      <p>{text}</p>
    </div>
    </>
  )
}
