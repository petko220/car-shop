import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <>
      <section className="banner_main">
        <div id="banner1" className="carousel slide" data-ride="carousel">
          <ol className="carousel-indicators">
            <li data-target="#banner1" data-slide-to={0} className="active" />
            <li data-target="#banner1" data-slide-to={1} />
            <li data-target="#banner1" data-slide-to={2} />
          </ol>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="container-fluid">
                <div className="carousel-caption">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="text-bg">
                        <h1>Welcome</h1>
                        <span>Used cars for great prices!</span>
                        <p>
                          It is a long established fact that a reader will be
                          distracted by the readable content of a page when looking
                          at its layout. The point of using Lorem Ipsum is that it
                          has a more-or-less normal distribution of letters,{" "}
                        </p>
                        <Link to={'/about'}>More Info </Link> <Link to={'/catalog'}>Catalog</Link>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="text_img">
                        <figure>
                          <img src="images/car.png" alt="#" />
                        </figure>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="container-fluid">
                <div className="carousel-caption">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="text-bg">
                        <h1>Not a member yet?</h1>
                        <span>Use the button below to create your new account</span>
                   
                        <Link to={'/register'}>Register here!</Link>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="text_img">
                        <figure>
                          <img src="images/car.png" alt="#" />
                        </figure>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="container-fluid">
                <div className="carousel-caption">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="text-bg">
                        <h1>Welcome</h1>
                        <span>car repair services</span>
                        <p>
                          It is a long established fact that a reader will be
                          distracted by the readable content of a page when looking
                          at its layout. The point of using Lorem Ipsum is that it
                          has a more-or-less normal distribution of letters,{" "}
                        </p>
                        <a href="#">More Info </a> <a href="#">Contact Us</a>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="text_img">
                        <figure>
                          <img src="images/car.png" alt="#" />
                        </figure>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <a
            className="carousel-control-prev"
            href="#banner1"
            role="button"
            data-slide="prev"
          >
            <i className="fa fa-chevron-left" aria-hidden="true" />
          </a>
          <a
            className="carousel-control-next"
            href="#banner1"
            role="button"
            data-slide="next"
          >
            <i className="fa fa-chevron-right" aria-hidden="true" />
          </a>
        </div>
      </section>
    </>
  );
};