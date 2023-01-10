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

export type SetBooknameValue = {
    setBooknameValue: Dispatch<SetStateAction<string>>
}

export type SetAuthorValue = {
    setAuthorValue: Dispatch<SetStateAction<string>>
}

export type SetCompanyValue = {
    setCompanyValue: Dispatch<SetStateAction<string>>
}

export type SetRemarksValue = {
    setRemarksValue: Dispatch<SetStateAction<string>>
}

export type SetReasonValue = {
    setReasonValue: Dispatch<SetStateAction<string>>
}