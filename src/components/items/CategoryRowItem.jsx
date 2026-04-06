import { useNavigate } from 'react-router-dom';
import styles from '../../styles/components/items/categoryRowItemStyles'
import '../../css/components/items/CategoryRowItem.css'

const CategoryRowItem = ({ category, index, updatePath }) => {
  const navigate = useNavigate()

  return (
    <>
      { index > 0 && <hr style={styles.line} /> }
      <div className="cr-item" style={styles.item} onClick={() => navigate(`/${updatePath}`, {state: {category}})}>
        <p style={styles.name}>{ category.name }</p>
        <p style={styles.desc}>{ category.description }</p>
      </div>
    </>
  )
}

export default CategoryRowItem
