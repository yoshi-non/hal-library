import Search from './TopNav/Search'
import Logo from './TopNav/Logo'
import ShowDescription from './TopNav/ShowDescription'
import NewRequestBtn from './TopNav/NewRequestBtn'
import { css } from "@emotion/react";
import { SetBookData } from '../../types/SetBookData'
import SettingBtn from './TopNav/SettingBtn'

const styles = {
  navbarTop: css`
    display: flex;
    gap: 20px;
    justify-content: space-between;
    align-items: center;
    background-color: #131921;
    padding: 12px;
    @media screen and (max-width: 930px) {
      flex-direction: column;
      gap: 10px;
    }
  `,

  leftBlock: css`
    display: flex;
    align-items: center;
    gap: 20px;
    @media screen and (max-width: 930px) {
      justify-content: space-between;
      width: 100%;
    }
  `,

  leftBlock__btn: css`
    @media screen and (max-width: 930px) {
      display: flex;
      align-items: center;
      gap: 20px;
    }
    @media screen and (min-width: 930px) {
      display: none;
    }
  `,

  rightBlock: css`
    display: flex;
    align-items: center;
    gap: 20px;
    @media screen and (max-width: 930px) {
      width: 100%;
      display: flex;
      justify-content: space-between;
    }
  `,

  rightBlock__btn: css`
    @media screen and (max-width: 930px) {
      display: none;
    }
    @media screen and (min-width: 930px) {
      display: flex;
      align-items: center;
      gap: 20px;
    }
  `
}

const TopNav = ({setBookData}: SetBookData) => {
  return (
    <div css={styles.navbarTop}>
      <div css={styles.leftBlock}>
        <Logo/>
        <Search setBookData={setBookData}/>

        {/* 画面サイズが小さいとき右上に表示 */}
        <div css={styles.leftBlock__btn}>
          <NewRequestBtn/>
          <SettingBtn/>
        </div>
      </div>

      <div css={styles.rightBlock}>
        <ShowDescription/>

        {/* 通常の位置 */}
        <div css={styles.rightBlock__btn}>
          <NewRequestBtn/>
          <SettingBtn/>
        </div>
      </div>
    </div>
  )
}

export default TopNav
