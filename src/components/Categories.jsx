import { useState, useEffect } from 'react'
import { API_URL } from '../config'
import styles from "../styles/components/categoriesStyles"
import Alert from './Alert'

const Categories = ({ pageTitle, path, updateInfo, deletePath }) => {
  const [categories, setCategories] = useState([])

  const [alertData, setAlertData] = useState({})
  const [showAlert, setShowAlert] = useState(false)

  const getCategories = async () => {
    try {
      const url = `${API_URL}${path}`
      let params = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
      }
      const res = await fetch(url, params)
      // setLoading(false)
      if(!res)
        throw new Error('Unable to fetch records!')
      let resData = await res.json()
      if(!(resData && Array.isArray(resData)))
        throw new Error('Unable to fetch records!')
      setCategories(resData)
    }
    catch(err) {
      setAlertData({ title: pageTitle, msg: err.message })
      setShowAlert(true)
    }
  }

  useEffect(() => {
    getCategories()
  }, [])

  return (
    <>
      <Alert data={alertData} show={showAlert} updateFlag={setShowAlert} />
    </>
  )
}

export default Categories
