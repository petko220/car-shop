import { useParams } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import { useEffect } from "react";
import { useService } from "../../hooks/useService";
import { carServiceFactory } from "../../services/carService";

import styles from './Edit.module.css'

export const CarEdit = ({
    onCarEditSubmit,
}) => {
    const { carId } = useParams();
    const carService = useService(carServiceFactory);
    const {values, changeHandler, onSubmit, changeValues} = useForm({

        _id:  '',
        make: '',
        model: '',
        imageUrl: '',
        year: '',
        power: '',
        price: '',
        description: ''

    }, onCarEditSubmit);

    useEffect(() => {
        carService.getOne(carId)
            .then(result => {
                changeValues(result);
            });
    }, [carId]);

  return (
    <>
      <main>
        <div id={styles['form-main']}>
          <div id={styles['form-div']}>


            <form className="form" id="form1" onSubmit={onSubmit}>
              <p className="name">
                <input
                  value={values.make}
                  onChange={changeHandler}
                  name="make"
                  type="text"
                  className={styles['feedback-input']}
                  placeholder="Make"
                  id="name"
                />
              </p>

              <p className="name">
                <input
                  value={values.model}
                  onChange={changeHandler}
                  name="model"
                  type="text"
                  className={styles['feedback-input']}
                  placeholder="Model"
                  id="name"
                />
              </p>

              <p className="name">
                <input
                  value={values.imageUrl}
                  onChange={changeHandler}
                  name="imageUrl"
                  type="text"
                  className={styles['feedback-input']}
                  placeholder="Car image"
                  id="name"
                />
              </p>

              <p className="name">
                <input
                  value={values.year}
                  onChange={changeHandler}
                  name="year"
                  type="number"
                  className={styles['feedback-input']}
                  placeholder="Year"
                  id="name"
                />
              </p>

              <p className="name">
                <input
                  value={values.power}
                  onChange={changeHandler}
                  name="power"
                  type="number"
                  className={styles['feedback-input']}
                  placeholder="Power"
                  id="name"
                />
              </p>

              <p className="name">
                <input
                  value={values.price}
                  onChange={changeHandler}
                  name="price"
                  type="number"
                  className={styles['feedback-input']}
                  placeholder="Price"
                  id="name"
                />
              </p>

              <p className="text">
                <textarea
                  value={values.description}
                  onChange={changeHandler}
                  name="description"
                  className={styles['feedback-input']}
                  id="comment"
                  placeholder="Description"
                />
              </p>
              <div className="submit">
                <input type="submit" defaultValue="SEND" id={styles['button-blue']} />
                <div className="ease" />
              </div>
            </form>
          </div>
        </div>
      </main>

    </>


  );
}