import React from 'react' ;

function About () 
{
    return ( 
         <div className="container">
            <form >
  <div className="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" placeholder = "entrez l'émail" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div className="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1"/>
  </div>
  <div className="form-group form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
    <label className="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
  </form>
  <p style= {{backgroundColor :"Blue" }}> Mail Verification</p>
  </div>
    ) 
   
}
export default About ;