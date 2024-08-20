import { useState } from "react";
import React from "react";
import PropTypes from "prop-types";

export default function Textform(props) {
const [text, setText] = useState("");
  
const handleClickUp = () => {
    const newT = text.toUpperCase();
    setText(newT);
  };
  
const handleClickLow = () => {
    const newT = text.toLowerCase();
    setText(newT);
  };

  const handleOnChange = (e) => {
    setText(e.target.value)
  };


  return (
    <>
      <div>
        <h3>{props.heading}</h3>
        <form>
          <div className="form-group">
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="8"
              onChange={handleOnChange}
              value={text}

              style={{backgroundColor : props.mode==='light'?'white':'#305362', color: props.mode==='light'?'black':'white' }}
            ></textarea>
          </div>
          <button
            type="button"
            className="btn btn-primary mx-1 my-2"
            onClick={handleClickUp}
          >
            Convert To UpperCase
          </button>
          <button
            type="button"
            className="btn btn-primary mx-1 my-2"
            onClick={handleClickLow}
          >
            Convert To UpperCase
          </button>
        </form>
      </div>
      <div className="container my-3">
        {text.split(" ").filter((element)=>{
          if(element.length===0){
            return false;
          }
          else{
            return true;
          }
        }).length} Words {text.length} Characters.
        <br/>
        {0.008 * text.split(" ").filter((element)=>{
          if(element.length===0){
            return false;
          }
          else{
            return true;
          }
        }).length} Minutes Read
      </div>
    </>
  );
}

Textform.propTypes = {
  heading: PropTypes.string,
};

Textform.defaultProps = {
  heading: "Enter your text below",
};
