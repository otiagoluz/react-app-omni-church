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

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="expenses" element={<Expenses />} />
        <Route path="invoices" element={<Invoices />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)
