import { Routes, Route } from 'react-router-dom'
import Menu from './Menu'
import menus from '../menus'
import EditCategory from './EditCategory'
import editCategoryProps from '../componentProps/editCategoryProps'

const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Menu menuItems={menus.home} />} />

      <Route path='/bank'>
        <Route index element={<Menu menuItems={menus.bank} />} />
        <Route path='add' element={<EditCategory {...editCategoryProps.bank} />} />
      </Route>

      <Route path='/creditcard'>
        <Route index element={<Menu menuItems={menus.creditCard} />} />
        <Route path='add' element={<EditCategory {...editCategoryProps.creditCard} />} />
      </Route>

      <Route path='/stock'>
        <Route index element={<Menu menuItems={menus.stock} />} />
        <Route path='add' element={<EditCategory {...editCategoryProps.stock} />} />
      </Route>

      <Route path='/mutualfund'>
        <Route index element={<Menu menuItems={menus.mutualFund} />} />
        <Route path='add' element={<EditCategory {...editCategoryProps.mutualFund} />} />
      </Route>

      <Route path='/misc'>
        <Route index element={<Menu menuItems={menus.misc} />} />
        <Route path='add' element={<EditCategory {...editCategoryProps.misc} />} />
      </Route>

    </Routes>
  )
}

export default AppRoutes
