import React from 'react'
import {BrowserRouter,  Routes, Route} from "react-router-dom"
import Navbar from './Layout/Navbar'
import NewUser from './pages/NewUser'
import AllUser from './pages/AllUser'
import Home from './pages/Home'
import SingleUser from './pages/SingleUser'

const App = () => {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element= {<Home/>} />
      <Route path='/NewUser' element= {<NewUser/>} />
      <Route path='/AllUser' element= {<AllUser/>} />
      <Route path='/SingleUser/:userId' element= {<SingleUser/>} />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App