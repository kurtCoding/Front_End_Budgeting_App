import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import './App.css'

import Home from './Pages/Home'
import NavBar from './Components/NavBar'


function App() {

  return (
    <div>
      <Router>
        <NavBar/>
      <main>
        <Routes>
          <Route path='/' element={<Home/>}/>
        </Routes>
      </main>
      </Router>
    </div>
  )
}

export default App
