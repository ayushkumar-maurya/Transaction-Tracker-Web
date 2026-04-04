import { Routes, Route } from 'react-router-dom'
import menus from '../menus'
import Menu from './Menu'
import EditCategory from './EditCategory'

const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Menu menuItems={menus.home} />} />

      <Route path='/bank'>
        <Route index element={<Menu menuItems={menus.bank} />} />
        <Route path='add' element={<EditCategory />} />
      </Route>

      <Route path='/creditcard'>
        <Route index element={<Menu menuItems={menus.creditCard} />} />
        <Route path='add' element={<EditCategory />} />
      </Route>

      <Route path='/stock'>
        <Route index element={<Menu menuItems={menus.stock} />} />
        <Route path='add' element={<EditCategory />} />
      </Route>

      <Route path='/mutualfund'>
        <Route index element={<Menu menuItems={menus.mutualFund} />} />
        <Route path='add' element={<EditCategory />} />
      </Route>

      <Route path='/misc'>
        <Route index element={<Menu menuItems={menus.misc} />} />
        <Route path='add' element={<EditCategory />} />
      </Route>

    </Routes>
  )
}

export default AppRoutes
