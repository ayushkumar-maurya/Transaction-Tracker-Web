import { useState, useEffect, useRef } from 'react'
import { API_URL } from '../config'
import styles from "../styles/components/categoriesStyles"
import Alert from './Alert'
import Spinner from './Spinner'
import CategoryRowItem from './items/CategoryRowItem'
import '../css/components/Categories.css'

const Categories = ({ title, path, updatePath }) => {
  const [categories, setCategories] = useState([])
  const [loading, setLoading] = useState(true)

  const alertRef = useRef(null)
  const [showAlert, setShowAlert] = useState(false)

  const getCategories = async () => {
    try {
      const url = `${API_URL}${path}`
      let params = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
      }
      const res = await fetch(url, params)
      setLoading(false)
      if(!res)
        throw new Error('Unable to fetch records!')
      let resData = await res.json()
      if(!(resData && Array.isArray(resData)))
        throw new Error('Unable to fetch records!')
      setCategories(resData)
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
      <div className="items-container" style={styles.itemsContainer}>
        {categories.map((item, index) =>
          <CategoryRowItem category={item} index={index} key={index} updatePath={updatePath} />
        )}
      </div>
      <Alert infoRef={alertRef} showFlag={showAlert} updateShowFlag={setShowAlert} />
    </>
  )
}

export default Categories
