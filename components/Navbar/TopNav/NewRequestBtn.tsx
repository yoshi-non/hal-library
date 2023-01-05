import React from 'react'
import { css } from '@emotion/react'

const styles = {
  newRequestBtn: css`
    padding: 4px 10px;
    font-weight: 800;
    color: white;
    background-color: inherit;
    border: 2px solid white;
    border-radius: 10px;
    transition: 0.3s;
  `,
}

const NewRequestBtn = () => {
  return (
    <button css={styles.newRequestBtn}>新しい書籍の<br/>申請はこちら</button>
  )
}

export default NewRequestBtn
