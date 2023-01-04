import React from 'react'
import FilterBtnBlock from './BottomNav/FilterBtnBlock'
import { css } from '@emotion/react'

const styles = {
  navbarBottom: css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #232f3e;
    padding: 8px;
  `,
}

const BottomNav = () => {
  return (
    <div css={styles.navbarBottom}>
      <FilterBtnBlock/>
      <p>データ更新日:2023/01/04</p>
    </div>
  )
}

export default BottomNav
