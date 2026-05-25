import { useState, useRef, useEffect } from 'react'
import { useNavigate, useLocation } from "react-router-dom"
import { API_URL } from '../config'
import styles from "../styles/components/editTransactionStyles"
import '../css/components/EditTransaction.css'
import Alert from './Alert'
import Spinner from './Spinner'
import { formatDate } from '../utils/date'

const EditTransaction = ({ title, method, path, deletePath, categoriesInfo }) => {
  const navigate = useNavigate()
  const location = useLocation()

  const transaction = location.state && location.state.transaction
  const activity = transaction ? 'UPDATE' : 'ADD'
  const capActivity = activity.charAt(0).toUpperCase() + activity.slice(1).toLowerCase()

  const alertRef = useRef(null)
  const [showAlert, setShowAlert] = useState(false)

  const [loading, setLoading] = useState(true)
  const [disableBtn, setDisableBtn] = useState(false)

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

    if(activity === 'UPDATE') {
      setCategoryId(String(transaction.category_id))
      setDate(transaction.date)
      setDescription(transaction.description ? transaction.description : '')
      setDeposit(transaction.deposit ? transaction.deposit : '')
      setWithdrawal(transaction.withdrawal ? transaction.withdrawal : '')
      setRemark(transaction.remark ? transaction.remark : '')
    }
  }, [])

  const sendEditRequest = async () => {
    setDisableBtn(true)

    const postData = {
      categoryId,
      date,
      description,
      deposit: Number(deposit),
      withdrawal: Number(withdrawal),
      remark
    }

    if(activity === 'UPDATE')
      postData.id = transaction.id

    try {
      if(!postData.categoryId || postData.categoryId === '0')
        throw new Error(`Please select the ${categoriesInfo.parent}!`)

      if(postData.date != null && !(/^[0-9]{4}-[0-9]{2}-[0-9]{2}$/.test(postData.date)))
        throw new Error('Please enter the date in correct format!')

      if(postData.description)
        postData.description = postData.description.trim()

      if(!postData.deposit && !postData.withdrawal)
        throw new Error('Please enter either deposit or withdrawal amount!')

      if(postData.remark)
        postData.remark = postData.remark.trim()

      let transactionEdited = false

      const url = `${API_URL}${path}`;
      let params = {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(postData)
      }

      const res = await fetch(url, params)
      if(res) {
        let resData = await res.json()
        if(resData) {
          if((activity === 'ADD' && resData.insertedId) || (activity === 'UPDATE' && resData.affectedRows))
            transactionEdited = true
          else if(resData.error)
            throw new Error(resData.error)
        }
      }

      if(transactionEdited) {
        let onAlertClose = null
        if(activity === 'ADD') {
          setCategoryId('0')
          setDate(formatDate(new Date()))
          setDescription('')
          setDeposit('')
          setWithdrawal('')
          setRemark('')
        }
        else if(activity === 'UPDATE')
          onAlertClose = () => navigate(-1)

        alertRef.current = {
          title: capActivity,
          msg: `Transaction ${activity === 'ADD' ? 'added' : 'updated'} successfully!`,
          onClose: onAlertClose
        }
        setShowAlert(true)
      }
      else
        throw new Error('Some error occurred. Please try again!')
    }
    catch(err) {
      alertRef.current = { title: capActivity, msg: err.message }
      setShowAlert(true)
    }
    finally {
      setDisableBtn(false)
    }
  }

  const sendDeleteRequest = async () => {
    setDisableBtn(true)
    const postData = { id: transaction.id }

    try {
      let transactionDeleted = false

      const url = `${API_URL}${deletePath}`;
      let params = {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(postData)
      }

      const res = await fetch(url, params)
      if(res) {
        let resData = await res.json()
        if(resData) {
          if(resData.affectedRows)
            transactionDeleted = true
          else if(resData.error)
            throw new Error(resData.error)
        }
      }

      if(transactionDeleted) {
        alertRef.current = {
          title: 'Delete',
          msg: `Transaction deleted successfully!`,
          onClose: () => navigate(-1)
        }
        setShowAlert(true)
      }
      else
        throw new Error('Some error occurred. Please try again!')
    }
    catch(err) {
      alertRef.current = { title: 'Delete', msg: err.message }
      setShowAlert(true)
    }
    finally {
      setDisableBtn(false)
    }
  }

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

        <div style={styles.btnContainer}>
          <button
            type="button"
            className="btn edit-btn"
            style={{...styles.button, ...styles.editBtn}}
            disabled={disableBtn}
            onClick={sendEditRequest}
          >
            { capActivity }
          </button>

          { activity === 'UPDATE' && <button
            type="button"
            className="btn danger-btn"
            style={{...styles.button, ...styles.deleteBtn}}
            disabled={disableBtn}
            onClick={sendDeleteRequest}
          >
            Delete
          </button> }

          { activity === 'UPDATE' && <button
            type="button"
            className="btn cancel-btn"
            style={{...styles.button, ...styles.cancelBtn}}
            onClick={() => navigate(-1)}
          >
            Cancel
          </button> }
        </div>

        <Alert infoRef={alertRef} showFlag={showAlert} updateShowFlag={setShowAlert} />
      </div>
    </>
  )
}

export default EditTransaction
