import React, {useState} from 'react'



export default function TextForm(props) {
    const handleUpClick =()=>{
        // console.log("Uppercase was clicked" + text);
        let newText= text.toUpperCase();
        setText(newText);
        props.showAlert("converted to Uppercase", "success");
    }

    const handleloClick =()=>{
        
        let newText= text.toLowerCase();
        setText(newText);
        props.showAlert("converted to Lowercase", "success");
    }

    const handleClearClick =()=>{
        
        let newText= "";
        setText(newText);
    }

    const handleOnChange =(event)=>{
        console.log("On Change");
        setText(event.target.value);
    }

    const [text, setText]= useState('');
  return (
    <>
    <div className="container" style={{ color: props.mode === "dark" ? "white" : "#151e39fc" }}>
           <h1 >{props.heading}</h1>
           <div className="mb-3">
           <textarea className="form-control" value={text} onChange={handleOnChange} style={{ backgroundColor: props.mode === "dark" ? "grey" : "white", color: props.mode === "dark" ? "white" : "#151e39fc"}} id="mybox" rows="8"></textarea>
           </div>
           <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
           <button className="btn btn-primary mx-1" onClick={handleloClick}>Convert to Lowercase</button>
           <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear</button>
    </div>

    <div className="container" style={{ color: props.mode === "dark" ? "white" : "#151e39fc" }}>
            <h1>Your text summary</h1>
            <p>{text.split(" ").length} words and {text.length} characters</p>
            <p>{0.008 * text.split(" ").length} Minutes read </p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Enter something in the textbox above to preview it here"}</p>
    </div>
    </>
  )
}
