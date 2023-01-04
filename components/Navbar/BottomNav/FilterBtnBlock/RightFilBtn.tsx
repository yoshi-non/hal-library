import React from 'react'
import { css } from '@emotion/react'

const styles = {
  filRightBtn__show: css`
    min-width: 110px;
    padding: 5px 8px;
    font-size: 0.9rem;
    font-weight: 800;
    color: #131921;
    background-color: #febd69;
    border: 2px solid #febd69;
    border-radius: 10px;
    transition: 0.3s;
  `,

  filRightBtn__hidden: css`
    min-width: 110px;
    padding: 5px 8px;
    font-size: 0.9rem;
    font-weight: 800;
    color: white;
    background-color: inherit;
    border: 2px solid white;
    border-radius: 10px;
    transition: 0.3s;
  `,
}

type Props = {
    children: React.ReactNode
}

const RightFilBtn = ({children}: Props) => {
  return (
    <button css={styles.filRightBtn__show}>
      {children}
    </button>
  )
}

export default RightFilBtn