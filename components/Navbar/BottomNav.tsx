import FilterBtnBlock from './BottomNav/FilterBtnBlock'
import { css } from '@emotion/react'
import { SetBookData } from '../../types/SetBookData'

const styles = {
  navbarBottom: css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #232f3e;
    padding: 8px;
  `,

  updateDate: css`
    @media screen and (max-width: 930px) {
      display: none;
    }
  `,
}

const BottomNav = ({setBookData}: SetBookData) => {
  return (
    <div css={styles.navbarBottom}>
      <FilterBtnBlock setBookData={setBookData}/>
      <p css={styles.updateDate}>データ更新日:2023/01/04</p>
    </div>
  )
}

export default BottomNav
