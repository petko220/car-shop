import { Routes, Route, useNavigate, Form } from 'react-router-dom'
import { useState, useEffect } from 'react';

import { carServiceFactory } from './services/carService';
import { AuthProvider } from './contexts/AuthContext';


import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { Home } from './components/Home/Home';
import { Catalog } from './components/Catalog/Catalog';
import { About } from './components/About/About';
import { Login } from './components/Login/Login';
import { Register } from './components/Register/Register';
import { CreateCarAd } from './components/Create/Create';
import { CarDetails, modified } from './components/CarDetails/CarDetails';
import { Logout } from './components/Logout/Logout';
import { CarEdit } from './components/CarEdit/CarEdit';




function App() {
  const navigate = useNavigate();

  const [cars, setCars] = useState([]);
  
  const carService = carServiceFactory();
 

  useEffect(() => {
    carService.getAll()
      .then(result => {
        setCars(result);
      })
  }, []);

  const onCreateCarSubmit = async (data) => {
    try {
      const newCar = await carService.create(data);

      if(newCar) {
      setCars(state => [...state, newCar]);
  
      navigate('/catalog');
      }
    } catch (error) {
      alert(error.message);
    }

  };

  const onDelete = () => {
    setCars(modified);
  };


  const onCarEditSubmit = async (values) => {
    const result = await carService.edit(values._id, values);

    setCars(state => state.map(x => x._id === values._id ? result : x));

    navigate(`/catalog/${values._id}`);
  };





  return (
    <>
      <AuthProvider>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/catalog' element={<Catalog cars={cars} />} />
          <Route path='/about' element={<About />} />
          <Route path='/login' element={<Login />} />
          <Route path='/logout' element={<Logout />} />
          <Route path='/register' element={<Register />} />
          <Route path='/create-car-ad' element={<CreateCarAd onCreateCarSubmit={onCreateCarSubmit} />} />
          <Route path='/catalog/:carId' element={<CarDetails onDelete={onDelete}/>} />
          <Route path='/catalog/edit/:carId' element={<CarEdit onCarEditSubmit={onCarEditSubmit} />} />
        </Routes>
        <Footer />
      </AuthProvider>
    </>


  );
}

export default App;
