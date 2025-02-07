import { Suspense, useState } from 'react'
import { AuthContextProvider } from './redux/AuthContext'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { lazy} from "react";



const Login = lazy(() => import('./pages/Login'))
const SignUp = lazy(() => import('./pages/Signup'))
const Home = lazy(() => import('./pages/Home'))
const About = lazy(() => import('./pages/About'))
const Pricing = lazy(() => import('./pages/Pricing'))



function App() {
  const [count, setCount] = useState(0)

  return (
    <>

    <AuthContextProvider>
    <Router> 
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/about" element={<About />} />
          <Route path="/pricing" element={<Pricing />} />

        </Routes>
      </Suspense>
    </Router> 
      </AuthContextProvider>
    </>
  )
}

export default App
