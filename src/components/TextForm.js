import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    // console.log("UpperCase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
  };

  const handleOnchange = (event) => {
    // console.log("On change");
    setText(event.target.value);
  };

  const handleLowClick = () => {
    setText(text.toLowerCase());
  };

  const handleClearClick = () => {
    setText("");
  };

  const handleCaptilizeClick = () => {
    const arr = text.split(" ");
    for (let i = 0; i < arr.length; i++) {
      arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    }
    let str = arr.join(" ");
    setText(str);
  };

  const [text, setText] = useState("");

  return (
    <>
      <div className="container">
        <div className="mb-3">
          <h1> {props.heading} </h1>
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnchange}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>
          Convert Uppercase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleLowClick}>
          Convert LowerCase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleClearClick}>
          Clear Text
        </button>
        <button className="btn btn-primary mx-2" onClick={handleCaptilizeClick}>
          Captilized Text
        </button>
      </div>
      <div className="container my-2">
        <h2> Your text</h2>
        <p>
          {text.split(" ").length} words, {text.length} characters
        </p>
        <p>Minutes to read {text.split(" ").length * 0.008}</p>
        <h3>Preview</h3>
        <p> {text} </p>
      </div>
    </>
  );
}
