import LeftFilBtn from './FilterBtnBlock/LeftFilBtn'
import RightFilBtn from './FilterBtnBlock/RightFilBtn'
import { css } from '@emotion/react'
import { SetBookData } from '../../../types/SetBookData'

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

const FilterBtnBlock = ({setBookData}: SetBookData) => {
  return (
    <div css={styles.filBtnBlock}>
      <div css={styles.filBtnLeftBlock}>
        <LeftFilBtn
          contents="すべて"
          setBookData={setBookData}
        />
        <LeftFilBtn
          contents="新着本"
          setBookData={setBookData}
        />
        <LeftFilBtn
          contents="HAL"
          setBookData={setBookData}
        />
        <LeftFilBtn
          contents="MODE"
          setBookData={setBookData}
        />
        <LeftFilBtn
          contents="ISEN"
          setBookData={setBookData}
        />
      </div>
      <div css={styles.filBtnRightBlock}>
        <RightFilBtn 
          contents="NK管理部を"
          setBookData={setBookData}
        />
        <RightFilBtn
          contents="禁帯出を"
          setBookData={setBookData}
        />
      </div>
    </div>
  )
}

export default FilterBtnBlock
