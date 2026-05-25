import { Routes, Route, Navigate } from 'react-router-dom'
import Menu from './Menu'
import menus from '../data/menus'
import EditTransaction from './EditTransaction'
import Transactions from './Transactions'
import Categories from './Categories'
import EditCategory from './EditCategory'
import componentProps from '../data/componentProps'

const AppRoutes = () => {
  const { editTransaction, transactions, categories, editCategory } = componentProps

  return (
    <Routes>
      <Route path='/' element={<Menu menuItems={menus.home} />} />

      <Route path='/bank'>
        <Route index element={<Menu menuItems={menus.bank} />} />

        <Route path='transaction'>
          <Route index element={<Navigate to='/bank/transaction/add' />} />
          <Route path='add' element={<EditTransaction {...editTransaction.bank.add} />} />
          <Route path='transactions' element={<Transactions {...transactions.bank} />} />
          <Route path='update' element={<EditTransaction {...editTransaction.bank.update} />} />
        </Route>

        <Route path='banks' element={<Categories {...categories.bank} />} />
        <Route path='update' element={<EditCategory {...editCategory.bank.update} />} />
        <Route path='add' element={<EditCategory {...editCategory.bank.add} />} />
      </Route>

      <Route path='/creditcard'>
        <Route index element={<Menu menuItems={menus.creditCard} />} />

        <Route path='transaction'>
          <Route index element={<Navigate to='/creditcard/transaction/add' />} />
          <Route path='add' element={<EditTransaction {...editTransaction.creditCard.add} />} />
          <Route path='transactions' element={<Transactions {...transactions.creditCard} />} />
          <Route path='update' element={<EditTransaction {...editTransaction.creditCard.update} />} />
        </Route>

        <Route path='creditcards' element={<Categories {...categories.creditCard} />} />
        <Route path='update' element={<EditCategory {...editCategory.creditCard.update} />} />
        <Route path='add' element={<EditCategory {...editCategory.creditCard.add} />} />
      </Route>

      <Route path='/stock'>
        <Route index element={<Menu menuItems={menus.stock} />} />

        <Route path='transaction'>
          <Route index element={<Navigate to='/stock/transaction/add' />} />
          <Route path='add' element={<EditTransaction {...editTransaction.stock.add} />} />
          <Route path='transactions' element={<Transactions {...transactions.stock} />} />
          <Route path='update' element={<EditTransaction {...editTransaction.stock.update} />} />
        </Route>

        <Route path='stocks' element={<Categories {...categories.stock} />} />
        <Route path='update' element={<EditCategory {...editCategory.stock.update} />} />
        <Route path='add' element={<EditCategory {...editCategory.stock.add} />} />
      </Route>

      <Route path='/mutualfund'>
        <Route index element={<Menu menuItems={menus.mutualFund} />} />

        <Route path='transaction'>
          <Route index element={<Navigate to='/mutualfund/transaction/add' />} />
          <Route path='add' element={<EditTransaction {...editTransaction.mutualFund.add} />} />
          <Route path='transactions' element={<Transactions {...transactions.mutualFund} />} />
          <Route path='update' element={<EditTransaction {...editTransaction.mutualFund.update} />} />
        </Route>

        <Route path='mutualfunds' element={<Categories {...categories.mutualFund} />} />
        <Route path='update' element={<EditCategory {...editCategory.mutualFund.update} />} />
        <Route path='add' element={<EditCategory {...editCategory.mutualFund.add} />} />
      </Route>

      <Route path='/misc'>
        <Route index element={<Menu menuItems={menus.misc} />} />

        <Route path='transaction'>
          <Route index element={<Navigate to='/misc/transaction/add' />} />
          <Route path='add' element={<EditTransaction {...editTransaction.misc.add} />} />
          <Route path='transactions' element={<Transactions {...transactions.misc} />} />
          <Route path='update' element={<EditTransaction {...editTransaction.misc.update} />} />
        </Route>

        <Route path='misccategories' element={<Categories {...categories.misc} />} />
        <Route path='update' element={<EditCategory {...editCategory.misc.update} />} />
        <Route path='add' element={<EditCategory {...editCategory.misc.add} />} />
      </Route>

      <Route path='*' element={<Navigate to='/' />} />

    </Routes>
  )
}

export default AppRoutes
