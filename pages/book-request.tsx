import { useState } from "react";
import Navbar from "../components/Navbar";
import { dummyData } from "../dummyData";
import { BookData } from "../types/BookData";
import { css } from "@emotion/react"
import Requests from "../components/Requests";

const BookRequest = () => {
  const defaultBookData: BookData = dummyData
  const [bookData, setBookData] = useState(defaultBookData)

  const styles = {
    main: css`
      width: 100%;
      overflow: hidden;
    `,
  }
  
  return (
    <>
      <main css={styles.main}>
        <Navbar setBookData={setBookData}/>
        <Requests/>
      </main>
    </>
  )
}

export default BookRequest
