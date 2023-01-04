/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { dummyData } from "../dummyData";
import styles from '../styles/Books.module.css'
import { BookData } from '../types/BookData';

type Props = {
  bookData: BookData
}

const Books = ({bookData}: Props) => {
  return (
    <div className={styles.booksContainer}>
      {bookData.map((book, index: number) => 
        <div key={index} className={styles.bookCard}>
          <img src={book.img_url} alt={book.title} className={`${book.division === "通常" ? styles.bookCard__img : styles.bookCard__banImg}`}/>
          <div className={styles.bookCard__section}>
            <p className={styles.bookCard__title}>
              {book.title}
            </p>
            <div>
              <p className={`${book.place !== "NK管理部" ? styles.bookCard__place : styles.bookCard__nkPlace}`}>
                場所:{book.place}
              </p>
              <p>
                ¥{book.price}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Books
