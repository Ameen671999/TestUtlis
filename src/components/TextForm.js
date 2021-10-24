import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Text is UpperCased", "success");
  };

  const handleOnchange = (event) => {
    setText(event.target.value);
    
  };

  const handleLowClick = () => {
    setText(text.toLowerCase());
    props.showAlert("Text is LowerCased", "success");
  };

  const handleClearClick = () => {
    setText("");
    props.showAlert("Text is cleared", "success");
  };

  const handleCaptilizeClick = () => {
    const arr = text.split(" ");
    for (let i = 0; i < arr.length; i++) {
      arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    }
    let str = arr.join(" ");
    setText(str);
    props.showAlert("Text is Captilized", "success");
  };

  const handleCopyClick = () => {
    navigator.clipboard.writeText(text);
    props.showAlert("Text is Copied", "success");
  };

  const handleSpaceClick = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Text spaces are removed", "success");
  };

  const [text, setText] = useState("");

  return (
    <>
      <div className="container" style = {{color: props.mode === 'dark' ? 'white' : 'black'}}>
        <div className="mb-3">
          <h1> {props.heading} </h1>
          <textarea
          style = {{backgroundColor: props.mode === 'dark' ? '#042743' : 'white',color: props.mode === 'dark' ? 'white' : 'black'}}
            className="form-control"
            value={text}
            onChange={handleOnchange}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <div className="container" >
          <button className="btn btn-primary mx-1 my-1" disabled={text.length === 0} onClick={handleUpClick}>
            Convert Uppercase
          </button>
          <button className="btn btn-primary mx-1 my-1" disabled={text.length === 0} onClick={handleLowClick}>
            Convert LowerCase
          </button>
          <button className="btn btn-primary mx-1 my-1" disabled={text.length === 0} onClick={handleClearClick}>
            Clear Text
          </button>
          <button
            className="btn btn-primary mx-1 my-1"
            disabled={text.length === 0}
            onClick={handleCaptilizeClick}
          >
            Captilized Text
          </button>
          <button className="btn btn-primary mx-1 my-1" disabled={text.length === 0} onClick={handleCopyClick}>
            Copy Text
          </button>
          <button className="btn btn-primary mx-1 my-1" disabled={text.length === 0} onClick={handleSpaceClick}>
            Remove Extra Spaces
          </button>
        </div>
      </div>
      <div className="container my-2" style = {{color: props.mode === 'dark' ? 'white' : 'black'}}>
        <h2> Your text</h2>
        <p>
          {text.split(/\s+/).filter((element)=>{
          return element.length!==0
        }).length} words and {text.length} characters
        </p>
        <p>Minutes to read {text.split(" ").filter((element)=>{
          return element.length!==0
        }).length * 0.008}</p>
        <h3>Preview</h3>
        <p> {text.length>0?text:"Enter something in text above"} </p>
      </div>
    </>
  );
}
