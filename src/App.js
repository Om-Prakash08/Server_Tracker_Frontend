import { useState } from 'react';
import {
  BrowserRouter as Router,
 // Route,
 // Redirect,
 // Switch
} from 'react-router-dom';
import './App.css';
import ServerPage from './server-main-page/server-page'
import LoginPage from '../src/Component/LoginPageComponent/LoginPage' ;



function App() {
   const [isAuth ,setIsAuth] =useState(false) ;
   let routes ;
   if(isAuth)
    {
     routes= (
       <ServerPage />
     )
    }
  else
   {routes =(<LoginPage onAuth={setIsAuth}/>)}

  return (
    <Router>
     <main>{routes}</main>
    </Router>
  );
}

export default App;
