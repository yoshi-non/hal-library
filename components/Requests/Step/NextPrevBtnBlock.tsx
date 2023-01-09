import { css } from "@emotion/react";
import { SetCurStep } from "../../../types/SetCurStep"

const styles = {
  nextPrevBtnBlock: css`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  `,
  nextPrevBtn: css`
    flex: 1;
    font-size: 1.2rem;
    font-weight: 900;
    color: rgba(96,165,250,1);
    background-color: inherit;
  `,
}

type Props = {
  curStep: number
} & SetCurStep

const NextPrevBtnBlock = ({curStep, setCurStep}: Props) => {
  return (
    <div css={styles.nextPrevBtnBlock}>
      {curStep !== 0 ? (
        <button
        onClick={() => setCurStep(prevState => prevState - 1)}
        css={styles.nextPrevBtn}
        >
          戻る
        </button>
      ) : (
        <div css={styles.nextPrevBtn}></div>
      )}
      {curStep !==3 ? (
        <button
          onClick={() => setCurStep(prevState => prevState + 1)}
          css={styles.nextPrevBtn}
        >
          次へ
        </button>
      ) : (
        <div css={styles.nextPrevBtn}></div>
      )}
    </div>
  )
}

export default NextPrevBtnBlock