import { Routes, Route } from 'react-router-dom'

import Home from './Home'
import Bank from './Bank'
import bankComponents from '../groupedComponents/bankComponents'
import Stock from './Stock'
import stockComponents from '../groupedComponents/stockComponents'


const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />

      <Route path="/bank" element={<Bank />} />
      <Route path="/bank/add-transaction" element={<bankComponents.AddTransaction />} />

      <Route path="/stock" element={<Stock />} />
      <Route path="/stock/add-transaction" element={<stockComponents.AddTransaction />} />
    </Routes>
  )
}

export default AppRoutes
