import BottomNav from './Navbar/BottomNav'
import TopNav from './Navbar/TopNav'
import { css } from "@emotion/react"
import { SetBookData } from '../types/SetBookData'

const styles = {
  navbarContainer: css`
    color: white;
    font-weight: 900;
  `,
}


const Navbar = ({setBookData}: SetBookData) => {
  return (
    <div css={styles.navbarContainer}>
      {/* ホーム・検索・設定 */}
      <TopNav setBookData={setBookData}/>

      {/* フィルタリング */}
      <BottomNav setBookData={setBookData}/>
    </div>
  )
}

export default Navbar
