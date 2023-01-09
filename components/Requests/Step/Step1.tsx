import { css } from "@emotion/react";
import { SetClassValue, SetSchoolValue, SetUsernameValue } from "../../../types/Step";
import InfoBlock from "./common/InfoBlock"

const styles = {
  topInputBlock: css`
    margin-bottom: 2.5rem;
  `,
  schoolValueBlock: css`
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

  bottomInputBlock: css`
    width: 90%;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    gap: 40px;
    margin-bottom: 2.5rem;
  `,

  classValueBlock: css`
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 5px;
  `,
  
  usernameValueBlock: css`
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 5px;
  `,
}

type Props = {
  classValue: string
  usernameValue: string
} & SetSchoolValue & SetClassValue & SetUsernameValue

const Step1 = ({classValue, usernameValue, setSchoolValue, setClassValue, setUsernameValue }: Props) => {
  return (
    <div>
      <InfoBlock/>
      <div css={styles.topInputBlock}>
        <div css={styles.schoolValueBlock}>
          <span css={styles.inputBlock__title}>学校名</span>
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
        </div>
      </div>

      <div css={styles.bottomInputBlock}>
        <div css={styles.classValueBlock}>
          <span css={styles.inputBlock__title}>クラス記号</span>
          <input
            type="text"
            onChange={(e) => setClassValue(e.target.value)}
            value={classValue}
            placeholder="IT99"
            css={styles.inputBlock__input}
          />
        </div>

        <div css={styles.usernameValueBlock}>
          <span css={styles.inputBlock__title}>氏名</span>
          <input
            type="text"
            onChange={(e) => setUsernameValue(e.target.value)}
            value={usernameValue}
            placeholder="名前太郎"
            css={styles.inputBlock__input}
          />
        </div>
      </div>
    </div>
  )
}

export default Step1
