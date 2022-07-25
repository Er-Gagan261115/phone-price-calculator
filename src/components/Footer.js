import React from 'react'

export default function Footer(props) {
  return (
    <div className='row fixed-bottom d-flex justify-content-center'>
      <button type="button" class="btn btn-primary col-3 " onClick={props.reset} style={{marginRight: "10px",
    marginBottom:"10px"}}>Reset</button>
      
      <button type="button" class="btn btn-primary col-3" style={{marginLeft: "10px",marginBottom:"10px"}} >Total ={props.TotalPrice} {props.totalprice} </button>

    </div>
  )
}
