import React from 'react'
import ReactDOM from 'react-dom'
import { 
  BrowserRouter, 
  Routes,
  Route, 
} from 'react-router-dom'
import './index.scss'
import App from './App'
import Expenses from './pages/Expenses'
import Invoices from './pages/Invoices'
import Navbar from './core/components/Navbar'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <Navbar></Navbar>
    <div className="container">
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="expenses" element={<Expenses />} />
        <Route path="invoices" element={<Invoices />} />
      </Routes>
    </div>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)
