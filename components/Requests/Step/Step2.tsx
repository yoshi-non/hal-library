import { css } from "@emotion/react"
import { useEffect, useState } from "react"
import { SetAuthorValue, SetBooknameValue, SetCompanyValue, SetRemarksValue } from "../../../types/Step"
import InputBlock from "./InputBlock"

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
  booknameValue: string
  authorValue: string
  companyValue: string
  remarksValue: string
} & SetBooknameValue & SetAuthorValue & SetCompanyValue & SetRemarksValue

const Step2 = ({booknameValue, authorValue, companyValue, remarksValue, setBooknameValue, setAuthorValue, setCompanyValue, setRemarksValue}: Props) => {
  const [booknameCnt, setBooknameCnt] = useState(0)
  const [authorCnt, setAuthorCnt] = useState(0)
  const [companyCnt, setCompanyCnt] = useState(0)
  const [remarksCnt, setRemarksCnt] = useState(0)
  useEffect(() => {
    setBooknameCnt(booknameValue.length)
  }, [booknameValue])
  useEffect(() => {
    setAuthorCnt(authorValue.length)
  }, [authorValue])
  useEffect(() => {
    setCompanyCnt(companyValue.length)
  }, [companyValue])
  useEffect(() => {
    setRemarksCnt(remarksValue.length)
  }, [remarksValue])

  return (
    <>
      <InputBlock
        title="書籍名"
        count={booknameCnt}
        isHalf={false}
        maxCount={80}
      >
        <input
          type="text"
          onChange={(e) => setBooknameValue(e.target.value)}
          value={booknameValue}
          placeholder="書籍名"
          maxLength={80}
          css={styles.inputBlock__input}
        />
      </InputBlock>
      <div css={styles.inputHalfBlockBox}>
        <InputBlock
          title="著名者（わかっている場合）"
          count={authorCnt}
          isHalf={true}
          maxCount={40}
        >
          <input
            type="text"
            onChange={(e) => setAuthorValue(e.target.value)}
            value={authorValue}
            placeholder="著名者"
            maxLength={40}
            css={styles.inputBlock__input}
          />
        </InputBlock>
        <InputBlock
          title="出版社名（わかっている場合）"
          count={companyCnt}
          isHalf={true}
          maxCount={40}
        >
          <input
            type="text"
            onChange={(e) => setCompanyValue(e.target.value)}
            value={companyValue}
            placeholder="出版社名"
            maxLength={40}
            css={styles.inputBlock__input}
          />
        </InputBlock>

      </div>
      <InputBlock
        title="書籍名が決まっていない場合、ジャンル・内容など"
        count={remarksCnt}
        isHalf={false}
        maxCount={120}
      >
        <input
          type="text"
          onChange={(e) => setRemarksValue(e.target.value)}
          value={remarksValue}
          placeholder="ジャンル・内容など"
          maxLength={120}
          css={styles.inputBlock__input}
        />
      </InputBlock>
    </>
  )
}

export default Step2