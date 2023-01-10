import { css } from "@emotion/react";
import { useState } from "react";
import Progressbar from "./Progressbar";
import InfoBlock from "./Step/InfoBlock";
import NextPrevBtnBlock from "./Step/NextPrevBtnBlock";
import Step1 from "./Step/Step1";
import Step2 from "./Step/Step2";
import Step3 from "./Step/Step3";
import Step4 from "./Step/Step4";

const styles = {
  container: css`
    max-width: 1200px;
    margin: 0 auto;
    padding: 10px;
  `,

  curStepTitle: css`
    font-weight: 900;
    font-size: 1.1rem;
  `,
}

const Requests = () => {
  const [curStep, setCurStep] = useState<number>(0) //現在のStep位置
  const curStepTitle = ["プロフィール", "書籍情報", "リクエスト理由", "ダウンロード"]

  // Step1
  const [schoolValue, setSchoolValue] = useState("")
  const [classValue, setClassValue] = useState("")
  const [usernameValue, setUsernameValue] = useState("")

  // Step2
  const [booknameValue, setBooknameValue] = useState("")
  const [authorValue, setAuthorValue] = useState("")
  const [companyValue, setCompanyValue] = useState("")
  const [remarksValue, setRemarksValue] = useState("")

  // Step3
  const [reasonValue, setReasonValue] = useState("")

  return (
    <div css={styles.container}>
      <div css={styles.curStepTitle}>{curStepTitle[curStep]}</div>
      <Progressbar curStep={curStep} setCurStep={setCurStep}/>

      {curStep === 0 && (
        <>
          <InfoBlock/>
          <Step1
            classValue={classValue}
            usernameValue={usernameValue}
            setSchoolValue={setSchoolValue}
            setClassValue={setClassValue}
            setUsernameValue={setUsernameValue}
          />
          <NextPrevBtnBlock
            curStep={curStep}
            setCurStep={setCurStep}
          />
        </>
      )}
      {curStep === 1 && (
        <>
          <InfoBlock/>
          <Step2
            booknameValue={booknameValue}
            authorValue={authorValue}
            companyValue={companyValue}
            remarksValue={remarksValue}
            setBooknameValue={setBooknameValue}
            setAuthorValue={setAuthorValue}
            setCompanyValue={setCompanyValue}
            setRemarksValue={setRemarksValue}
          />
          <NextPrevBtnBlock
            curStep={curStep}
            setCurStep={setCurStep}
          />
        </>
      )}
      {curStep === 2 && (
        <>
          <InfoBlock/>
          <Step3
            reasonValue={reasonValue}
            setReasonValue={setReasonValue}
          />
          <NextPrevBtnBlock
            curStep={curStep}
            setCurStep={setCurStep}
          />
        </>
      )}
      {curStep === 3 && (
        <>
          <Step4/>
          <NextPrevBtnBlock
            curStep={curStep}
            setCurStep={setCurStep}
          />
        </>
      )}
    </div>
  )
}

export default Requests