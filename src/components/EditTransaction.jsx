import { useState, useRef, useEffect } from 'react'
import { API_URL } from '../config'
import styles from "../styles/components/editTransactionStyles"
import '../css/components/EditTransaction.css'
import Alert from './Alert'
import Spinner from './Spinner'

const EditTransaction = ({ title, method, path, deletePath, categoriesInfo }) => {
  const [loading, setLoading] = useState(true)

  const alertRef = useRef(null)
  const [showAlert, setShowAlert] = useState(false)

  const [categoryItems, setCategoryItems] = useState([{ label: 'No data found!', value: '0' }])

  const updateCategoryItems = categories => {
    if(categories.length > 0) {
      setCategoryItems(categories.map(c => {
        return { label: c.name.length > 20 ? `${c.name.substring(0, 20)}...` : c.name, value: `${c.id}` }
      }))
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
      if(!(resData && Array.isArray(resData)))
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
        <Alert infoRef={alertRef} showFlag={showAlert} updateShowFlag={setShowAlert} />
      </div>
    </>
  )
}

export default EditTransaction
