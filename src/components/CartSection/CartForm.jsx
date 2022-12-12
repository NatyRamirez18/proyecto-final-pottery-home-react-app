import { useState } from "react";
import React from 'react'
import ButtonAll from "../ButtonAll/ButtonAll";




export default function CartForm(props) {
    const [data, setData] = useState({
        name:"",
        email:"",
        phone:""

    })

    function onInputChange(evt){
        let nameInput= evt.target.name;
        let value= evt.target.value;

        let newData= {...data}
        newData[nameInput]=value;

        setData(newData) 

    }

    function onSubmit(evt){
        evt.preventDefault();
        props.onSubmit(evt, data);


    }

    

  return (

    <form className="" onSubmit={onSubmit}>

    <div style={{display: "flex", marginBottom:8 }}>
    <label htmlFor="name" style={{width: 100, marginRight: 4}}> <span>Name </span> </label>
    <input value={data.name} name= "name" type="text" onChange={onInputChange} required />
    </div>

    <div style={{display: "flex", marginBottom:8 }}>
    <label htmlFor="email" style={{width: 100, marginRight: 4}}><span>E-mail </span> </label>
    <input value={data.email} name= "email" type="email" onChange={onInputChange} required/>
    </div>
    


    <div style={{display: "flex", marginBottom:8 }}>
    <label htmlFor="phone" style={{width: 100, marginRight: 4}}><span>Phone </span></label>
    <input value={data.phone} name= "phone" type="phone" onChange={onInputChange} required/>
    <br/>
    
    </div>
    


    <button className="my-3 rounded" type="submit" disabled={data.name === "" || data.phone === "" || data.email === ""} onTouchButton={(evt)=>props.onSubmit(evt, data)  }  > Purchase </button>
  





    </form>
 
   
  );
}

