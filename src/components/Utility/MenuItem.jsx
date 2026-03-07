import { useNavigate } from 'react-router-dom';
import styles from '../../styles/menuItemStyles'
import '../../css/MenuItem.css'

const MenuItem = ({ path, iconPath, title }) => {
  const navigate = useNavigate();

  return (
    <div className="option" style={styles.option} onClick={() => navigate(path)}>
      <img src={iconPath} style={styles.icon} alt={title} />
      <p style={styles.title}>{ title }</p>
    </div>
  )
}

export default MenuItem
