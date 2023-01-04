import { Dispatch, SetStateAction } from "react"
import { BookData } from "./BookData"

export type SetBookData = {
    setBookData: Dispatch<SetStateAction<BookData>>
}
  