import React from 'react'
import LeftFilBtn from './FilterBtnBlock/LeftFilBtn'
import RightFilBtn from './FilterBtnBlock/RightFilBtn'
import { css } from '@emotion/react'

const styles = {
    filBtnBlock: css`
      display: flex;
  `,

  filBtnLeftBlock: css`
    display: flex;
    gap: 10px;
  `,

  filBtnRightBlock: css`
    margin-left: 10px;
    display: flex;
    gap: 15px;
  `,
}

const FilterBtnBlock = () => {
  return (
    <div css={styles.filBtnBlock}>
      <div css={styles.filBtnLeftBlock}>
        <LeftFilBtn>すべて</LeftFilBtn>
        <LeftFilBtn>新着本</LeftFilBtn>
        <LeftFilBtn>HAL</LeftFilBtn>
        <LeftFilBtn>MODE</LeftFilBtn>
        <LeftFilBtn>ISEN</LeftFilBtn>
      </div>
      <div css={styles.filBtnRightBlock}>
        <RightFilBtn>NK管理部を<br/>非表示にする</RightFilBtn>
        <RightFilBtn>禁帯出を<br/>表示する</RightFilBtn>
      </div>
    </div>
  )
}

export default FilterBtnBlock
