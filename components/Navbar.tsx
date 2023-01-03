import React, { useState } from 'react'
import styles from "../styles/Navbar.module.css"
import SettingsIcon from '@mui/icons-material/Settings';
import SearchIcon from '@mui/icons-material/Search';

const Navbar = () => {
  const [searchText, setSearchText] = useState("");
  return (
    <div className={styles.navbarContainer}>
      {/* ホーム・検索・設定 */}
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

      {/* フィルタリング */}
      <div className={styles.navbarBottom}>
        <div className="filteringbtnBlock">
          <button className={styles.filteringBtn}>すべて</button>
          <button className={styles.filteringBtn}>新着本</button>
          <button className={styles.filteringBtn}>HAL</button>
          <button className={styles.filteringBtn}>MODE</button>
          <button className={styles.filteringBtn}>ISEN</button>
        </div>
        <p>データ更新日:2023/01/04</p>
      </div>
    </div>
  )
}

export default Navbar
