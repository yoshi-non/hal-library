import PDF from './PDF'

type Props = {
  [key : string] : string
}

const Step4 = ({schoolValue, classValue, usernameValue, booknameValue, authorValue, companyValue, remarksValue, reasonValue}: Props) => {
  return (
    <>
      <PDF
        schoolValue={schoolValue}
        classValue={classValue}
        usernameValue={usernameValue}
        booknameValue={booknameValue}
        authorValue={authorValue}
        companyValue={companyValue}
        remarksValue={remarksValue}
        reasonValue={reasonValue}
      />
    </>
  )
}

export default Step4
