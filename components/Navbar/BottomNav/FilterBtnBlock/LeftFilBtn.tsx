import { css } from '@emotion/react'
import { dummyData } from '../../../../dummyData'
import { BookData } from '../../../../types/BookData'
import { SetBookData } from '../../../../types/SetBookData'
import { SetFilterContentsTheme } from '../../../../types/SetFilterContentsTheme'

const styles = {
  filLeftBtn: css`
    padding: 5px 8px;
    font-size: 1.1rem;
    font-weight: 800;
    color: white;
    background-color: inherit;
    transition: 0.3s;
  `,
}

type Props = {
  contents: string
  filterContents: string
} & SetBookData & SetFilterContentsTheme

const LeftFilBtn = ({contents, filterContents, setBookData, setFilterContentsTheme}: Props) => {
  const bookData = dummyData
  const contentsHandler = () => {
    setFilterContentsTheme(contents)
    if (contents === "すべて") {
      setBookData(bookData)
    } else {
      if (filterContents === "") {
        const newBookData: BookData = bookData.filter((data) => (data.place.includes(contents))&&data)
        setBookData(newBookData)
      }else {
        const newBookData: BookData = bookData.filter((data) => (data.place.includes(contents))&&(!data.division.includes(filterContents))&&data)
        setBookData(newBookData)
      }
    }
  }

  return (
    <button
      css={styles.filLeftBtn}
      onClick={() => contentsHandler()}
    >
      {contents}
    </button>
  )
}

export default LeftFilBtn
