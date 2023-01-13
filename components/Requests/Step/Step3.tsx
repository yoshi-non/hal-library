import { css } from "@emotion/react"
import { SetReasonValue } from "../../../types/Step"

const styles = {
  inputBlock: css`
    width: 90%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 5px;
    margin-bottom: 2.5rem;
  `,

  inputBlock__title: css`
    font-weight: 900;
    color: rgba(107,114,128,1);
  `,

  inputBlock__textarea: css`
    height: 100px;
    width: 100%;
    font-size: 1.2rem;
    font-weight: 900;
    border: 1px solid gray;
    border-radius: 5px;
    padding: 0.75rem 1rem;
    background-color: rgba(243,244,246,1);
    &::placeholder {
      color: rgba(107,114,128,1);
    }
  `,

}

type Props = {
  reasonValue: string
} & SetReasonValue

const Step3 = ({reasonValue, setReasonValue}: Props) => {
  return (
    <>
      <div css={styles.inputBlock}>
        <span css={styles.inputBlock__title}>リクエスト理由（具体的に記載すること）</span>
        <textarea
          onChange={(e) => setReasonValue(e.target.value)}
          value={reasonValue}
          placeholder="リクエスト理由"
          maxLength={120}
          css={styles.inputBlock__textarea}
        />
      </div>
    </>
  )
}

export default Step3
