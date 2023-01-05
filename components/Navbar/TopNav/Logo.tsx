import Link from 'next/link'
import HomeIcon from '@mui/icons-material/Home';
import { css } from '@emotion/react';

const styles = {
  homeBtnBlock: css`
    display: flex;
    align-items: center;
  `,
  homeIcon: css`
    font-size: 2rem;
    color: white;
  `
}

const Logo = () => {
  return (
    <Link href={'/'} css={styles.homeBtnBlock}>
      <HomeIcon css={styles.homeIcon}/>
    </Link>
  )
}

export default Logo