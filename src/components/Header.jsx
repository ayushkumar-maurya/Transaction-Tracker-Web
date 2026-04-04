import { useLocation } from "react-router-dom";
import styles from "../styles/headerStyles"
import titles from "../titles";

const Header = () => {
  const location = useLocation();
  const path = location.pathname.replaceAll('/', ' ').trim().replaceAll(' ', '/')
  
  let title = titles[path]
  if (!title)
    title = 'Transaction Tracker'

  return (
    <div style={styles.header}>
      <p style={styles.title}>{ title }</p>
    </div>
  )
}

export default Header
