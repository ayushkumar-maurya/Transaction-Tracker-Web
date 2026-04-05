import styles from '../../styles/components/items/categoryRowItemStyles'
import '../../css/components/items/CategoryRowItem.css'

const CategoryRowItem = ({ category, index, updateInfo }) => {
  return (
    <>
      { index > 0 && <hr style={styles.line} /> }
      <div className="item" style={styles.item}>
        <p style={styles.name}>{ category.name }</p>
        <p style={styles.desc}>{ category.description }</p>
      </div>
    </>
  )
}

export default CategoryRowItem
