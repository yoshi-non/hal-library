import { useState } from 'react'
import SearchIcon from '@mui/icons-material/Search'
import { css } from '@emotion/react'
import { dummyData } from '../../../dummyData'
import { SetBookDataProps } from '../../../types/SetBookDataProps'
import { BookData } from '../../../types/BookData'

const styles = {
  searchBlock: css`
    display: flex;
    align-items: center;
  `,

  searchInput: css`
    font-size: 1.8rem;
    border-radius: 10px 0px 0px 10px;
    padding: 5px 15px;
    &:focus {
      outline: 2px solid #febd69;
    }
    &:focus+.searchBtn{
      outline: 2px solid #febd69;
    } 
  `,

  searchBtn: css`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 0px 10px 10px 0px;
  `,

  searchIcon: css`
    height: 100%;
    width: 43.6px;
    background-color: #febd69;
    color: #131921;
    font-size: 1.8rem;
    border-radius: 0px 10px 10px 0px;
  `,
}

const Search = ({setBookData}: SetBookDataProps) => {
  const [searchText, setSearchText] = useState("");
  const bookData = dummyData

  const searchHandler = () => {
    const newBookData: BookData = bookData.filter(
      (data) => data.title.toUpperCase().includes(searchText)|| data.title.toLowerCase().includes(searchText) 
      &&data)
    
    setBookData(newBookData)
  }

  const handleKeyDown = (e: string) => {
    if (e === "Enter") {
      searchHandler()
    }
  }

  return (
    <div css={styles.searchBlock}>
      <input
        css={styles.searchInput}
        value={searchText}
        onChange={(event) => setSearchText(event.target.value)}
        placeholder="検索"
        onKeyDown={(event) => handleKeyDown(event.key)}
      />
      <button
        type='submit'
        css={styles.searchBtn}
        className="searchBtn"
        onClick={() => searchHandler()}
      >
        <SearchIcon css={styles.searchIcon}/>
      </button>
    </div>
  )
}

export default Search
