import React from 'react'
import styles from "../../../styles/Navbar.module.css"


const ShowDescription = () => {
  return (
    <div className={styles.showDescBlock}>
      <div className={styles.showDesc}>
        <div className={styles.showDesc__normal}>通常 : <p className={styles.showDesc__normalColor}></p></div>
        <div className={styles.showDesc__ban}>禁帯出 :<p className={styles.showDesc__banColor}></p></div>
      </div>
      <p>※NK管理部は図書館にはありません</p>
    </div>
  )
}

export default ShowDescription
