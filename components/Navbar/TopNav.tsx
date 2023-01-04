import React from 'react'
import SettingsIcon from '@mui/icons-material/Settings'
import Search from './TopNav/Search'
import Logo from './TopNav/Logo'
import ShowDescription from './TopNav/ShowDescription'
import NewRequestBtn from './TopNav/NewRequestBtn'
import { css } from "@emotion/react";
import { SetBookDataProps } from '../../types/SetBookDataProps'

const styles = {
  navbarTop: css`
    display: flex;
    gap: 20px;
    justify-content: space-between;
    align-items: center;
    background-color: #131921;
    padding: 12px;
  `,
  rightBlock: css`
    display: flex;
    align-items: center;
    gap: 20px;
  `,
}

const TopNav = ({setBookData}: SetBookDataProps) => {
  return (
    <div css={styles.navbarTop}>
      <Logo/>
      <Search setBookData={setBookData}/>

      <div css={styles.rightBlock}>
        <ShowDescription/>
        <NewRequestBtn/>
        <SettingsIcon/>
      </div>
    </div>
  )
}

export default TopNav
