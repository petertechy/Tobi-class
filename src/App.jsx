import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import AboutPage from './pages/AboutPage'
import NotFound from './pages/NotFound'
import UserProfile from './pages/UserProfile'
import RegisterUser from './pages/RegisterUser'
import Food from './pages/Food'
import Fish from './components/Fish'
import Meat from './components/Meat'
import EffectClass from './pages/EffectClass'
import MakeRequest from './pages/MakeRequest'

const App = () => {
  return (
    <>
        <Navbar/>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/home' element={<Navigate to="/"/>}/>
            <Route path='/about' element={<AboutPage/>} />
            <Route path='/about-us' element={<Navigate to="/about"/>} />
            <Route path='/user/:id' element={<UserProfile/>}/>
            <Route path='/register' element={<RegisterUser/>}/>
            <Route path='/effect' element={<EffectClass/>}/>
            <Route path='/make-request' element={<MakeRequest/>}/>

            <Route path='/food' element={<Food/>}>
              <Route path='fish' element={<Fish/>}/>
              <Route path='meat' element={<Meat/>}/>
            </Route>

            <Route path='*' element={<NotFound/>}/>
        </Routes>
    </>
  )
}

export default App