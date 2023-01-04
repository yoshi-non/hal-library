import { css } from '@emotion/react'
import { SetBookData } from '../../../../types/SetBookData'

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
} & SetBookData

const LeftFilBtn = ({contents, setBookData}: Props) => {
  return (
    <button css={styles.filLeftBtn}>
      {contents}
    </button>
  )
}

export default LeftFilBtn
