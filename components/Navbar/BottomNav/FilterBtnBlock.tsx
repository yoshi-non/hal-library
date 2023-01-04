import LeftFilBtn from './FilterBtnBlock/LeftFilBtn'
import RightFilBtn from './FilterBtnBlock/RightFilBtn'
import { css } from '@emotion/react'
import { SetBookData } from '../../../types/SetBookData'
import { useState } from 'react'
import { SetFilterContents } from '../../../types/SetFilterContents'

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
  const [filterContents, setFilterContents] = useState<string>("")
  const [filterContentsTheme, setFilterContentsTheme] = useState<string>("")
  const arrContentsTheme = ["すべて", "新着本", "HAL", "MODE", "ISEN", "NK管理部"]

  return (
    <div css={styles.filBtnBlock}>
      <div css={styles.filBtnLeftBlock}>
        {arrContentsTheme.map((contentsTheme, index) => (
          <LeftFilBtn
            key={index}
            contents={contentsTheme}
            setBookData={setBookData}
            setFilterContentsTheme={setFilterContentsTheme}
            filterContents={filterContents}
          />
        ))}
      </div>
      <div css={styles.filBtnRightBlock}>
        <RightFilBtn
          contents="禁帯出"
          setBookData={setBookData}
          setFilterContents={setFilterContents}
          filterContentsTheme={filterContentsTheme}
        />
      </div>
    </div>
  )
}

export default FilterBtnBlock
