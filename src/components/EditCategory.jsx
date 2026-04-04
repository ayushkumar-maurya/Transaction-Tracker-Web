import styles from "../styles/editCategoryStyles"
import '../css/EditCategory.css'

const EditCategory = ({ method, path }) => {
  const category = null
  const activity = category ? 'UPDATE' : 'ADD'
  const capActivity = activity.charAt(0).toUpperCase() + activity.slice(1).toLowerCase()

  return (
    <div className="form-container" style={styles.formContainer}>
      <label htmlFor="name" className="form-label" style={styles.label}>Name</label>
      <input type="text" className="form-control" id="name" placeholder="Name" style={styles.input} />

      <label htmlFor="desc" className="form-label" style={styles.label}>Description</label>
      <textarea className="form-control" id="desc" rows="3" placeholder="Description"
        style={{...styles.input, ...styles.textarea}} />

      <div style={styles.btnContainer}>
        <button type="button" className="btn edit-btn" style={{...styles.button, ...styles.editBtn}}>
          { capActivity }
        </button>

        <button type="button" className="btn danger-btn" style={{...styles.button, ...styles.deleteBtn}}>
          Delete
        </button>

        <button type="button" className="btn cancel-btn" style={{...styles.button, ...styles.cancelBtn}}>
          Cancel
        </button>
      </div>
    </div>
  )
}

export default EditCategory
