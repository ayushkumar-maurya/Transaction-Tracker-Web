import { useNavigate } from 'react-router-dom';
import styles from '../../styles/components/items/transactionRowItemStyles'
import '../../css/components/items/TransactionRowItem.css'

const TransactionRowItem = ({ transaction, index, updatePath }) => {
  const navigate = useNavigate()

  return (
    <>
      { index > 0 && <hr style={styles.line} /> }
      <div className="tr-item" style={styles.item} onClick={() => navigate(`/${updatePath}`, {state: {transaction}})}>
        <div style={styles.infoContainer}>
          <div style={styles.infoSecionContainer}>
            <p style={styles.date}>8888-88-88</p>
            <p style={styles.category}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat obcaecati praesentium sunt explicabo reprehenderit ut quam ab repudiandae sit, pariatur fuga, eveniet corrupti labore ducimus ullam molestiae voluptas tempore, nobis suscipit itaque. Incidunt ex ab reiciendis quos nobis quam maxime enim amet, earum aspernatur similique recusandae, inventore impedit rem veritatis?</p>
          </div>
          <p style={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat obcaecati praesentium sunt explicabo reprehenderit ut quam ab repudiandae sit, pariatur fuga, eveniet corrupti labore ducimus ullam molestiae voluptas tempore, nobis suscipit itaque. Incidunt ex ab reiciendis quos nobis quam maxime enim amet, earum aspernatur similique recusandae, inventore impedit rem veritatis?</p>
          <p style={styles.remark}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat obcaecati praesentium sunt explicabo reprehenderit ut quam ab repudiandae sit, pariatur fuga, eveniet corrupti labore ducimus ullam molestiae voluptas tempore, nobis suscipit itaque. Incidunt ex ab reiciendis quos nobis quam maxime enim amet, earum aspernatur similique recusandae, inventore impedit rem veritatis?</p>
        </div>

        <div style={styles.amtContainer}>
          <p style={styles.amt}>58,55,858.00</p>
        </div>
      </div>
    </>
  )
}

export default TransactionRowItem
