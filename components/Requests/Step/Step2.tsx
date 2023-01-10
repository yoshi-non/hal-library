import { css } from "@emotion/react"
import { SetAuthorValue, SetBooknameValue, SetCompanyValue, SetRemarksValue } from "../../../types/Step"

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

  inputHalfBlock: css`
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 5px;
  `,  
}

type Props = {
  booknameValue: string
  authorValue: string
  companyValue: string
  remarksValue: string
} & SetBooknameValue & SetAuthorValue & SetCompanyValue & SetRemarksValue

const Step2 = ({booknameValue, authorValue, companyValue, remarksValue, setBooknameValue, setAuthorValue, setCompanyValue, setRemarksValue}: Props) => {
  return (
    <>
      <div css={styles.inputBlock}>
        <span css={styles.inputBlock__title}>書籍名</span>
        <input
          type="text"
          onChange={(e) => setBooknameValue(e.target.value)}
          value={booknameValue}
          placeholder="書籍名"
          css={styles.inputBlock__input}
        />
      </div>

      <div css={styles.inputHalfBlockBox}>
        <div css={styles.inputHalfBlock}>
          <span css={styles.inputBlock__title}>著名者（わかっている場合）</span>
          <input
            type="text"
            onChange={(e) => setAuthorValue(e.target.value)}
            value={authorValue}
            placeholder="著名者"
            css={styles.inputBlock__input}
          />
        </div>
        <div css={styles.inputHalfBlock}>
          <span css={styles.inputBlock__title}>出版社名（わかっている場合）</span>
          <input
            type="text"
            onChange={(e) => setCompanyValue(e.target.value)}
            value={companyValue}
            placeholder="出版社名"
            css={styles.inputBlock__input}
          />
        </div>
      </div>
      <div css={styles.inputBlock}>
        <span css={styles.inputBlock__title}>書籍名が決まっていない場合、ジャンル・内容など</span>
        <input
          type="text"
          onChange={(e) => setRemarksValue(e.target.value)}
          value={remarksValue}
          placeholder="ジャンル・内容など"
          css={styles.inputBlock__input}
        />
      </div>
    </>
  )
}

export default Step2