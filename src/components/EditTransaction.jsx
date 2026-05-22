import { useState, useRef, useEffect } from 'react'
import { API_URL } from '../config'
import styles from "../styles/components/editTransactionStyles"
import '../css/components/EditTransaction.css'
import Alert from './Alert'
import Spinner from './Spinner'
import { formatDate } from '../utils/date'

const EditTransaction = ({ title, method, path, deletePath, categoriesInfo }) => {
  const [loading, setLoading] = useState(true)

  const alertRef = useRef(null)
  const [showAlert, setShowAlert] = useState(false)

  const [categoryItems, setCategoryItems] = useState([{ label: 'No data found!', value: '0' }])

  const [categoryId, setCategoryId] = useState('0')
  const [date, setDate] = useState(formatDate(new Date()))
  const [description, setDescription] = useState('')
  const [deposit, setDeposit] = useState('')
  const [withdrawal, setWithdrawal] = useState('')
  const [remark, setRemark] = useState('')

  const updateCategoryItems = categories => {
    if(categories.length > 0) {
      setCategoryItems([{label: `Select ${categoriesInfo.parent}`, value: '0'}, ...categories.map(c => {
        return { label: c.name.length > 20 ? `${c.name.substring(0, 20)}...` : c.name, value: `${c.id}` }
      })])
    }
    else
      setCategoryItems([{ label: 'No data found!', value: '0' }])
  }

  const getCategories = async () => {
    try {
      const url = `${API_URL}${categoriesInfo.path}`
      let params = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
      }
      const res = await fetch(url, params)
      setLoading(false)
      if(!res)
        throw new Error('Unable to fetch required data!')
      let resData = await res.json()
      if(!(resData && Array.isArray(resData) && resData.length > 0))
        throw new Error('Unable to fetch required data!')
      updateCategoryItems(resData)
    }
    catch(err) {
      alertRef.current = { title: title, msg: err.message }
      setShowAlert(true)
    }
  }

  useEffect(() => {
    getCategories()
  }, [])

  return (
    <>
      { loading && <Spinner /> }

      <div className="form-container" style={styles.formContainer}>
        <label htmlFor="category" className="form-label" style={styles.label}>{ categoriesInfo.parent }</label>

        <select
          id="category"
          className="form-select"
          style={styles.dropdown}
          aria-label={`Select ${categoriesInfo.parent}`}
          value={categoryId}
          onChange={e => setCategoryId(e.target.value)}
        >
          { categoryItems.map(c => <option value={c.value} key={c.value}>{c.label}</option>) }
        </select>

        <label htmlFor="date" className="form-label" style={styles.label}>Date</label>

        <input
          type="date"
          className="form-control"
          id="date"
          style={styles.input}
          value={date}
          onChange={e => setDate(e.target.value)}
        />

        <label htmlFor="desc" className="form-label" style={styles.label}>Description</label>

        <textarea
          className="form-control"
          id="desc"
          rows="3"
          placeholder="Description"
          style={{...styles.input, ...styles.textarea}}
          value={description}
          onChange={e => setDescription(e.target.value)}
        />

        <label htmlFor="deposit" className="form-label" style={styles.label}>Deposit</label>

        <input
          type="number"
          className="form-control"
          id="deposit"
          placeholder="Deposit"
          style={{...styles.input, ...styles.deposit}}
          value={deposit}
          onChange={e => setDeposit(e.target.value)}
        />

        <label htmlFor="withdrawal" className="form-label" style={styles.label}>Withdrawal</label>

        <input
          type="number"
          className="form-control"
          id="withdrawal"
          placeholder="Withdrawal"
          style={{...styles.input, ...styles.withdrawal}}
          value={withdrawal}
          onChange={e => setWithdrawal(e.target.value)}
        />

        <label htmlFor="remark" className="form-label" style={styles.label}>Remark</label>

        <textarea
          className="form-control"
          id="remark"
          rows="3"
          placeholder="Remark"
          style={{...styles.input, ...styles.textarea}}
          value={remark}
          onChange={e => setRemark(e.target.value)}
        />

        <Alert infoRef={alertRef} showFlag={showAlert} updateShowFlag={setShowAlert} />
      </div>
    </>
  )
}

export default EditTransaction
