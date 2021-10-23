import React, { useState } from "react";

export default function TextForm(props) {


  const handleUpClick = () => {
    // console.log("UpperCase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
  }

  const handleOnchange = (event) => {
    // console.log("On change");
    setText(event.target.value)
  }
  const [text, setText] = useState("Enter Text here");
  
  return (
    <div>
      <div className="mb-3">
        <h1> {props.heading} </h1>
        <textarea className="form-control" value={text}
        onChange={handleOnchange} id="myBox" rows="8" ></textarea>
      </div>
      <button className="btn btn-primary"
      onClick={handleUpClick} >Convert Uppercase</button>
    </div>
  );
}
