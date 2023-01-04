import React, { useState } from 'react'
import SearchIcon from '@mui/icons-material/Search'
import styles from "../../../styles/Navbar.module.css"

const Search = () => {
  const [searchText, setSearchText] = useState("");

  return (
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
  )
}

export default Search
