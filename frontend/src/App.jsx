import React from 'react'
import {  Routes, Route} from 'react-router-dom';

import Home from './pages/Home'
import Collection from './pages/Collection'
import About from './pages/About'
import Contact from './pages/Contact'
import Rides from './pages/Rides'
import Cart from './pages/cart'
import Login from './pages/Login'
import PlaceRide from './pages/PlaceRide'
import Order from './pages/Order'
import Navbar from './components/Navbar'
import Hero from './components/Hero';



const App = () => {
  return (
    <div className='pz-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]' >
      <Navbar />
      <Hero />
      <Routes>
         <Route path='/' element={<Home/>}/>
         <Route path='/collection' element={<Collection/>}/>
         <Route path='/about' element={<About/>}/>
         <Route path='/contact' element={<Contact/>}/>
         <Route path='/rides' element={<Rides/>}/>
         <Route path='/cart' element={<Cart/>}/>
         <Route path='/login' element={<Login/>}/>
         <Route path='/placeRide' element={<PlaceRide/>}/>
         <Route path='/order' element={<Order/>}/>

        
      </Routes>
    </div>
  )
}

export default App