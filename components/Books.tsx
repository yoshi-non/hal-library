/* eslint-disable @next/next/no-img-element */
import { css } from '@emotion/react';
import { BookData } from '../types/BookData';

const styles = {
  booksContainer: css`
    max-width: 1200px;
    margin: 0 auto;
    display: grid;
    gap: 10px;
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
    padding: 10px;
  `,

  bookCard: css`
    display: inline-block;
    background-color: rgb(240, 240, 240);
    border-radius: 8px;
    overflow: hidden;
  `,

  bookCard__img: css`
    padding: 8px;
    object-fit: cover;
    width: 100%;
    height: 250px;
    background-color: rgb(200, 200, 200);
  `,

  bookCard__banImg: css`
    padding: 8px;
    object-fit: cover;
    width: 100%;
    height: 250px;
    background-color: rgb(200, 100, 100);
  `,

  bookCard__section: css`
    color: #0F1111;
    padding: 0px 5px 5px 5px;
  `,

  bookCard__title: css`
    font-weight: 900;
    border-bottom: 1px solid rgb(182, 167, 167);
  `,

  bookCard__nkPlace: css`
    color: red;
  `,
}

type Props = {
  bookData: BookData
}

const Books = ({bookData}: Props) => {
  return (
    <div css={styles.booksContainer}>
      {bookData.map((book, index: number) => 
        <div key={index} css={styles.bookCard}>
          <img src={book.img_url} alt={book.title} css={book.division === "通常" ? styles.bookCard__img : styles.bookCard__banImg}/>
          <div css={styles.bookCard__section}>
            <p css={styles.bookCard__title}>
              {book.title}
            </p>
            <div>
              <p css={book.place !== "NK管理部" ? "" : styles.bookCard__nkPlace}>
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
