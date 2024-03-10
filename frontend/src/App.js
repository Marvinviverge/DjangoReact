import React from 'react'

import { BrowserRouter, Route, Routes } from "react-router-dom"

import AuthGuard from "./utils/AuthGuard"
import { AuthProvider } from './context/AuthContext'

import Home from './components/Home/Home.js'
import Register from './components/Register/Register.js'
import Login from './components/Login/Login.js'
import Dashboard from './components/Dashboard/Dashboard'
import Navbar from './components/Navbar/Navbar.js'

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        < Navbar />
        <Routes>
          <Route path="/dashboard" element={<AuthGuard><Dashboard /></AuthGuard>} />
          <Route element={<Login />} path="/login" />
          <Route element={<Register />} path="/register" exact />
          <Route element={<Home />} path="/" exact />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App