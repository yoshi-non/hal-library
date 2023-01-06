import { useState } from "react";
import Books from "../components/Books";
import Navbar from "../components/Navbar";
import { dummyData } from "../dummyData";
import { BookData } from "../types/BookData";
import { css } from "@emotion/react"
import Head from "next/head";

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
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, user-scalable=yes"/>
      </Head>
      <main css={styles.main}>
        <Navbar setBookData={setBookData}/>
        <Books bookData={bookData}/>
      </main>
    </>
  )
}
