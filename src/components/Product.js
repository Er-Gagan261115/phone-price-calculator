import React from "react";

export default function Product(props) {
  console.log(props.product.Price)
  return (
    <div
      className="container my-3 position-relative"
      style={{ backgroundColor: "lightblue" }}
    >
      <div className="row">
        <div className="col-5 ">
          <h3 className="d-flex align-items-center justify-content-center">
            {props.product.Brand}
            <span className="badge badge-secondary bg-dark mx-5 ">
              {props.product.Price}/-
            </span>
          </h3>
        </div>

        <div
          class="btn-group col-2 d-flex align-items-center "
          role="group"
          aria-label="Basic example"
        >
          <button type="button" className="btn btn-warning" onClick={()=>{props.decreaseprice(props.indexis)}}>
            -
          </button>
          <button type="button" className="btn btn-primary">
            {props.product.Quantity}
          </button>
          <button type="button" className="btn btn-warning" onClick={()=>{props.increaseprice(props.indexis)}} >
            +
          </button>
        </div>
        <div className="col-2 d-flex align-items-center justify-content-center ">
            {props.product.Quantity*props.product.Price}
        </div>
      <div className=" col-2">
      <button type="button" class="btn btn-dark " onClick={()=>{props.remove(props.indexis)}} style={{marginBottom:"10px"}}>REMOVE</button>
      </div>
      </div>

    </div>
  );
}
