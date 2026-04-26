import { useEffect, useRef } from 'react'
import styles from '../styles/components/alertStyles'

const Alert = ({ infoRef, showFlag, updateShowFlag }) => {
  const containerRef = useRef(null)
  const toastRef = useRef(null)

  useEffect(() => {
    const afterHiding = () => {
      updateShowFlag(false)
      if(infoRef.current.onClose)
        infoRef.current.onClose()
    }

    toastRef.current.addEventListener('hidden.bs.toast', afterHiding)

    return () => {
      if(toastRef.current)
        toastRef.current.removeEventListener('hidden.bs.toast', afterHiding)
    }
  }, [])

  useEffect(() => {
    if(showFlag) {
      containerRef.current.style.display = 'flex'
      bootstrap.Toast.getOrCreateInstance(toastRef.current).show()
    }
    else
      containerRef.current.style.display = 'none'
  }, [showFlag])

  return (
    <div ref={containerRef} style={styles.container}>
      <div ref={toastRef} className="toast" role="alert" aria-live="assertive" aria-atomic="true" data-bs-autohide="false">
        <div className="toast-header">
          <strong className="me-auto">{ showFlag && infoRef.current.title }</strong>
          <button type="button" className="btn-close" data-bs-dismiss="toast" aria-label="Close" />
        </div>
        <div className="toast-body">{ showFlag && infoRef.current.msg }</div>
      </div>
    </div>
  )
}

export default Alert
