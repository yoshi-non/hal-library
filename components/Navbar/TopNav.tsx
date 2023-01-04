import React from 'react'
import SettingsIcon from '@mui/icons-material/Settings'
import styles from "../../styles/Navbar.module.css"
import Search from './TopNav/Search'
import Logo from './TopNav/Logo'
import ShowDescription from './TopNav/ShowDescription'
import NewRequestBtn from './TopNav/NewRequestBtn'

const TopNav = () => {

  return (
    <div className={styles.navbarTop}>
      <Logo/>
      <Search/>

      <div className={styles.rightBlock}>
        <ShowDescription/>
        <NewRequestBtn/>
        <SettingsIcon/>
      </div>
    </div>
  )
}

export default TopNav
