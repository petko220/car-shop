import { useContext } from "react";
import { Link } from "react-router-dom";

import { useForm } from "../../hooks/useForm";
import { AuthContext } from "../../contexts/AuthContext";

export const Register = () => {
  const { onRegisterSubmit } = useContext(AuthContext);
  const { values, changeHandler, onSubmit } = useForm({
    email:'',
    password: '',
    repassword: ''
  }, onRegisterSubmit);

  return (
    <>
      {/* Created By CodingLab - www.codinglabweb.com */}
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      {/* <title>Login Form | CodingLab</title> */}
      <link rel="stylesheet" href="css/login-style.css" />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css"
      />
      <div className="container">
        <div className="wrapper">
          <div className="title">
            <span>Register Form</span>
          </div>
          <form action="#" method="POST" onSubmit={onSubmit}>
            <div className="row">
              <i className="fas fa-user" />
              <input 
              type="text" 
              name="email" 
              placeholder="Email" 
              required=""
              value={values.email}
              onChange={changeHandler}
              />
            </div>
            <div className="row">
              <i className="fas fa-lock" />
              <input 
              type="password" 
              name="password" 
              placeholder="Password" 
              required=""
              value={values.password}
              onChange={changeHandler} 
               />
            </div>

            <div className="row">
              <i className="fas fa-lock" />
              <input 
              type="repassword" 
              name="repassword" 
              placeholder="Repeat password" 
              required=""
              value={values.repassword}
              onChange={changeHandler} 
               />
            </div>

            <div className="row button">
              <input 
              type="submit" 
              defaultValue="Login" />
            </div>
            <div className="signup-link">
              Already a member? <Link to={'/login'}>Login here</Link>
            </div>
          </form>
        </div>
      </div>
    </>



  );
}