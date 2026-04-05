import { useEffect, useRef } from 'react'
import styles from '../styles/components/alertStyles'

const Alert = ({ data, show, updateFlag }) => {
  const containerRef = useRef(null)
  const toastRef = useRef(null)

  useEffect(() => {
    if(show) {
      containerRef.current.style.display = 'flex'
      bootstrap.Toast.getOrCreateInstance(toastRef.current).show()
    }
    else
      containerRef.current.style.display = 'none'
  }, [show])

  useEffect(() => {
    const afterHiding = () => updateFlag(false)

    toastRef.current.addEventListener('hidden.bs.toast', afterHiding)

    return () => {
      if(toastRef.current)
        toastRef.current.removeEventListener('hidden.bs.toast', afterHiding)
    }
  }, [])

  return (
    <div ref={containerRef} style={styles.container}>
      <div ref={toastRef} className="toast" role="alert" aria-live="assertive" aria-atomic="true" data-bs-autohide="false">
        <div className="toast-header">
          <strong className="me-auto">{ data.title }</strong>
          <button type="button" className="btn-close" data-bs-dismiss="toast" aria-label="Close" />
        </div>
        <div className="toast-body">{ data.msg }</div>
      </div>
    </div>
  )
}

export default Alert
