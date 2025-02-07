import { Suspense, useState } from 'react'
import { AuthContextProvider } from './context/AuthContext'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { lazy} from "react";

import { ErrorBoundary } from './pages/ErrorBoundary';
const Login = lazy(() => import('./pages/Login'))
const SignUp = lazy(() => import('./pages/Signup'))
const Home = lazy(() => import('./pages/Home'))
const Dashboard = lazy(() => import('./pages/Dashboard'))
const EnergyInputForm  = lazy(() => import('./components/EnergyInputForm'))
const VirtualAuditQuestionnaire   = lazy(() => import('./components/VirtualAuditQuestionnaire'))
const AuditResults   = lazy(() => import('./pages/AuditResults'))
 


function App() {
  const [count, setCount] = useState(0)

  return (
    <>

    <AuthContextProvider>
    <Router> 
      <Suspense fallback={<div>Loading...</div>}>
      <ErrorBoundary>
        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/userdash" element={<Dashboard />} />
          <Route path="/energy-input" element={<EnergyInputForm />} /> 
          <Route path="/virtual-audit" element={<VirtualAuditQuestionnaire />} /> 
          <Route path="/audit-results/:id" element={<AuditResults />} /> 
        </Routes>
        </ErrorBoundary>
      </Suspense>
    </Router> 
      </AuthContextProvider>
    </>
  )
}

export default App
