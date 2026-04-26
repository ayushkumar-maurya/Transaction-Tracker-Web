import { useNavigate } from 'react-router-dom';
import styles from '../../styles/components/items/menuItemStyles'
import '../../css/components/items/MenuItem.css'

const MenuItem = ({ item }) => {
  const { title, icon, navPath } = item
  const navigate = useNavigate()

  return (
    <div className="m-item" style={styles.item} onClick={() => navigate(`/${navPath}`)}>
      <img src={icon} style={styles.icon} alt={title} />
      <p style={styles.title}>{ title }</p>
    </div>
  )
}

export default MenuItem
