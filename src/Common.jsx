import React from "react";
import { NavLink } from "react-router-dom";


const Common = (props) =>{
return(
  <>
    <section id="header" className="section">
    <div className="container-fluid">
      <div className="row">
        <div className="col-10 mx-auto">
      <div className="row">
          <div className="col-md-6 pt-5 pt-lg-0 order-2   order-lg-1 ">
              
              <h1> {props.name} <strong className="brand">Pratyush</strong></h1>
         
              <h2 className="my-3">
                  We are the team of talented developers making Websites
              </h2>
              <div className="mt-3">
                    <NavLink to={props.visit} className="btn btn-success start">{props.btnName}</NavLink>
              </div>
          </div>
          <div className="col-lg-6 order-1 order-lg-2 header-img">
            <img src={props.imgscr} alt="pic" className="img-fluid animated"/>
          </div>
          </div>
        </div>
      </div>
    </div>
    </section>
  </>
)
}
export default Common;