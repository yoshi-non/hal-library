import { css } from "@emotion/react"
import { useEffect, useState } from "react"
import { SetReasonValue } from "../../../types/Step"
import InputBlock from "./InputBlock"

const styles = {
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
  const [reasonCnt, setReasonCnt] = useState(0)
  useEffect(() => {
    setReasonCnt(reasonValue.length)
  }, [reasonValue])
  return (
    <>
      <InputBlock
        title="リクエスト理由（具体的に記載すること）"
        count={reasonCnt}
        isHalf={false}
        maxCount={120}
      >
        <textarea
          onChange={(e) => setReasonValue(e.target.value)}
          value={reasonValue}
          placeholder="リクエスト理由"
          maxLength={120}
          css={styles.inputBlock__textarea}
        />
      </InputBlock>
    </>
  )
}

export default Step3
