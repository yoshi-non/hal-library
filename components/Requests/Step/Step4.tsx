import { css } from '@emotion/react'
import PDF from './PDF'

const styles = {}

type Props = {
  [key : string] : string
}

const Step4 = ({schoolValue, classValue, usernameValue, booknameValue, authorValue, companyValue, remarksValue, reasonValue}: Props) => {
  return (
    <>
      <PDF />
    </>
  )
}

export default Step4
