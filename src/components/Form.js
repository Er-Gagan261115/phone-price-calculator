import React from "react";

export default class Form extends React.Component {
    constructor(props){
        super(props);
        this.state ={
            productname:"",
            productprice:''
        }
    }
  render() {
    return (
      <div className="container my-4">
        <form className="row" onSubmit={(e)=>{
            e.preventDefault();
            this.props.add(this.state.productname,Number(this.state.productprice))}}>
          <div className="form-group col-4">
            <label htmlFor="Brans-Name">Name</label>
            <input
              type="name"
              className="form-control"
              id="Brans-Name"
              aria-describedby="emailHelp"
              placeholder="Enter Name"
              name="productname"
              
              onChange={(e)=>{
                this.setState({productname:e.currentTarget.value})}}
              value={this.state.productname}

            />
           
          </div>
          <div className="form-group col-4">
            <label htmlFor="new-number">Price</label>
            <input
              type="number"
              className="form-control"
              id="new-number"
              placeholder="Price"
              name="productprice"
              onChange={(e)=>{this.setState({productprice: e.currentTarget.value})}}
              value={this.state.productprice}
            />
          </div>

          <button type="submit" className="btn btn-primary  col-2  "  >
            Add
          </button>
        </form>
      </div>
    );
  }
}
