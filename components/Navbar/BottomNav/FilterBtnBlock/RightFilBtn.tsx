import { useState } from 'react'
import { css } from '@emotion/react'
import { SetBookData } from '../../../../types/SetBookData'
import { SetFilterContents } from '../../../../types/SetFilterContents'
import { BookData } from '../../../../types/BookData'
import { dummyData } from '../../../../dummyData'

const styles = {
  filRightBtn__show: css`
    min-width: 110px;
    padding: 5px 8px;
    font-size: 0.9rem;
    font-weight: 800;
    color: #131921;
    background-color: #febd69;
    border: 2px solid #febd69;
    border-radius: 10px;
    transition: 0.3s;
  `,

  filRightBtn__hidden: css`
    min-width: 110px;
    padding: 5px 8px;
    font-size: 0.9rem;
    font-weight: 800;
    color: white;
    background-color: inherit;
    border: 2px solid white;
    border-radius: 10px;
    transition: 0.3s;
  `,
}

type Props = {
  contents: string
  filterContentsTheme: string
} & SetBookData & SetFilterContents

const RightFilBtn = ({contents, filterContentsTheme, setBookData, setFilterContents}: Props) => {
  const bookData = dummyData
  const [isShow, setIsShow] = useState<boolean>(true)
  const contentsHandler = () => {
    if (contents === "禁帯出"){
      if (isShow){
        // 非表示処理
        setFilterContents(contents)
        if (filterContentsTheme === "すべて") {
          const newBookData: BookData = bookData.filter((data) => (!data.division.includes(contents))&&data)
          setBookData(newBookData)
        } else {
          const newBookData: BookData = bookData.filter((data) => (data.place.includes(filterContentsTheme))&&(!data.division.includes(contents))&&data)
          setBookData(newBookData)
        }
      }
      if (!isShow) {
        // 表示処理
        setFilterContents("")
        if (filterContentsTheme === "すべて") {
          setBookData(bookData)
        } else {
          const newBookData: BookData = bookData.filter((data) => (data.place.includes(filterContentsTheme))&&data)
          setBookData(newBookData)
        }
      }
      setIsShow(!isShow)
    }
  }
  
  return (
    <button
      onClick={() => contentsHandler()}
      css={isShow ? styles.filRightBtn__show : styles.filRightBtn__hidden}
    >
      {contents}を{!isShow ? <p>表示する</p> : <p>非表示にする</p>}
    </button>
  )
}

export default RightFilBtn