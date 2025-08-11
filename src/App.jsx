import React from 'react'
import Login from './Login/login'
import Sign from './Sign/sign'
import Dash from './Dash/dash'
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/" element={<Sign />} />
        <Route path="/" element={<Dash />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
