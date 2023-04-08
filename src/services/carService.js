import { requestFactory } from "./requester";

const baseUrl = 'http://localhost:3030/data/cars';




export const carServiceFactory = (token) => {
  const request = requestFactory(token);

  const getAll = async () => {
    const result = await request.get(baseUrl);
    const cars = Object.values(result);

    return cars;
  };

  const getOne = async (carId) => {
    const result = await request.get(`${baseUrl}/${carId}`);

    return result;
  };

  const create = async (carData) => {
    //const result = await request.post(baseUrl, carData);
    const allValues = Object.values(carData);
    let missing = false;
    allValues.map(x => {
      if (!x) {
        missing = true
      }
    })
    if (missing) {
      alert('some fields are missiing');
    } else {
      try {
        const result = await request.post(baseUrl, carData);
        return result;
      } catch (error) {

      };
    };
  };

  const carDelete = (carId) => request.del(`${baseUrl}/${carId}`);

  const edit = (carId, data) => request.put(`${baseUrl}/${carId}`, data);

  return {
    getAll,
    getOne,
    create,
    delete: carDelete,
    edit,
  };
};


