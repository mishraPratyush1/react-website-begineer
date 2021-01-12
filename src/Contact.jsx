import React, { useState } from "react";

const Contact = () =>{
  const [data,setData] = useState({
    name:'',
    email:'',
    password:'',
    number:'',
    message:''
  });
  const inputEvent = (event) =>{
      const {Name,val} = event.target;
      setData((preval)=>{
        return{
          ...preval,[Name]:val,
        }
      })
  }
  const formSubmit = ()=>{

  }
return(
  <>
    <div className="my-5">
      <h1 className="display-1 text-center text-success">Contact Us</h1>
    </div>
    <div className="container">
        <div className="row">
              <div className="col-md-6 col-10 mx-auto">
              <form onSubmit={formSubmit}>
                  <div className="mb-3">
                    <label  className="form-label">Full Name</label>
                    <input type="text" className="form-control" value={data.name} 
                    onChange={inputEvent} name="name" />
                  </div>
                  <div className="mb-3">
                    <label  className="form-label">Email Address</label>
                    <input type="email" className="form-control" value={data.email} onChange={inputEvent} name="email" />
                  </div>
                  <div className="mb-3">
                    <label className="form-label" >password</label>
                    <input type="password" className="form-control" value={data.password} onChange={inputEvent} name="password" />
                  </div>
                  <div className="mb-3">
                    <label className="form-label" >Mobile Number</label>
                    <input type="number" className="form-control" value={data.phone} onChange={inputEvent} name="number"/>
                  </div>
                  
                  <div class="mb-3">
                    <label  class="form-label">Message</label>
                    <textarea class="form-control" value={data.message} 
                    onChange={inputEvent} name="message" rows="3"></textarea>
                </div>
                <div className="d-flex justify-content-center">
                   <button type="submit" className="btn btn-outline-danger">Submit</button>
                </div>
                </form>
              </div>
        </div>
    </div>
  </>
)
}
export default Contact;