import { useState } from 'react'
import { css } from '@emotion/react'
import { SetBookData } from '../../../../types/SetBookData'

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
} & SetBookData

const RightFilBtn = ({contents, setBookData}: Props) => {
  const [isShow, setIsShow] = useState<boolean>(true)
  return (
    <button
      onClick={() => setIsShow(!isShow)}
      css={isShow ? styles.filRightBtn__show : styles.filRightBtn__hidden}
    >
      {contents}{!isShow ? <p>表示する</p> : <p>非表示にする</p>}
    </button>
  )
}

export default RightFilBtn