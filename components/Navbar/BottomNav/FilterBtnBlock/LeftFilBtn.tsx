import React from 'react'
import { css } from '@emotion/react'

const styles = {
  filLeftBtn: css`
    padding: 5px 8px;
    font-size: 1.1rem;
    font-weight: 800;
    color: white;
    background-color: inherit;
    transition: 0.3s;
  `,
}

type Props = {
    children: React.ReactNode
}

const LeftFilBtn = ({children}: Props) => {
  return (
    <button css={styles.filLeftBtn}>
      {children}
    </button>
  )
}

export default LeftFilBtn
