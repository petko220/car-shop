import { CatalogItem } from "../CatalogItem/CatalogItem";

export const Catalog = ({
  cars
}) => {
  return (
    <div className="wedo ">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="titlepage">
              <h2>What We Do</h2>
              <p>
                It is a long established fact that a reader will be distracted by
                the{" "}
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-10 offset-md-1">
            <div className="row">


            {cars.map(car => <CatalogItem key={car._id} {...car}/>)}

            {cars.length === 0 && (
              <h3> No cars posted yet </h3>
            )}

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};