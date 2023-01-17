import BottomNav from './BottomNav'
import TopNav from './TopNav'
import { css } from "@emotion/react"
import { SetBookData } from '../../types/SetBookData'
import { useRouter } from 'next/router'

const styles = {
  navbarContainer: css`
    color: white;
    font-weight: 900;
    font-size: 1.1rem;
  `,
}

const Navbar = ({setBookData}: SetBookData) => {
  const router = useRouter()
  console.log(router.pathname);
  return (
    <div css={styles.navbarContainer}>
      {/* ホーム・検索・設定 */}
      <TopNav setBookData={setBookData}/>

      {/* フィルタリング */}
      {router.pathname == "/" && (
        <BottomNav setBookData={setBookData}/>
      )}
    </div>
  )
}

export default Navbar
