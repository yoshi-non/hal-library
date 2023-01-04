import React from 'react'
import styles from "../styles/Navbar.module.css"
import BottomNav from './Navbar/BottomNav'
import TopNav from './Navbar/TopNav'

const Navbar = () => {
  return (
    <div className={styles.navbarContainer}>
      {/* ホーム・検索・設定 */}
      <TopNav/>

      {/* フィルタリング */}
      <BottomNav/>
    </div>
  )
}

export default Navbar
