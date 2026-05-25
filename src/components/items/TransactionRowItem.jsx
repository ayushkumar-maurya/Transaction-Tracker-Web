import { useNavigate } from 'react-router-dom';
import styles from '../../styles/components/items/transactionRowItemStyles'
import '../../css/components/items/TransactionRowItem.css'
import { currencyFormatter } from '../../utils/currency'

const TransactionRowItem = ({ transaction, index, updatePath }) => {
  const navigate = useNavigate()

  return (
    <>
      { index > 0 && <hr style={styles.line} /> }
      <div className="tr-item" style={styles.item} onClick={() => navigate(`/${updatePath}`, {state: {transaction}})}>
        <div style={styles.infoContainer}>
          <div style={styles.infoSecionContainer}>
            <p style={styles.date}>{ transaction.date }</p>
            <p style={styles.category}>{ transaction.category_name }</p>
          </div>
          { transaction.description && <p style={styles.desc}>{ transaction.description }</p> }
          { transaction.remark && <p style={styles.remark}>{ transaction.remark }</p> }
        </div>

        <div style={styles.amtContainer}>
          <p style={{...styles.amt, ...(transaction.deposit > 0 ? styles.deposit : styles.withdrawal)}}>
            { `${transaction.deposit > 0 ? '+ ' : ''}${currencyFormatter.format(transaction.deposit > 0 ? transaction.deposit : transaction.withdrawal)}` }
          </p>
        </div>
      </div>
    </>
  )
}

export default TransactionRowItem
