import { useContext } from 'react';
import { Link } from 'react-router-dom'

import { AuthContext } from '../../contexts/AuthContext';

export const Header = () => {
  const { isAuthenticated, email } = useContext(AuthContext);

  return (
    <>
      {/* header */}
      <header>
        {/* header inner */}
        <div className="header">
          <div className="container-fluid">
            <div className="row">
              <div className="col-xl-3 col-lg-3 col-md-3 col-sm-3 col logo_section">
                <div className="full">
                  <div className="center-desk">
                    <div className="logo">
                      <Link to="/">
                        <img src="images/logo.png" alt="#" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-9 col-lg-9 col-md-9 col-sm-9">
                <nav className="navigation navbar navbar-expand-md navbar-dark ">
                  <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarsExample04"
                    aria-controls="navbarsExample04"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <span className="navbar-toggler-icon" />
                  </button>
                  <div className="collapse navbar-collapse" id="navbarsExample04">
                    <ul className="navbar-nav mr-auto">

                    {isAuthenticated && (
                    <li className="nav-item">
                        <Link className="nav-link" to="/">
                          {email}
                        </Link>
                      </li>
                      )} 

                      <li className="nav-item active">
                        <Link className="nav-link" to ="/">
                          {" "}
                          Home
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="/about">
                          About
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="/catalog">
                          Catalog
                        </Link>
                      </li>


                      {isAuthenticated && (
                      <li className="nav-item">
                        <Link className="nav-link" to="/create-car-ad">
                          Sell your car
                        </Link>
                      </li>
                      )}

                      {isAuthenticated && (
                      <li className="nav-item">
                        <Link className="nav-link" to="/logout">
                          Logout
                        </Link>
                      </li>
                      )}

                      {!isAuthenticated && (
                      <li className="nav-item">
                        <Link className="nav-link" to="/register">
                          Register
                        </Link>
                      </li>
                      )}

                      {!isAuthenticated && (
                      <li className="nav-item d_none">
                        <Link className="nav-link" to="/login">
                          <i
                            className="fa fa-user-circle padd_right"
                            aria-hidden="true"
                          />
                          Login
                        </Link>
                      </li>
                      )}
                      


                    </ul>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};