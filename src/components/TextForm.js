import React, {useState} from 'react'

const TextForm = (props) => {
  const handleUpClick = () => {
    console.log('up button clicked' + text);
    let newText = text.toUpperCase();
    setText(newText);
  }
  const handleOnChange = (event) => {
    console.log('handleOnChange button clicked');
    setText(event.target.value);
  }
  const [text, setText] = useState('Enter text');

  return (
    <>
      <div>
        <h1>{props.heading}</h1>
        <div className='mb-3'>
            <textarea className="form-control"  value = {text} onChange={handleOnChange} id="myBox" rows="3"></textarea>
        </div>
        <button className='btn btn-primary' onClick={handleUpClick}>Convert to UpperCase</button>
      </div>      
    </>
  )
}

export default TextForm
