import { useLocation } from "react-router-dom";
import styles from "../styles/headerStyles"

const Header = () => {
  const titles = {
    '/': 'Transaction Tracker',
    '/bank': 'Bank',
    '/bank/add-transaction': 'Add Transaction',
    '/stock': 'Stock',
    '/stock/add-transaction': 'Add Transaction'
  }

  const location = useLocation();

  return (
    <div style={styles.header}>
      <p style={styles.title}>{ titles[location.pathname] }</p>
    </div>
  )
}

export default Header
