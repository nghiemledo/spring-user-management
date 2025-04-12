import './App.css'
import { Routes, Route, Navigate } from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import { ManageUserPage } from './pages/ManageUserPage'
import { useContext } from 'react'
import { AuthContext } from './context/AuthContext'

function App() {
  const { user } = useContext(AuthContext)

  return (
    <Routes>
      <Route path='/' element={<Navigate to={user ? "/users" : "/login"} />} />
      <Route path='/login' element={<LoginPage />} />
      <Route path='/register' element={<RegisterPage />} />
      <Route path='/users' element={user ? <ManageUserPage /> : <Navigate to="/login" />} />
    </Routes>
  )
}

export default App
