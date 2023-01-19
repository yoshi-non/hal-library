import { css } from "@emotion/react";
import React from 'react'

const styles = {
  inputBlock: css`
    width: 90%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 5px;
    margin-bottom: 2.5rem;
  `,
  
  inputBlock__titleBox: css`
    display: flex;
    justify-content: space-between;
    align-items: center;
  `,
  
  inputBlock__title: css`
    font-weight: 900;
    color: rgba(107,114,128,1);
  `,
  
  inputBlock__count: css`
    font-weight: 900;
    color: #6490e7;
  `,
  
  inputBlock__input: css`
    font-size: 1.2rem;
    border: 1px solid gray;
    border-radius: 5px;
    padding: 0.75rem 1rem;
    background-color: rgba(243,244,246,1);
    &::placeholder {
      color: rgba(107,114,128,1);
    }
  `,
  
  inputHalfBlock: css`
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 5px;
  `,  
}
  
type Props = {
    children: React.ReactNode
    title: string
    count?: number
    maxCount?: number
    isHalf?: boolean
}

const InputBlock = ({children, title, count, maxCount, isHalf}: Props) => {
  return (
    // ハーフブロックかどうかで表示変更させる
    <div css={isHalf ? styles.inputHalfBlock : styles.inputBlock}>
        <div css={styles.inputBlock__titleBox}>
        <span css={styles.inputBlock__title}>{title}</span>
        {maxCount && (
          <span css={styles.inputBlock__count}>{count}/{maxCount}</span>
        )}
        </div>
        {children}
    </div>
  )
}

export default InputBlock