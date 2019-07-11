import React from 'react'
 

function Button(props)
{
  let classname="col-md-"+props.size
  return <div className={classname}>
            <button value={props.text} 
                className="btn btn-w-m btn-primary" 
                style={{width:'100%', minWidth: 'unset'}} 
                onClick={props.ButtonClick}>{props.text}
            </button>
        </div> 
}

export default Button