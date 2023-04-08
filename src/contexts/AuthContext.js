import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";


import { authServiceFactory } from "../services/authService";
import { useLocalStorage } from "../hooks/useLocalStorage";

export const AuthContext = createContext();

export const AuthProvider = ({
    children,
}) =>{
    const navigate = useNavigate();

    const [user, setUser] = useLocalStorage('user', {});

    const authService = authServiceFactory(user.accessToken);


    const onRegisterSubmit = async (data) => {
        const { repassword, ...registerData } = data; 
        if(repassword !== registerData.password) {
          alert('Passwords do not match');
          return;
        }

        if (data.email.length < 5) {
            alert('Email is too short');
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

       const onLoginSubmit = async (data) => {
   
        try {
          const result = await authService.login(data);
    
          setUser(result);
    
          navigate('/catalog');
    
        } catch (error) {
          alert('wrong email or password');
        }
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
            {children}
         </AuthContext.Provider>
        </>
    );
}; 