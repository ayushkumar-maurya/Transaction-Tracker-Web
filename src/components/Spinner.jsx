import styles from "../styles/components/spinnerStyles"

const Spinner = () => {
  return (
    <div style={styles.container}>
      <div className="spinner-border" role="status" style={styles.spinner}>
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  )
}

export default Spinner
