import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import TextsmsIcon from '@mui/icons-material/Textsms';
import DownloadDoneIcon from '@mui/icons-material/DownloadDone';
import { css } from '@emotion/react';
import StepBlock from './StepBlock';
import { SetCurStep } from '../../../types/SetCurStep';
import StepBar from './StepBar';

const styles = {
  container: css`
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin: 50px 0;
  `,
  
  stepBlock__icon: css`
    color: white;
    font-size: 2rem;
  `,
}

type Props = {
  curStep: number
} & SetCurStep

const Progressbar = ({curStep, setCurStep}: Props) => {
  return (
    <div css={styles.container}>
      <StepBlock
        title="プロフィール"
        curStep={curStep}
        setCurStep={setCurStep}
        thisStepNum={0}
      >
        <AccountCircleIcon css={styles.stepBlock__icon}/>
      </StepBlock>

      <StepBar
        curStep={curStep}
        thisStepNum={1}
      />

      <StepBlock
        title="書籍情報"
        curStep={curStep}
        setCurStep={setCurStep}
        thisStepNum={1}
      >
        <AutoStoriesIcon css={styles.stepBlock__icon}/>
      </StepBlock>

      <StepBar
        curStep={curStep}
        thisStepNum={2}
      />

      <StepBlock
        title="リクエスト理由"
        curStep={curStep}
        setCurStep={setCurStep}
        thisStepNum={2}
      >
        <TextsmsIcon css={styles.stepBlock__icon}/>
      </StepBlock>

      <StepBar
        curStep={curStep}
        thisStepNum={3}
      />

      <StepBlock
        title="ダウンロード"
        curStep={curStep}
        setCurStep={setCurStep}
        thisStepNum={3}
      >
        <DownloadDoneIcon css={styles.stepBlock__icon}/>
      </StepBlock>
    </div>
  )
}

export default Progressbar
