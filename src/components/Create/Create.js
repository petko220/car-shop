import { useState } from "react";
import { useForm } from "../../hooks/useForm";

export const CreateCarAd = ({
  onCreateCarSubmit,
}) => {
  const { values, changeHandler, onSubmit } = useForm({
    make: '',
    model: '',
    imageUrl: '',
    year: '',
    power: '',
    price: '',
    description: ''

  }, onCreateCarSubmit);


  return (
    <>
      <main>
        <link rel="stylesheet" href="css/create-form.css" />
        <div id="form-main">
          <div id="form-div">


            <form className="form" id="form1" onSubmit={onSubmit}>
              <p className="name">
                <input
                  value={values.make}
                  onChange={changeHandler}
                  name="make"
                  type="text"
                  className="validate[required,custom[onlyLetter],length[0,100]] feedback-input"
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
                  className="validate[required,custom[onlyLetter],length[0,100]] feedback-input"
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
                  className="validate[required,custom[onlyLetter],length[0,100]] feedback-input"
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
                  className="validate[required,custom[onlyLetter],length[0,100]] feedback-input"
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
                  className="validate[required,custom[onlyLetter],length[0,100]] feedback-input"
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
                  className="validate[required,custom[onlyLetter],length[0,100]] feedback-input"
                  placeholder="Price"
                  id="name"
                />
              </p>

              <p className="text">
                <textarea
                  value={values.description}
                  onChange={changeHandler}
                  name="description"
                  className="validate[required,length[6,300]] feedback-input"
                  id="comment"
                  placeholder="Description"
                />
              </p>
              <div className="submit">
                <input type="submit" defaultValue="SEND" id="button-blue" />
                <div className="ease" />
              </div>
            </form>
          </div>
        </div>
      </main>

    </>


  );
}