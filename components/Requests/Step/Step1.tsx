import { css } from "@emotion/react";
import { useEffect, useState } from "react";
import { SetClassValue, SetSchoolValue, SetUsernameValue } from "../../../types/Step";
import InputBlock from "./InputBlock";

const styles = {
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

  inputHalfBlockBox: css`
    width: 90%;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    gap: 40px;
    margin-bottom: 2.5rem;
  `,
}

type Props = {
  classValue: string
  usernameValue: string
} & SetSchoolValue & SetClassValue & SetUsernameValue

const Step1 = ({classValue, usernameValue, setSchoolValue, setClassValue, setUsernameValue }: Props) => {
  const [classCnt, setClassCnt] = useState(0)
  const [usernameCnt, setUsernameCnt] = useState(0)
  useEffect(() => {
    setClassCnt(classValue.length)
  }, [classValue])
  useEffect(() => {
    setUsernameCnt(usernameValue.length)
  }, [usernameValue])
  
  return (
    <>
      <InputBlock
        title="学校名"
      >
        <select
          onChange={(e) => setSchoolValue(e.target.value)}
          css={styles.inputBlock__input}
        >
          <option value=""></option>
          <option value="MODE">MODE</option>
          <option value="HAL">HAL</option>
          <option value="ISEN">ISEN</option>
          <option value="PIIF">PIIF</option>
          <option value="IPUT">IPUT</option>
        </select>
      </InputBlock>

      <div css={styles.inputHalfBlockBox}>
        <InputBlock
          title="クラス記号"
          count={classCnt}
          isHalf={true}
          maxCount={20}
          >
          <input
            type="text"
            onChange={(e) => setClassValue(e.target.value)}
            value={classValue}
            placeholder="IT99"
            maxLength={20}
            css={styles.inputBlock__input}
          />
        </InputBlock>

        <InputBlock
          title="氏名"
          count={usernameCnt}
          isHalf={true}
          maxCount={20}
        >
          <input
            type="text"
            onChange={(e) => setUsernameValue(e.target.value)}
            value={usernameValue}
            placeholder="名前太郎"
            maxLength={20}
            css={styles.inputBlock__input}
          />
        </InputBlock>
      </div>
    </>
  )
}

export default Step1
