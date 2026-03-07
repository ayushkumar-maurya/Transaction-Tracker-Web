import { useState, useRef, useEffect } from 'react'
import styles from '../styles/homeStyles'
import MenuItem from "./Utility/MenuItem"

const Home = () => {
  const iconDirPath = '/home/'
  const [nEmptyItemsToAdd, setNEmptyItemsToAdd] = useState(null)
  const containerRef = useRef(null)

  useEffect(() => {
    const calcNEmptyItemsToAdd = () => {
      let containerWidth = containerRef.current.offsetWidth
      // 20 is the container padding.
      // 250 + 20 is the item's width + margin.
      let nItemsInRow = Math.trunc((containerWidth - 20) / (250 + 20))
      let nItemsInLastRow = menuOptions.length % nItemsInRow
      if(nItemsInLastRow === 0)
        nItemsInLastRow = nItemsInRow
      return nItemsInRow - nItemsInLastRow
    }

    setNEmptyItemsToAdd(calcNEmptyItemsToAdd())

    const handleResize = () => {
      setNEmptyItemsToAdd(calcNEmptyItemsToAdd())
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize);
    }
  }, [])

  const menuOptions = [
  { path: '/bank', iconPath: `${iconDirPath}bank.png`, title: 'Bank' },
  { path: '/stock', iconPath: `${iconDirPath}stock.png`, title: 'Stock' }
  ]

  return (
    <div className='container-fluid' style={styles.container} ref={containerRef}>
      <div style={styles.childContainer}>

        {menuOptions.map((opt, index) =>
          <MenuItem
            path={opt.path}
            iconPath={opt.iconPath}
            title={opt.title}
            key={index}
          />
        )}

        {Array.from({length: nEmptyItemsToAdd}).map((_, i) =>
          <div style={styles.empty} key={i} />
        )}

      </div>
    </div>
  )
}

export default Home
