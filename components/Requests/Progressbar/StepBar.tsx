import { css } from "@emotion/react"

const styles = {
  stepBar__select: css`
    flex: 1;
    padding: 0.25rem 0;
    border-radius: 0.25rem;
    max-height: 8px;
    background: linear-gradient(180deg,#9095ff,hsla(0,0%,100%,0)),#9eb9ff;
  `,

  stepBar: css`
    flex: 1;
    padding: 0.25rem 0;
    border-radius: 0.25rem;
    max-height: 8px;
    background: rgba(229,231,235,1);
  `,
}

type Props = {
  curStep: number
  thisStepNum: number
}

const StepBar = ({curStep, thisStepNum}: Props) => {
  return (
    <div css={thisStepNum <= curStep ? styles.stepBar__select : styles.stepBar}>
    </div>
  )
}

export default StepBar