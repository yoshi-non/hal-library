import BottomNav from './Navbar/BottomNav'
import TopNav from './Navbar/TopNav'
import { css } from "@emotion/react"
import { SetBookDataProps } from '../types/SetBookDataProps'

const styles = {
  navbarContainer: css`
    color: white;
    font-weight: 900;
    margin-bottom: 10px;
  `,
}


const Navbar = ({setBookData}: SetBookDataProps) => {
  return (
    <div css={styles.navbarContainer}>
      {/* ホーム・検索・設定 */}
      <TopNav setBookData={setBookData}/>

      {/* フィルタリング */}
      <BottomNav/>
    </div>
  )
}

export default Navbar
