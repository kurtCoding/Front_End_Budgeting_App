import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import './App.css'

import Home from './Pages/Home'
import NavBar from './Components/NavBar'
import Index from './Pages/Index'
import New from './Pages/New'
// import FourOFour from './Pages/FourOFour'


function App() {

  return (
    <div>
      <Router>
        <NavBar/>
      <main>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/transactions' element={<Index/>}/>
          <Route path='/transactions/new' element={<New/>}/>
          {/* <Route path='*' element={<FourOFour/>} /> */}
        </Routes>
      </main>
      </Router>
    </div>
  )
}

export default App
