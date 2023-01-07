import { css } from '@emotion/react'
import Link from 'next/link'

const styles = {
  newRequestBtn: css`
    padding: 4px 10px;
    font-weight: 800;
    color: white;
    background-color: inherit;
    border: 2px solid white;
    border-radius: 10px;
    transition: 0.3s;
    min-width: 104px;
    @media screen and (max-width: 930px) {
      padding: 2px 6px;
      font-size: 0.9rem;
      min-width: 90px;
    }
  `,
}

const NewRequestBtn = () => {
  return (
    <Link href={'/book-request'}>
      <button css={styles.newRequestBtn}>新しい書籍の<br/>申請はこちら</button>
    </Link>
  )
}

export default NewRequestBtn
