import React, { useState } from 'react'
import SettingsIcon from '@mui/icons-material/Settings'
import SearchIcon from '@mui/icons-material/Search'
import styles from "../../styles/Navbar.module.css"

const TopNav = () => {
  const [searchText, setSearchText] = useState("");

  return (
    <div className={styles.navbarTop}>
      <div>
        ロゴ(後でいれる)
      </div>
      <div className={styles.searchBlock}>
        <input
          className={styles.searchInput}
          value={searchText}
          onChange={(event) => setSearchText(event.target.value)}
          placeholder="検索"
        />
        <button className={styles.searchBtn}>
          <SearchIcon className={styles.searchIcon}/>
        </button>
      </div>
      <div className={styles.showDescBlock}>
        <div className={styles.showDesc}>
          <div className={styles.showDesc__normal}>通常 : <p className={styles.showDesc__normalColor}></p></div>
          <div className={styles.showDesc__ban}>禁帯出 :<p className={styles.showDesc__banColor}></p></div>
        </div>
        <p>※NK管理部は図書館にはありません</p>
      </div>

      <div className={styles.rightBlock}>
        <button className={styles.newRequestBtn}>新しい書籍の<br/>申請はこちら</button>
        <SettingsIcon/>
      </div>
    </div>
  )
}

export default TopNav
