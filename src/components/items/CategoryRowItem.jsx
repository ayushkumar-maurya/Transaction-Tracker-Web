import { useNavigate } from 'react-router-dom';
import styles from '../../styles/components/items/categoryRowItemStyles'
import '../../css/components/items/CategoryRowItem.css'
import { currencyFormatter } from '../../utils/currency'

const CategoryRowItem = ({ category, index, updatePath }) => {
  const navigate = useNavigate()

  return (
    <>
      { index > 0 && <hr style={styles.line} /> }
      <div className="cr-item" style={styles.item} onClick={() => navigate(`/${updatePath}`, {state: {category}})}>
        <div style={styles.infoContainer}>
          <p style={styles.name}>{ category.name }</p>
          { category.description && <p style={styles.desc}>{ category.description }</p> }
        </div>
        <div style={styles.amtContainer}>
          <p style={{...styles.amt, ...(category.amount < 0 ? styles.negativeAmt : styles.positiveAmt)}}>
            { `${currencyFormatter.format(category.amount)}` }
          </p>
        </div>
      </div>
    </>
  )
}

export default CategoryRowItem
