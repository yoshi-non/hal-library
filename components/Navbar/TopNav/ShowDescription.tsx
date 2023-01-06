import { css } from '@emotion/react'

const styles = {
  showDescBlock: css`
    display: flex;
    align-items: center;
    flex-direction: row;
    gap: 10px;
    flex-wrap: wrap;
    justify-content: flex-end;
  `,

  showDesc__normal: css`
    display: flex;
    align-items: center;
  `,

  showDesc__ban: css`
    display: flex;
    align-items: center;
  `,

  showDesc__normalColor: css`
    margin-left: 5px;
    width: 80px;
    height: 17px;
    background-color: rgb(200, 200, 200);
  `,

  showDesc__banColor: css`
    margin-left: 5px;
    width: 80px;
    height: 17px;
    background-color: rgb(200, 100, 100);
  `,

}

const ShowDescription = () => {
  return (
    <div css={styles.showDescBlock}>
      <div css={styles.showDesc__normal}>通常:<p css={styles.showDesc__normalColor}></p></div>
      <div css={styles.showDesc__ban}>禁帯出:<p css={styles.showDesc__banColor}></p></div>
    </div>
  )
}

export default ShowDescription
