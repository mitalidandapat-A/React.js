import React, {useState} from 'react'


export default function TextForm(props) {
    const handleUpClick = ()=>{
        // console.log("Uppercase was clicked"+ text);//text = user value print
        let newtext = text.toUpperCase();
        setText(newtext);
    }
    const handleLowClick = ()=>{
        // console.log("Uppercase was clicked"+ text);//text = user value print
        let newtext = text.toLowerCase();
        setText(newtext);
    
    }
    const handleclClick = ()=>{
        // console.log("Uppercase was clicked"+ text);//text = user value print
        let newtext = '';
        setText(newtext);

    }
    const handleCopyClick = ()=>{
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);

    }
    const handleExtraSpaces = ()=>{
        let newtext = text.split(/[ ]+/);
        setText(newtext.join (" "));
    }
    const handleonChange = (event)=>{
        // console.log("on change");
        setText(event.target.value);//setText+value(user define value)
    }
    const[text,setText]= useState('');//blank thakle user input dite subidha hobe
// text = "new text";//Wrong way change the setText
// setText("new text");//correct way change the setText
  return (
    <>
      <div className="container my-2">
          <h1>{props.heading}</h1>
          <div className="mb-3">
          <textarea className="form-control" value={text} onChange={handleonChange} id="myBox" rows='8'></textarea>
          </div>
          <button  type="button" className="btn btn-info mx-1" onClick={handleUpClick}> Convert to uppercase </button>
          <button  type="button"className="btn btn-info mx-1" onClick={handleLowClick}> Convert to lowercase </button>
          <button  type="button"className="btn btn-info mx-1" onClick={handleclClick}> Clear Text </button>
          <button  type="button"className="btn btn-info mx-1" onClick={handleCopyClick}> Copy Text </button>
          <button  type="button"className="btn btn-info mx-1" onClick={ handleExtraSpaces}> Remove Extra Spaces</button>
      </div>
      <div className="container my-2">
        <h3> Your text summary</h3>
        <p> {text.split( " " ).length} words and {text.length}characters</p>
        <p> {0.008 * text.split( " " ).length } Minutes read </p>
        <h5>Preview</h5>
        <p>{text}</p>
      </div>
    </>
     )
}
