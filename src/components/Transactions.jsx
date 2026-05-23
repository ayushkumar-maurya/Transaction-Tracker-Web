import { useState, useEffect, useRef } from 'react'
import { API_URL } from '../config'
import styles from "../styles/components/transactionsStyles"
import Alert from './Alert'
import Spinner from './Spinner'
import TransactionRowItem from './items/TransactionRowItem'
import '../css/components/Transactions.css'

const Transactions = ({ title, path, updatePath }) => {
  const [transactions, setTransactions] = useState([])
  const [loading, setLoading] = useState(true)

  const alertRef = useRef(null)
  const [showAlert, setShowAlert] = useState(false)

  const getTransactions = async () => {
    try {
      const url = `${API_URL}${path}`
      let params = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
      }
      const res = await fetch(url, params)
      setLoading(false)
      if(!res)
        throw new Error('Unable to fetch transactions!')
      let resData = await res.json()
      if(!(resData && Array.isArray(resData)))
        throw new Error('Unable to fetch transactions!')
      setTransactions(resData)
    }
    catch(err) {
      alertRef.current = { title: title, msg: err.message }
      setShowAlert(true)
    }
  }

  useEffect(() => {
    getTransactions()
  }, [])

  return (
    <>
      { loading && <Spinner /> }
      <div className="items-container" style={styles.itemsContainer}>
        {transactions.map((item, index) =>
          <TransactionRowItem transaction={item} index={index} key={index} updatePath={updatePath} />
        )}
      </div>
      <Alert infoRef={alertRef} showFlag={showAlert} updateShowFlag={setShowAlert} />
    </>
  )
}

export default Transactions
