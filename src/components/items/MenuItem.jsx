import { useNavigate } from 'react-router-dom';
import styles from '../../styles/items/menuItemStyles'
import '../../css/items/MenuItem.css'

const MenuItem = ({ item }) => {
  const { title, icon, navPath, navParams } = item
  const navigate = useNavigate()

  return (
    <div className="item" style={styles.item} onClick={() => navigate(`/${navPath}`, {state: navParams})}>
      <img src={icon} style={styles.icon} alt={title} />
      <p style={styles.title}>{ title }</p>
    </div>
  )
}

export default MenuItem
