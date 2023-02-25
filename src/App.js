// Lib

import React from 'react'
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { Switch , Route} from 'react-router-dom'


// Pages

import Home from './Pages/Home';
import Login from './Pages/Auth/Login';
import Register from './Pages/Auth/Register';
import Header from './Components/Nav/Header';
import Announcment from './Components/Annoucements/Annouc';
import Announcment2 from './Components/Annoucements/Annouc2';
import Footer from './Components/Footer/Footer';
import Liv from './Components/Footer/Liv';
import Announcment3 from './Components/Annoucements/Annouc3';
import RegisterComplete from './Pages/Auth/RegisterComplete';




const App = () => {
  return (

    <>
    <Announcment2/>
    <Announcment/>
    <Announcment3 />
    <Header/>
    <ToastContainer/>
    
   <Switch>

   <Route exact path="/" component={Home} />
   <Route exact path="/login" component={Login} />
   <Route exact path="/register" component={Register} />
   <Route exact path="/register/complete" component={RegisterComplete} />
   </Switch>
    <Liv />
   <Footer />

   </>
  )
}

export default App;
