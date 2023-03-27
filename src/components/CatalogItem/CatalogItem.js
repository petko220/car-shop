import { Link } from "react-router-dom";

export const CatalogItem = ({
  _id,
  make,
  model,
  price,
  imageUrl
}) => {
  return (
    <>
    <div className="col-md-6 margin_bottom">
      <div className="work">
        <figure>
          
          <img src={imageUrl} alt="#" />
          
        </figure>
      </div>
      <div className="work_text">
        <h3>
          {make} {model}
          <Link to={`/catalog/${_id}`}>Details</Link>
          <br />
          <span className="blu">{price} US</span>
        </h3>
      </div>
    </div>
    </>
 

  );
};