import { Routes, Route } from 'react-router-dom'
import Menu from './Menu'
import menus from '../menus'

const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Menu menuItems={menus.home} />} />
      <Route path='/bank' element={<Menu menuItems={menus.bank} />} />
      <Route path='/creditcard' element={<Menu menuItems={menus.creditCard} />} />
      <Route path='/stock' element={<Menu menuItems={menus.stock} />} />
      <Route path='/mutualfund' element={<Menu menuItems={menus.mutualFund} />} />
      <Route path='/misc' element={<Menu menuItems={menus.misc} />} />
    </Routes>
  )
}

export default AppRoutes
