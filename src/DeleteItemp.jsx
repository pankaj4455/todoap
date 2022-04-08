import React from "react";


const DeleteItemp=(props)=>{
  
  return(
    <>
  <div className="div_1">

  
 <li>{props.text}
 <button className="btn" onClick={()=>{
      props.onSelect(props.id);
    }}>Delete</button>    
    </li>
    </div>
    
    </>
  )
}
export default DeleteItemp;