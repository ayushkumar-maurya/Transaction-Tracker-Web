import { useLocation } from "react-router-dom";
import styles from "../styles/headerStyles"
import titles from "../titles";

const Header = () => {
  const location = useLocation();

  return (
    <div style={styles.header}>
      <p style={styles.title}>{ titles[location.pathname] }</p>
    </div>
  )
}

export default Header
