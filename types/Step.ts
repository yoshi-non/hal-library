import { Dispatch, SetStateAction } from "react"

export type SetSchoolValue = {
    setSchoolValue: Dispatch<SetStateAction<string>>
}

export type SetClassValue = {
    setClassValue: Dispatch<SetStateAction<string>>
}

export type SetUsernameValue = {
    setUsernameValue: Dispatch<SetStateAction<string>>
}
  