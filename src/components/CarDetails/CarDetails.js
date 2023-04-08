import { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { useService } from "../../hooks/useService";
import {carServiceFactory }from '../../services/carService';
import { AuthContext } from "../../contexts/AuthContext";
import { useContext } from "react";

import styles from './Details.module.css'

export let modified = '';

export const CarDetails = ({onDelete}) => {

  const {userId} = useContext(AuthContext);
  const {carId} = useParams();
  const[car, setCar] = useState({});
  const carService = useService(carServiceFactory);
  const navigate = useNavigate();

  useEffect(() => {
    carService.getOne(carId)
      .then(result => {
        setCar(result);
      });
  },[carId])

  const onDeleteClick = async () => {

    if (window.confirm('are you sure?') == true){
      try {
        await carService.delete(car._id);
        modified = await carService.getAll();
        onDelete();
        navigate('/catalog');
      } catch (error) {
        
      }

    }

    
  }

  return (

    <>

      <div className="container">
        <div className="row m-0">
          <div className="col-lg-7 pb-5 pe-lg-5">
            <div className="row">
              <div className="col-12 p-5">
                <img
                  src={car.imageUrl}
                  alt=""
                />
              </div>
              <div className="row m-0 bg-light">
                <div className="col-md-4 col-6 ps-30 pe-0 my-4">
                  <p className="text-muted">Make</p>
                  <p className="h5">
                    {car.make}<span className="ps-1"></span>
                  </p>
                </div>
                <div className="col-md-4 col-6  ps-30 my-4">
                  <p className="text-muted">Model</p>
                  <p className="h5 m-0">{car.model}</p>
                </div>
                <div className="col-md-4 col-6 ps-30 my-4">
                  <p className="text-muted">Year</p>
                  <p className="h5 m-0">{car.year}</p>
                </div>
                <div className="col-md-4 col-6 ps-30 my-4">
                  <p className="text-muted">Body</p>
                  <p className="h5 m-0">Coupe</p>
                </div>
                <div className="col-md-4 col-6 ps-30 my-4">
                  <p className="text-muted">Color</p>
                  <p className="h5 m-0">White</p>
                </div>
                <div className="col-md-4 col-6 ps-30 my-4">
                  <p className="text-muted">Daily UI</p>
                  <p className="h5 m-0">#002</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-5 p-0 ps-lg-4">
            <div className="row m-0">
              <div className="col-12 px-4">
                <div className="d-flex align-items-end mt-4 mb-2">
                  <p className="h4 m-0">
                    <span className="pe-1">{car.make} {car.model}</span>
           
                  </p>
                 
                </div>

                <div className="d-flex justify-content-between mb-2">
                  <p className="textmuted">Without tax</p>
                  <p className="fs-14 fw-bold">
                    <span className="fas fa-dollar-sign pe-1" />
                    {Number(car.price).toFixed(2)}
                  </p>
                </div>

                <div className="d-flex justify-content-between mb-2">
                  <p className="textmuted">Tax</p>
                  <p className="fs-14 fw-bold">
                    <span className="fas fa-dollar-sign px-1" />
                    {(Number(car.price) * 0.20).toFixed(2)}
                  </p>
                </div>
                <div className="d-flex justify-content-between mb-3">
                  <p className="textmuted fw-bold">Total</p>
                  <div className="d-flex align-text-top ">
                    <span className="fas fa-dollar-sign mt-1 pe-1 fs-14 " />
                    <span className="h4">{(Number(car.price) * 1.2).toFixed(2)}</span>
                  </div>
                </div>
              </div>
              <div className="col-12 px-0">
                <div className="row bg-light m-0">
                  <div className="col-12 px-4 my-4">
                    <p className="fw-bold">{car.description}</p>
                  </div>
                  <div className="col-12 px-4">
                    <div className="d-flex  mb-4">
                      <span className="">

                      </span>
                      <div className=" w-100 d-flex flex-column align-items-end">

                      </div>
                    </div>
                    <div className="d-flex mb-5">
                      <span className="me-5">

                      </span>
                      <div className="w-100 d-flex flex-column align-items-end">

                      </div>
                    </div>
                  </div>
                </div>
                <div className="row m-0">
                  <div className="col-12  mb-4 p-0">

                    {car._ownerId === userId && (
                    <Link to={`/catalog/edit/${carId}`} className="btn btn-primary">
                      Edit
                      <span className="fas ps-2" />
                    </Link>
                    )}
                     {car._ownerId === userId && (
                    <button className="btn btn-primary" onClick={onDeleteClick}>
                      Delete
                      <span className="fas ps-2" />
                    </button>
                     )}

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>

  )
}