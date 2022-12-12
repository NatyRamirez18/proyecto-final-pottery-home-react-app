
import "./ButtonAll.css";





function ButtonAll (props){

    
    

     return (
    <button 
    disabled={props.disabled}
    onClick={props.onTouchButton}
    className="button rounded" 
    >
    {props.children}
     </button>
    );
}

export default ButtonAll;