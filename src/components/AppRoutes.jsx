import { Routes, Route } from 'react-router-dom'
import Menu from './Menu'
import menus from '../data/menus'
import Categories from './Categories'
import EditCategory from './EditCategory'
import componentProps from '../data/componentProps'

const AppRoutes = () => {
  const { categories, editCategory } = componentProps

  return (
    <Routes>
      <Route path='/' element={<Menu menuItems={menus.home} />} />

      <Route path='/bank'>
        <Route index element={<Menu menuItems={menus.bank} />} />
        <Route path='banks' element={<Categories {...categories.bank} />} />
        <Route path='update' element={<EditCategory {...editCategory.bank.update} />} />
        <Route path='add' element={<EditCategory {...editCategory.bank.add} />} />
      </Route>

      <Route path='/creditcard'>
        <Route index element={<Menu menuItems={menus.creditCard} />} />
        <Route path='creditcards' element={<Categories {...categories.creditCard} />} />
        <Route path='update' element={<EditCategory {...editCategory.creditCard.update} />} />
        <Route path='add' element={<EditCategory {...editCategory.creditCard.add} />} />
      </Route>

      <Route path='/stock'>
        <Route index element={<Menu menuItems={menus.stock} />} />
        <Route path='stocks' element={<Categories {...categories.stock} />} />
        <Route path='update' element={<EditCategory {...editCategory.stock.update} />} />
        <Route path='add' element={<EditCategory {...editCategory.stock.add} />} />
      </Route>

      <Route path='/mutualfund'>
        <Route index element={<Menu menuItems={menus.mutualFund} />} />
        <Route path='mutualfunds' element={<Categories {...categories.mutualFund} />} />
        <Route path='update' element={<EditCategory {...editCategory.mutualFund.update} />} />
        <Route path='add' element={<EditCategory {...editCategory.mutualFund.add} />} />
      </Route>

      <Route path='/misc'>
        <Route index element={<Menu menuItems={menus.misc} />} />
        <Route path='misccategories' element={<Categories {...categories.misc} />} />
        <Route path='update' element={<EditCategory {...editCategory.misc.update} />} />
        <Route path='add' element={<EditCategory {...editCategory.misc.add} />} />
      </Route>

    </Routes>
  )
}

export default AppRoutes
