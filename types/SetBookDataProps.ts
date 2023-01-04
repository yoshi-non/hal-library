import { Dispatch, SetStateAction } from "react"
import { BookData } from "./BookData"

export type SetBookDataProps = {
    setBookData: Dispatch<SetStateAction<BookData>>
}
  