import { css } from '@emotion/react';
import React from 'react';
import { SetCurStep } from '../../../types/SetCurStep';

const styles = {
  stepBlock: css`
    display: flex;
    gap: 5px;
    flex: 1;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  `,

  stepBlock__btn__select: css`
    background: linear-gradient(180deg,#9095ff,hsla(0,0%,100%,0)),#9eb9ff;
    padding: 5px;
    border-radius: 9999px;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  `,

  stepBlock__btn: css`
    background: rgba(229,231,235,1);
    padding: 5px;
    border-radius: 9999px;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  `,

  stepBlock__title: css`
    font-size: 0.9rem;
  `,
}

type Props = {
  children: React.ReactNode
  title: string
  thisStepNum: number
  curStep: number
} & SetCurStep

const StepBlock = ({children, title, thisStepNum, curStep, setCurStep}: Props) => {
  return (
    <div css={styles.stepBlock}>
      <button
        onClick={() => setCurStep(thisStepNum)}
        css={ thisStepNum <= curStep ? styles.stepBlock__btn__select : styles.stepBlock__btn}
      >
        {children}
      </button>
      <p css={styles.stepBlock__title}>{title}</p>
    </div>
  )
}

export default StepBlock
