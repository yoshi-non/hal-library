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
      font-size: 0.8rem;
    }
  `,

  container__pc: css`
    display: flex;
    align-items: center;
    gap: 20px;
    justify-content: space-between;
    width: 100%;
  `,

  container__pc__leftBlock: css`
    display: flex;
    align-items: center;
    gap: 20px;
  `,
  container__pc__rightBlock: css`
    display: flex;
    align-items: center;
    gap: 20px;
  `,

  searchBlock: css`
    /* スマホのときは非表示 */
    @media screen and (max-width: 930px) {
      display: none;
    }
  `,

  searchBlock__sm: css`
    /* スマホ以外のときは非表示 */
    @media screen and (min-width: 930px) {
      display: none;
    }
  `,
}

const TopNav = ({setBookData}: SetBookData) => {
  return (
    <div css={styles.navbarTop}>
      <div css={styles.container__pc}>
        <div css={styles.container__pc__leftBlock}>
          <Logo/>
          <div css={styles.searchBlock}>
            <Search setBookData={setBookData}/>
          </div>
        </div>
        <div css={styles.container__pc__rightBlock}>
          <ShowDescription/>
          <NewRequestBtn/>
          <SettingBtn/>
        </div>
      </div>

      <div css={styles.searchBlock__sm}>
        <Search setBookData={setBookData}/>
      </div>

    </div>
  )
}

export default TopNav
