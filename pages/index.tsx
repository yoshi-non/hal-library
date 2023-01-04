import { useState } from "react";
import Books from "../components/Books";
import Navbar from "../components/Navbar";
import { dummyData } from "../dummyData";
import { BookData } from "../types/BookData";

export default function Home() {
  const defaultBookData: BookData = dummyData
  const [bookData, setBookData] = useState(defaultBookData)

  return (
    <>
      <div>
        <Navbar setBookData={setBookData}/>
        <Books bookData={bookData}/>
      </div>
    </>
  )
}
