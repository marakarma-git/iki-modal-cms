
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import './App.css';
import Login from './auth/Login';
import Dashboard from './pages/dashboard/Dashboard';
import FinancilaUpload from './pages/financial/FinancialUpload';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login/>} />
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/financial' element={<FinancilaUpload/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
