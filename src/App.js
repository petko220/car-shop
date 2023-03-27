import { Routes, Route, useNavigate, Form } from 'react-router-dom'
import { useState, useEffect } from 'react';

import { carServiceFactory } from './services/carService';
import { AuthContext } from './contexts/AuthContext';
import {authServiceFactory} from './services/authService';

import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { Home } from './components/Home/Home';
import { Catalog } from './components/Catalog/Catalog';
import { About } from './components/About/About';
import { Login } from './components/Login/Login';
import { Register } from './components/Register/Register';
import { CreateCarAd } from './components/Create/Create';
import { CarDetails } from './components/CarDetails/CarDetails';
import { Logout } from './components/Logout/Logout';


function App() {
  const navigate = useNavigate();

  const [cars, setCars] = useState([]);
  const [user, setUser] = useState({});
  const carService = carServiceFactory(user.accessToken);
  const authService = authServiceFactory(user.accessToken);

  useEffect(() => {
    carService.getAll()
      .then(result => {
        setCars(result);
      })
  }, []);

  const onCreateCarSubmit = async (data) => {
    const newCar = await carService.create(data);

    setCars(state => [...state, newCar]);

    navigate('/catalog');
  };

  const onLoginSubmit = async (data) => {
   
    try {
      const result = await authService.login(data);

      setUser(result);

      navigate('/catalog');

    } catch (error) {
      console.log('wrong email or password');
    }
  };

  const onRegisterSubmit = async (data) => {
    const { repassword, ...registerData } = data; 
    if(repassword !== registerData.password) {
      return;
    }


    try {
      const result = await authService.register(registerData);

      setUser(result);

      navigate('/catalog');

    } catch (error) {
      console.log('Error');
    }
  };

  const onLogout = async () => {
   await authService.logout();

    setUser({});
  };

  const context = {
    onLoginSubmit,
    onRegisterSubmit,
    onLogout,
    userId: user._id,
    token: user.accessToken,
    email: user.email,
    isAuthenticated: !!user.accessToken
    
  };


  return (
    <>
      <AuthContext.Provider value={context}>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/catalog' element={<Catalog cars={cars} />} />
          <Route path='/about' element={<About />} />
          <Route path='/login' element={<Login />} />
          <Route path='/logout' element={<Logout />} />
          <Route path='/register' element={<Register />} />
          <Route path='/create-car-ad' element={<CreateCarAd onCreateCarSubmit={onCreateCarSubmit} />} />
          <Route path='/catalog/:carId' element={<CarDetails />} />
        </Routes>
        <Footer />
      </AuthContext.Provider>
    </>


  );
}

export default App;
