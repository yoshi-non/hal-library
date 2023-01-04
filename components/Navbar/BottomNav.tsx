import React from 'react'
import styles from "../../styles/Navbar.module.css"
import FilterBtnBlock from './BottomNav/FilterBtnBlock'

const BottomNav = () => {
  return (
    <div className={styles.navbarBottom}>
      <FilterBtnBlock/>
      <p>データ更新日:2023/01/04</p>
    </div>
  )
}

export default BottomNav
