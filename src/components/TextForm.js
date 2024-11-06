import React, { useState } from 'react'

export default function TextForm({ heading = "Set Heading Here", showAlert}) {

    const [text, SetText] = useState('');

    const handleUpClicked = () => {
        //console.log("Upper case button clicked " + text);
        let newText = text.toUpperCase();
        SetText(newText);
        showAlert("Converted to uppercase!", "success");
    };

    const handleLoClicked = () => {
        let newText = text.toLowerCase();
        SetText(newText);
        showAlert("Converted to lowercase!", "success");
    };

    const countWords = () => {
        return text.trim() ? text.trim().split(/\s+/).length : 0;
    };

    const handleCopy = () => {
        var text = document.getElementById('myBox');
        text.select();
        navigator.clipboard.writeText(text.value);
        document.getSelection().removeAllRanges();
        showAlert("Text copied to clipboard!", "success");
    }

    function handleOnChange(event) {
        SetText(event.target.value);
    }

  return (
    <>
    <div className='container'>
        <div className="mb-3">
            <label htmlFor="myBox" className="form-label" style={{textTransform: 'capitalize'}}>{ heading }</label>
            <textarea className="form-control" id="myBox" value={text} rows="8" onChange={handleOnChange}></textarea>
        </div>
        <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleUpClicked}>Convert To Uppercase</button>
        <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleLoClicked}>Convert To Lowercase</button>
        <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button>
    </div>
    <div className="container my-3">
        <h2>Your Text Summery</h2>
        <p>{countWords()} words and {text.length} characters</p>
        <p>{0.008 * countWords()} minutes required to read above content</p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text: "Nothing to preview"}</p>
    </div>
    </>
  )
}
