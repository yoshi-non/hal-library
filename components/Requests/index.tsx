import { css } from "@emotion/react";
import { useState } from "react";
import Progressbar from "./Progressbar";
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

  return (
    <div css={styles.container}>
      <div css={styles.curStepTitle}>{curStepTitle[curStep]}</div>
      <Progressbar curStep={curStep} setCurStep={setCurStep}/>

      {curStep === 0 && (
        <Step1
          classValue={classValue}
          usernameValue={usernameValue}
          setSchoolValue={setSchoolValue}
          setClassValue={setClassValue}
          setUsernameValue={setUsernameValue}
        />
      )}
      {curStep === 1 && (
        <Step2/>
      )}
      {curStep === 2 && (
        <Step3/>
      )}
      {curStep === 3 && (
        <Step4/>
      )}
    </div>
  )
}

export default Requests