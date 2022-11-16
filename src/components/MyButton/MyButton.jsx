/* eslint-disable no-unused-vars */
import "./MyButton.css";
import React, {useState} from "react";




function MyButton (props){

    let [colorBtn, setColorBtn] = useState("props.color");
    

    function handleClick(){

    
        setColorBtn ("lightblue");
    }

    return (
    <button 
    onClick={handleClick} 
    style= {{backgroundColor: colorBtn}} 
    className="rounded btnWarning">

    {'Ver más'}
     </button>
    );
}

export default MyButton;