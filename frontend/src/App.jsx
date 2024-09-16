import React from 'react'
import HOme from './Home/HOme.jsx'
import Courses from './Courses/Courses.jsx'
import { Navigate, Route, Routes } from 'react-router-dom'
import Signup from './components/Signup.jsx'
import { Toaster } from 'react-hot-toast';
import { useAuth } from './context/AuthProvider.jsx';

function App() {
  const [authUser, setAuthUser] = useAuth();
  return (
    <>
      {/* <HOme />
      <Course /> */}

      <div className='dark:bg-slate-900 dark:text-white'>
        <Routes>
          <Route path='/' element={<HOme />} />
          <Route path='/course' element={authUser ? <Courses /> : <Navigate to="/signup" />} />
          <Route path='/signup' element={<Signup />} />
        </Routes>
        <Toaster />
      </div>
    </>
  )
}

export default App