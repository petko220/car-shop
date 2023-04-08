import { useContext } from "react";
import { Link } from "react-router-dom";

import { AuthContext } from "../../contexts/AuthContext";
import { useForm } from "../../hooks/useForm";

import styles from './Login.module.css';

export const Login = () => {
  const { onLoginSubmit } = useContext(AuthContext);
  const {values, changeHandler, onSubmit} = useForm({
    email: '',
    password: '',
  }, onLoginSubmit);

  return (
    <>
      {/* Created By CodingLab - www.codinglabweb.com */}
      {/* <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" /> */}
      {/* <title>Login Form | CodingLab</title> */}
      {/* <link rel="stylesheet" href="css/login-style.css" /> */}
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css"
      />
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.title}>
            <span>Login</span>
          </div>
          <form action="#" onSubmit={onSubmit}>
            <div className={styles.row}>
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
            <div className={styles.row}>
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

            <div className={styles.button + ' ' + styles.row}>
              <input 
              type="submit"
              
              />
            </div>
            <div className={styles.signupLink}>
              Not a member? <Link to={'/register'}>Signup now</Link>
            </div>
          </form>
        </div>
      </div>
    </>



  );
}