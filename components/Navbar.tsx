import React from 'react'
import BottomNav from './Navbar/BottomNav'
import TopNav from './Navbar/TopNav'
import { css } from "@emotion/react"

const styles = {
  navbarContainer: css`
    color: white;
    font-weight: 900;
    margin-bottom: 10px;
  `,
}

const Navbar = () => {
  return (
    <div css={styles.navbarContainer}>
      {/* ホーム・検索・設定 */}
      <TopNav/>

      {/* フィルタリング */}
      <BottomNav/>
    </div>
  )
}

export default Navbar
