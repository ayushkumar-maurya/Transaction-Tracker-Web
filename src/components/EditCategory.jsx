import { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom"
import { API_URL } from '../../config'
import styles from "../styles/editCategoryStyles"
import '../css/EditCategory.css'

const EditCategory = ({ method, path }) => {
  const navigate = useNavigate()
  const category = null
  const activity = category ? 'UPDATE' : 'ADD'
  const capActivity = activity.charAt(0).toUpperCase() + activity.slice(1).toLowerCase()

  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [disableBtn, setDisableBtn] = useState(false)

  useEffect(() => {
    if(activity === 'UPDATE') {
      setName(category.name)
      setDescription(category.description)
    }
  }, [])

  const sendEditRequest = async () => {
    setDisableBtn(true)

    const postData = { name, description }

    if(activity === 'UPDATE')
      postData.id = category.id
  
    try {
      if(!postData.name)
        throw new Error('Please enter the name!')
      postData.name = postData.name.trim()
      if(postData.name.length === 0)
        throw new Error('Please enter valid name!')

      if(postData.description)
        postData.description = postData.description.trim()

      let categoryEdited = false

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
            categoryEdited = true
          else if(resData.error)
            throw new Error(resData.error)
        }
      }

      if(categoryEdited) {
        if(activity === 'ADD') {
          setName('')
          setDescription('')
        }
        else if(activity === 'UPDATE')
          navigate(-1)
        // Alert.alert(capActivity, `${postData.name} ${activity === 'ADD' ? 'added' : 'updated'} successfully!`, [{ text: 'OK' }])
        console.log(`${postData.name} ${activity === 'ADD' ? 'added' : 'updated'} successfully!`)
      }
      else
        throw new Error('Some error occurred. Please try again!')
    }
    catch(err) {
      // Alert.alert(capActivity, err.message, [{ text: 'OK' }])
      console.log(err.message)
    }
    finally {
      setDisableBtn(false)
    }
  }

  return (
    <div className="form-container" style={styles.formContainer}>
      <label htmlFor="name" className="form-label" style={styles.label}>Name</label>

      <input
        type="text"
        className="form-control"
        id="name"
        placeholder="Name"
        style={styles.input}
        value={name}
        onChange={e => setName(e.target.value)}
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
        >
          Delete
        </button> }

        { activity === 'UPDATE' && <button
          type="button"
          className="btn cancel-btn"
          style={{...styles.button, ...styles.cancelBtn}}
        >
          Cancel
        </button> }

      </div>
    </div>
  )
}

export default EditCategory
