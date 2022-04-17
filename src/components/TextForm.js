import React, {useState} from 'react'

const TextForm = (props) => {

  const handleUpClick = () => {
    // console.log('up button clicked' + text);
    let newText = text.toUpperCase();
    setText(newText);
  }

  const handleLowClick = () => {
    // console.log('up button clicked' + text);
    let newText = text.toLowerCase();
    setText(newText);
  }

  const handleOnChange = (event) => {
    // console.log('handleOnChange button clicked');
    setText(event.target.value);
  }
  const [text, setText] = useState('');

  return (
    <>
      <div className='container'>
        <h1>{props.heading}</h1>
        <div className='mb-3'>
            <textarea className="form-control"  value = {text} onChange={handleOnChange} id="myBox" rows="3"></textarea>
        </div>
        <button className='btn btn-primary mx-2' onClick={handleUpClick}>Convert to UpperCase</button>
        <button className='btn btn-primary mx-2' onClick={handleLowClick}>Convert to LowerCase</button>
      </div>      
      <div className='container my-3'>
        <h2>Your Text</h2>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} Minutes Read</p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  )
}

export default TextForm
