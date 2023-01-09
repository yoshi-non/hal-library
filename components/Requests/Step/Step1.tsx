import { SetClassValue, SetSchoolValue, SetUsernameValue } from "../../../types/Step";
import InfoBlock from "./common/InfoBlock"

type Props = {
  classValue: string
  usernameValue: string
} & SetSchoolValue & SetClassValue & SetUsernameValue

const Step1 = ({classValue, usernameValue, setSchoolValue, setClassValue, setUsernameValue }: Props) => {
  return (
    <div>
      <InfoBlock/>
      <div>
        <span>校名</span>
        <select onChange={(e) => setSchoolValue(e.target.value)}>
          <option value=""></option>
          <option value="MODE">MODE</option>
          <option value="HAL">HAL</option>
          <option value="ISEN">ISEN</option>
          <option value="PIIF">PIIF</option>
          <option value="IPUT">IPUT</option>
        </select>
      </div>

      <div>
        <span>クラス記号</span>
        <input
          type="text"
          onChange={(e) => setClassValue(e.target.value)}
          value={classValue}
          placeholder="IT99"
        />
      </div>

      <div>
        <span>氏名</span>
        <input
          type="text"
          onChange={(e) => setUsernameValue(e.target.value)}
          value={usernameValue}
          placeholder="名前太郎"
        />
      </div>
    </div>
  )
}

export default Step1
