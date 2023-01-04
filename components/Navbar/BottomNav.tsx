import React from 'react'
import styles from "../../styles/Navbar.module.css"

const BottomNav = () => {
  return (
    <div className={styles.navbarBottom}>
      <div className={styles.filteringBtnBlock}>
        <button className={styles.filteringBtn}>すべて</button>
        <button className={styles.filteringBtn}>新着本</button>
        <button className={styles.filteringBtn}>HAL</button>
        <button className={styles.filteringBtn}>MODE</button>
        <button className={styles.filteringBtn}>ISEN</button>
      </div>
    <p>データ更新日:2023/01/04</p>
  </div>
  )
}

export default BottomNav
