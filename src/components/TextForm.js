import React, {useState} from 'react'

export default function TextForm(props) {
  const [text,setText] = useState("Enter your text here...");
  const upperHandleOnClick = () =>{
    // console.log("HandleOnClick was fired");
    const newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Upper Case","success");

    
  }
  const lowerHandleOnClick = () =>{
    // console.log("HandleOnClick was fired");
    const newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lower Case","success");
  }
  const reverseClick = () =>{
    const reversed = text.split('').reverse().join('');
    setText(reversed);  
    props.showAlert("Text has been Reversed","success");

  }
  const clearText = () =>{
    setText("");
    props.showAlert("Cleared Text","success");

  }
  const handleOnChange = (event) => {
    console.log("HandleOnChage was fired");
    setText(event.target.value);
  }

  

  return (
    <>
      <div className='container my-4' style={{color:props.mode === 'dark'?'white':'#051d40'}}>
        <h1 style={{color:props.mode === 'dark'?'white':'#051d40'}}>{props.heading}</h1>
        <div className="mb-3">
          <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode === 'dark'?'#051d40':'white', color:props.mode === 'dark'?'white':'#051d40'}} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-2 my-1" onClick={upperHandleOnClick} >Convert to Uppercase</button>
        <button className="btn btn-primary mx-2 my-1" onClick={lowerHandleOnClick}>Convert to Lowercase</button>
        <button className="btn btn-primary mx-2 my-1" onClick={reverseClick}>Reverse Text</button>
        <button className="btn btn-primary mx-2 my-1" onClick={clearText}>Clear</button>
      </div>

      <div className="container my-3" style={{color:props.mode === 'dark'?'white':'#051d40'}}>
        <h2>Your Text-Summary</h2>
        <p>{text.split(" ").filter((element)=>{return element.length!=0}).length} words, and {text.length} characters</p>
        <p>{0.008 * (text.split(" ").length)} minutes read</p>
        <p>{text.length> 0 ? text: 'Enter some Text to Preview here!'}</p>
      </div>
    </>
  )
}
