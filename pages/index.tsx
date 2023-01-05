import { useState } from "react";
import Books from "../components/Books";
import Navbar from "../components/Navbar";
import { dummyData } from "../dummyData";
import { BookData } from "../types/BookData";
import { css } from "@emotion/react"

const styles = {
  main: css`
    width: 100%;
    overflow: hidden;
  `,
}

export default function Home() {
  const defaultBookData: BookData = dummyData
  const [bookData, setBookData] = useState(defaultBookData)

  return (
    <>
      <main css={styles.main}>
        <Navbar setBookData={setBookData}/>
        <Books bookData={bookData}/>
      </main>
    </>
  )
}
