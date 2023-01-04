import React from 'react'
import styles from "../../../styles/Navbar.module.css"
import LeftFilBtn from './FilterBtnBlock/LeftFilBtn'
import RightFilBtn from './FilterBtnBlock/RightFilBtn'

const FilterBtnBlock = () => {
  return (
    <div className={styles.filBtnBlock}>
      <div className={styles.filBtnLeftBlock}>
        <LeftFilBtn>すべて</LeftFilBtn>
        <LeftFilBtn>新着本</LeftFilBtn>
        <LeftFilBtn>HAL</LeftFilBtn>
        <LeftFilBtn>MODE</LeftFilBtn>
        <LeftFilBtn>ISEN</LeftFilBtn>
      </div>
      <div className={styles.filBtnRightBlock}>
        <RightFilBtn>NK管理部を<br/>非表示にする</RightFilBtn>
        <RightFilBtn>禁帯出を<br/>表示する</RightFilBtn>
      </div>
    </div>
  )
}

export default FilterBtnBlock
